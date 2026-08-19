import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "secondary-dark";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
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
