-- Publications archive (news, research, institutional updates)
CREATE TABLE IF NOT EXISTS "publications" (
  "id" serial PRIMARY KEY NOT NULL,
  "type" text DEFAULT 'institutional' NOT NULL,
  "slug" text NOT NULL,
  "title" text NOT NULL,
  "excerpt" text DEFAULT '' NOT NULL,
  "body" text DEFAULT '' NOT NULL,
  "status" text DEFAULT 'draft' NOT NULL,
  "published_at" timestamp with time zone,
  "updated_by" integer,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "publications_slug_unique" UNIQUE("slug"),
  CONSTRAINT "publications_updated_by_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE set null ON UPDATE no action
);

CREATE INDEX IF NOT EXISTS "idx_publications_status_created" ON "publications" USING btree ("status","created_at");
