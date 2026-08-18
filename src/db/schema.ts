import { boolean, index, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const userRoles = ["owner", "admin", "editor"] as const;
export type UserRole = (typeof userRoles)[number];

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
