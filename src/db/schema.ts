import { index, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

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
