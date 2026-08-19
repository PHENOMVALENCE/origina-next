"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { logout } from "@/app/admin/actions";
import { hasRole, type SessionUser } from "@/lib/auth/roles";

const baseNavItems = [
  { href: "/admin", label: "Overview", match: (path: string) => path === "/admin" },
  {
    href: "/admin/enquiries",
    label: "Enquiries",
    match: (path: string) => path.startsWith("/admin/enquiries"),
  },
  {
    href: "/admin/publications",
    label: "Publications",
    match: (path: string) => path.startsWith("/admin/publications"),
  },
] as const;

const adminNavItems = [
  {
    href: "/admin/analytics",
    label: "Analytics",
    match: (path: string) => path.startsWith("/admin/analytics"),
  },
  {
    href: "/admin/users",
    label: "Users",
    match: (path: string) => path.startsWith("/admin/users"),
  },
  {
    href: "/admin/audit",
    label: "Audit log",
    match: (path: string) => path.startsWith("/admin/audit"),
  },
] as const;

function getTitle(pathname: string): string {
  if (pathname === "/admin") return "Overview";
  if (pathname === "/admin/enquiries") return "Enquiries";
  if (pathname.startsWith("/admin/enquiries/")) return "Enquiry";
  if (pathname === "/admin/publications") return "Publications";
  if (pathname.startsWith("/admin/publications/")) return "Publication";
  if (pathname === "/admin/analytics") return "Analytics";
  if (pathname === "/admin/users") return "Users";
  if (pathname.startsWith("/admin/users/")) return "User";
  if (pathname === "/admin/audit") return "Audit log";
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
  const [navOpen, setNavOpen] = useState(false);
  const canManageTeam = hasRole(user, ["owner", "admin"]);
  const navItems = canManageTeam ? [...baseNavItems, ...adminNavItems] : baseNavItems;

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <div className={`admin-shell${navOpen ? " admin-shell--nav-open" : ""}`}>
      <button
        type="button"
        className="admin-nav-toggle"
        aria-expanded={navOpen}
        aria-controls="admin-sidebar"
        onClick={() => setNavOpen((open) => !open)}
      >
        {navOpen ? "Close menu" : "Menu"}
      </button>
      {navOpen ? (
        <button
          type="button"
          className="admin-nav-overlay"
          aria-label="Close navigation"
          onClick={() => setNavOpen(false)}
        />
      ) : null}
      <aside id="admin-sidebar" className={`admin-sidebar${navOpen ? " is-open" : ""}`}>
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
              onClick={() => setNavOpen(false)}
            >
              {item.label}
              {item.label === "Enquiries" && newEnquiryCount > 0 ? (
                <span className="badge-status">{newEnquiryCount}</span>
              ) : null}
            </Link>
          ))}
          <Link href="/" target="_blank" onClick={() => setNavOpen(false)}>
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
