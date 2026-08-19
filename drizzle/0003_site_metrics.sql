-- Privacy-conscious site metrics (page views, load timing, LCP)
CREATE TABLE IF NOT EXISTS "site_metrics" (
  "id" serial PRIMARY KEY NOT NULL,
  "path" text NOT NULL,
  "metric" text NOT NULL,
  "value" double precision DEFAULT 1 NOT NULL,
  "visitor_hash" text DEFAULT '' NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "idx_site_metrics_metric_created" ON "site_metrics" USING btree ("metric","created_at");
CREATE INDEX IF NOT EXISTS "idx_site_metrics_path_created" ON "site_metrics" USING btree ("path","created_at");
