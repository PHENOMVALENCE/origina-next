"use client";

import { useActionState } from "react";
import { savePublicationAction, type PublicationActionState } from "@/app/admin/actions";
import type { Publication } from "@/db/schema";

export function PublicationForm({ publication }: { publication?: Publication }) {
  const boundAction = savePublicationAction.bind(null, publication?.id ?? 0);
  const [state, formAction, isPending] = useActionState(boundAction, {} as PublicationActionState);

  return (
    <>
      {state.success ? (
        <div className="alert alert-success" role="status">
          {state.success}
        </div>
      ) : null}
      {state.error ? (
        <div className="alert alert-danger" role="alert">
          {state.error}
        </div>
      ) : null}

      <form action={formAction}>
        <div className="form-field">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input className="form-control" id="title" name="title" defaultValue={publication?.title ?? ""} required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="slug">
            Slug
          </label>
          <input
            className="form-control"
            id="slug"
            name="slug"
            defaultValue={publication?.slug ?? ""}
            pattern="[a-z0-9-]+"
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="type">
            Type
          </label>
          <select className="form-select" id="type" name="type" defaultValue={publication?.type ?? "institutional"}>
            <option value="news">News</option>
            <option value="research">Research</option>
            <option value="institutional">Institutional</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="status">
            Status
          </label>
          <select className="form-select" id="status" name="status" defaultValue={publication?.status ?? "draft"}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="excerpt">
            Excerpt
          </label>
          <textarea className="form-control" id="excerpt" name="excerpt" rows={3} defaultValue={publication?.excerpt ?? ""} />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="body">
            Body
          </label>
          <textarea className="form-control" id="body" name="body" rows={12} defaultValue={publication?.body ?? ""} />
        </div>
        <button className="btn-admin" type="submit" disabled={isPending}>
          {isPending ? "Saving…" : "Save publication"}
        </button>
      </form>
    </>
  );
}
