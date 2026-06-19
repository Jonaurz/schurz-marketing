import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";

type Variant = "primary" | "secondary" | "ghost" | "inverted";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink/85",
  secondary: "border border-ink/20 bg-paper text-ink hover:border-ink",
  ghost: "text-ink/80 hover:text-ink",
  /* Für den dunklen CTA-Block am Seitenende. */
  inverted: "bg-paper text-ink hover:bg-white",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-[0.95rem]",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
  prefetch?: boolean;
  ariaLabel?: string;
  tabIndex?: number;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  type = "button",
  onClick,
  disabled,
  target,
  rel,
  prefetch,
  ariaLabel,
  tabIndex,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        prefetch={prefetch}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {inner}
    </button>
  );
}
