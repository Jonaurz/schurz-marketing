import { ChevronDown } from "./icons";

export type FaqItem = { q: string; a: React.ReactNode };

/** Robustes FAQ-Accordion auf Basis nativer Details/Summary-Elemente. */
export function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => (
        <details key={item.q} className="group" open={i === 0}>
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-6 py-5 text-left transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            <span className="text-base font-semibold text-ink sm:text-lg">
              {item.q}
            </span>
            <ChevronDown className="h-5 w-5 shrink-0 text-ink/50 transition-transform duration-300 ease-out group-open:rotate-180" />
          </summary>
          <div className="max-w-2xl pb-6 pr-10 leading-relaxed text-ink/70">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
