import Link from "next/link";

/**
 * primary        — crimson fill. Institution layer.
 * gold           — gold fill. Division layer only.
 * secondary      — outlined, for dark grounds.
 * secondary-dark — outlined, for light grounds.
 */
type ButtonVariant = "primary" | "gold" | "secondary" | "secondary-dark";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  gold: "btn-gold",
  secondary: "btn-secondary",
  "secondary-dark": "btn-secondary-dark",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${variantClass[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
