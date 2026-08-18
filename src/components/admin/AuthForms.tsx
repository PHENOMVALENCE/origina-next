"use client";

import { useActionState } from "react";
import { login, setupOwnerAccount, type AuthActionState } from "@/app/admin/actions";

const initialState: AuthActionState = {};

export function LoginForm({ setupComplete = false }: { setupComplete?: boolean }) {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <>
      {setupComplete ? (
        <div className="alert alert-success" role="status">
          Owner account created. Sign in to continue.
        </div>
      ) : null}
      {state.error ? (
        <div className="alert alert-danger" role="alert">
          {state.error}
        </div>
      ) : null}
      <form action={formAction}>
        <div className="form-field">
          <label className="form-label" htmlFor="login-email">
            Email
          </label>
          <input className="form-control" id="login-email" type="email" name="email" autoComplete="username" required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="login-password">
            Password
          </label>
          <input
            className="form-control"
            id="login-password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </div>
        <button className="btn-admin" type="submit" disabled={isPending}>
          {isPending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </>
  );
}

export function SetupForm() {
  const [state, formAction, isPending] = useActionState(setupOwnerAccount, initialState);

  return (
    <>
      {state.error ? (
        <div className="alert alert-danger" role="alert">
          {state.error}
        </div>
      ) : null}
      <form action={formAction}>
        <div className="form-field">
          <label className="form-label" htmlFor="setup-name">
            Full name
          </label>
          <input className="form-control" id="setup-name" name="name" required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="setup-email">
            Email
          </label>
          <input className="form-control" id="setup-email" type="email" name="email" required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="setup-password">
            Password
          </label>
          <input
            className="form-control"
            id="setup-password"
            type="password"
            name="password"
            minLength={10}
            required
          />
          <small className="text-muted">At least 10 characters.</small>
        </div>
        <button className="btn-admin" type="submit" disabled={isPending}>
          {isPending ? "Creating…" : "Create owner account"}
        </button>
      </form>
    </>
  );
}
