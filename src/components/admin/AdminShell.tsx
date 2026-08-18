"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/admin/actions";
import type { SessionUser } from "@/lib/auth/session";

const navItems = [
  { href: "/admin", label: "Overview", match: (path: string) => path === "/admin" },
  {
    href: "/admin/enquiries",
    label: "Enquiries",
    match: (path: string) => path.startsWith("/admin/enquiries"),
  },
] as const;

function getTitle(pathname: string): string {
  if (pathname === "/admin") return "Overview";
  if (pathname === "/admin/enquiries") return "Enquiries";
  if (pathname.startsWith("/admin/enquiries/")) return "Enquiry";
  return "Administration";
}

export function AdminShell({
  user,
  newEnquiryCount,
  children,
}: {
  user: SessionUser;
  newEnquiryCount: number;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const title = getTitle(pathname);

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/admin">
          <span>
            <Image src="/img/brand/origina-mark.png" alt="" width={28} height={28} />
          </span>
          ORIGINA
          <small>INSTITUTION ADMIN</small>
        </Link>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.match(pathname) ? "active" : undefined}
            >
              {item.label}
              {item.label === "Enquiries" && newEnquiryCount > 0 ? (
                <span className="badge-status">{newEnquiryCount}</span>
              ) : null}
            </Link>
          ))}
          <Link href="/" target="_blank">
            View website
          </Link>
        </nav>
        <div className="sidebar-user">
          <strong>{user.name}</strong>
          <span>{user.role}</span>
          <form action={logout}>
            <button type="submit">Sign out</button>
          </form>
        </div>
      </aside>
      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <p>ORIGINA INSTITUTION</p>
            <h1>{title}</h1>
          </div>
          <span className="status-pill">
            <i /> System active
          </span>
        </header>
        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}
