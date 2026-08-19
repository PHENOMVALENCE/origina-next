import Link from "next/link";

export function TextLink({
  href,
  children,
  light = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={`${light ? "text-link-light" : "text-link"} ${className}`.trim()}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
