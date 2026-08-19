import { boolean, doublePrecision, index, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const userRoles = ["owner", "admin", "editor"] as const;
export type UserRole = (typeof userRoles)[number];

export const publicationTypes = ["news", "research", "institutional"] as const;
export type PublicationType = (typeof publicationTypes)[number];

export const publicationStatuses = ["draft", "published"] as const;
export type PublicationStatus = (typeof publicationStatuses)[number];

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").notNull().default("editor"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const auditLog = pgTable(
  "audit_log",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id").references(() => users.id, { onDelete: "set null" }),
    event: text("event").notNull(),
    context: text("context").notNull().default(""),
    ipHash: text("ip_hash").notNull().default(""),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("idx_audit_log_created").on(table.createdAt)],
);

export const publications = pgTable(
  "publications",
  {
    id: serial("id").primaryKey(),
    type: text("type").notNull().default("institutional"),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    excerpt: text("excerpt").notNull().default(""),
    body: text("body").notNull().default(""),
    status: text("status").notNull().default("draft"),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    updatedBy: integer("updated_by").references(() => users.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("idx_publications_status_created").on(table.status, table.createdAt)],
);

export const enquiries = pgTable(
  "enquiries",
  {
    id: serial("id").primaryKey(),
    reference: text("reference").notNull().unique(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull().default(""),
    organization: text("organization").notNull().default(""),
    subject: text("subject").notNull(),
    message: text("message").notNull(),
    status: text("status").notNull().default("new"),
    priority: text("priority").notNull().default("normal"),
    adminNotes: text("admin_notes").notNull().default(""),
    assignedTo: integer("assigned_to"),
    ipHash: text("ip_hash").notNull().default(""),
    userAgent: text("user_agent").notNull().default(""),
    submittedAt: timestamp("submitted_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("idx_enquiries_status_submitted").on(table.status, table.submittedAt),
    index("idx_enquiries_email").on(table.email),
  ],
);

export type Enquiry = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const authTokenPurposes = ["reset", "two_factor"] as const;
export type AuthTokenPurpose = (typeof authTokenPurposes)[number];

export const authTokens = pgTable(
  "auth_tokens",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    tokenHash: text("token_hash").notNull().unique(),
    purpose: text("purpose").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    usedAt: timestamp("used_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("idx_auth_tokens_user_purpose").on(table.userId, table.purpose)],
);

export type AuthToken = typeof authTokens.$inferSelect;
export type NewAuthToken = typeof authTokens.$inferInsert;

export type Publication = typeof publications.$inferSelect;
export type NewPublication = typeof publications.$inferInsert;

export const siteMetricNames = ["page_view", "load_ms", "lcp_ms"] as const;
export type SiteMetricName = (typeof siteMetricNames)[number];

export const siteMetrics = pgTable(
  "site_metrics",
  {
    id: serial("id").primaryKey(),
    path: text("path").notNull(),
    metric: text("metric").notNull(),
    value: doublePrecision("value").notNull().default(1),
    visitorHash: text("visitor_hash").notNull().default(""),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("idx_site_metrics_metric_created").on(table.metric, table.createdAt),
    index("idx_site_metrics_path_created").on(table.path, table.createdAt),
  ],
);

export type SiteMetric = typeof siteMetrics.$inferSelect;
export type NewSiteMetric = typeof siteMetrics.$inferInsert;
