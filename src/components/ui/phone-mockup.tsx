import { cn } from "@/lib/cn";

/**
 * Stilisiertes Social-Media-/Reel-Mockup (reine Grafik, kein Foto).
 * Hochkant-"Video" mit Play-Button und angedeuteten Interaktionen.
 */
export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative w-[190px] rounded-[1.7rem] border border-white/15 bg-obsidian p-2 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.95)]",
        className,
      )}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.3rem] bg-[radial-gradient(120%_70%_at_50%_0%,rgba(199,154,52,0.2),transparent_55%)]">
        <div className="bg-grid absolute inset-0 opacity-[0.07]" />
        {/* Notch */}
        <div className="absolute left-1/2 top-2.5 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/15" />
        {/* Play */}
        <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-obsidian/40 text-gold backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-px" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        {/* Interaktionen */}
        <div className="absolute bottom-16 right-3 flex flex-col gap-3">
          <span className="h-6 w-6 rounded-full border border-white/20" />
          <span className="h-6 w-6 rounded-full border border-white/20" />
          <span className="h-6 w-6 rounded-full border border-white/20" />
        </div>
        {/* Caption */}
        <div className="absolute inset-x-3 bottom-3">
          <div className="h-2 w-2/3 rounded bg-white/30" />
          <div className="mt-1.5 h-2 w-1/2 rounded bg-white/15" />
        </div>
      </div>
    </div>
  );
}
