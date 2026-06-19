import { LogoMark } from "../logo";
import { cn } from "@/lib/cn";

/**
 * Stilisiertes Website-Mockup (reine Grafik, kein Foto/Screenshot).
 * Zeigt einen Browser-Rahmen mit angedeutetem Seitenlayout in Markenfarben.
 */
export function BrowserMockup({
  domain = "schurz-marketing.de",
  className,
}: {
  domain?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "overflow-hidden rounded-xl border border-white/[0.12] bg-graphite/60 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.95)]",
        className,
      )}
    >
      {/* Browser-Leiste */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-obsidian/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 flex-1 truncate rounded-full bg-white/[0.04] px-3 py-1 text-[0.65rem] text-platinum/50">
          {domain}
        </span>
      </div>
      {/* Angedeutetes Seitenlayout */}
      <div className="relative aspect-[16/10] bg-[radial-gradient(120%_85%_at_22%_0%,rgba(199,154,52,0.16),transparent_60%)] p-5 sm:p-6">
        <div className="bg-grid absolute inset-0 opacity-[0.05]" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between">
            <LogoMark className="h-4 w-4 text-gold" />
            <div className="flex gap-1.5">
              <span className="h-1.5 w-6 rounded bg-white/15" />
              <span className="h-1.5 w-6 rounded bg-white/15" />
              <span className="h-1.5 w-9 rounded bg-gold/60" />
            </div>
          </div>
          <div className="mt-auto">
            <div className="h-2.5 w-1/2 rounded bg-white/25" />
            <div className="mt-2 h-2.5 w-2/3 rounded bg-gold/55" />
            <div className="mt-4 flex gap-2">
              <span className="h-4 w-16 rounded bg-gold" />
              <span className="h-4 w-12 rounded border border-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
