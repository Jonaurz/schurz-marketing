import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { findPendingSubmissionByToken, markSubmissionConfirmed } from "@/lib/contact-submissions";
import { sendConfirmedContactEmail } from "@/lib/mailer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Anfrage bestätigen",
  description: "Bestätigung der Kontaktanfrage an Schurz Marketing.",
  robots: { index: false, follow: false },
};

type ConfirmationState = {
  title: string;
  message: string;
  tone: "success" | "error";
};

async function confirmToken(token: string): Promise<ConfirmationState> {
  const submission = await findPendingSubmissionByToken(token);

  if (!submission) {
    return {
      title: "Bestätigungslink ungültig",
      message:
        "Der Link ist ungültig, bereits verwendet oder abgelaufen. Bitte sende die Anfrage bei Bedarf erneut.",
      tone: "error",
    };
  }

  try {
    const confirmedSubmission = { ...submission, confirmedAt: new Date().toISOString() };
    await sendConfirmedContactEmail(confirmedSubmission);
    await markSubmissionConfirmed(submission.id);
  } catch (error) {
    console.error(error);

    return {
      title: "Bestätigung erhalten, Versand fehlgeschlagen",
      message:
        "Die E-Mail konnte serverseitig nicht an mich weitergeleitet werden. Bitte versuche den Link später erneut oder kontaktiere mich direkt.",
      tone: "error",
    };
  }

  return {
    title: "Vielen Dank, deine Anfrage ist bestätigt.",
    message:
      "Deine Anfrage ist bei mir eingegangen. Ich melde mich persönlich bei dir.",
    tone: "success",
  };
}

export default async function KontaktBestaetigenPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const params = await searchParams;
  const state = await confirmToken(params.token ?? "");

  return (
    <>
      <PageHero eyebrow="Kontakt" title={state.title} />

      <Section spacing="tight" aria-label="Anfragebestätigung">
        <Container>
          <div
            className={`mx-auto max-w-2xl border p-8 text-center ${
              state.tone === "success"
                ? "border-accent/40 bg-accent/[0.06]"
                : "border-ink/15 bg-white"
            }`}
          >
            <p className="text-pretty text-lg leading-relaxed text-ink/75">
              {state.message}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
