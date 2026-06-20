import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type AnswerItem = {
  question: string;
  answer: string;
};

export function AnswerBlocks({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: AnswerItem[];
}) {
  return (
    <Section aria-label={title} className="border-t border-ink/10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading size="compact" title={title} intro={intro} />
          </div>
          <dl className="lg:col-span-8">
            {items.map((item) => (
              <div key={item.question} className="border-t border-ink/15 py-6 first:pt-0">
                <dt className="text-lg font-semibold text-ink">{item.question}</dt>
                <dd className="mt-3 max-w-[68ch] text-pretty leading-relaxed text-ink/75">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
