import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { getAdminSession, isAdminConfigured } from "@/lib/admin-auth";
import { LoginForm } from "./login-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect("/schurz-admin");

  return (
    <>
      <PageHero
        eyebrow="Privater Bereich"
        title="Admin Login"
        subtitle="Dieser Bereich ist nicht öffentlich verlinkt und nur mit Server-Passwort zugänglich."
      />

      <Section spacing="tight" aria-label="Admin Login">
        <Container>
          {isAdminConfigured() ? (
            <LoginForm />
          ) : (
            <div className="mx-auto max-w-2xl rounded-2xl border border-gold/30 bg-gold/[0.06] p-6 text-sm leading-relaxed text-platinum/85">
              Der Admin-Login ist im Code vorbereitet. Setzen Sie auf dem Server
              <code className="mx-1 rounded bg-obsidian px-1 py-0.5 text-gold">
                ADMIN_PASSWORD_HASH
              </code>
              und
              <code className="mx-1 rounded bg-obsidian px-1 py-0.5 text-gold">
                ADMIN_SESSION_SECRET
              </code>
              , damit er aktiv wird.
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
