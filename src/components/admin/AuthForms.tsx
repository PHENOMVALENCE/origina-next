"use client";

import Link from "next/link";
import { useActionState } from "react";
import { login, setupOwnerAccount, type AuthActionState } from "@/app/admin/actions";
import {
  requestPasswordReset,
  resetPasswordAction,
  verifyTwoFactorAction,
  type UserActionState,
} from "@/app/admin/user-actions";

const initialState: AuthActionState = {};
const userInitialState: UserActionState = {};

export function LoginForm({ setupComplete = false, resetComplete = false }: { setupComplete?: boolean; resetComplete?: boolean }) {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <>
      {setupComplete ? (
        <div className="alert alert-success" role="status">
          Owner account created. Sign in to continue.
        </div>
      ) : null}
      {resetComplete ? (
        <div className="alert alert-success" role="status">
          Password updated. Sign in with your new password.
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
      <Link className="mt-4 block text-center text-sm text-[#766b61]" href="/admin/forgot-password">
        Forgot password?
      </Link>
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

export function ForgotPasswordForm() {
  const [state, formAction, isPending] = useActionState(requestPasswordReset, userInitialState);

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
      {!state.success ? (
        <>
          <p>Enter your administrator email.</p>
          <form action={formAction}>
            <div className="form-field">
              <label className="form-label" htmlFor="reset-email">
                Email
              </label>
              <input className="form-control" id="reset-email" type="email" name="email" required />
            </div>
            <button className="btn-admin" type="submit" disabled={isPending}>
              {isPending ? "Sending…" : "Send reset link"}
            </button>
          </form>
        </>
      ) : null}
    </>
  );
}

export function ResetPasswordForm({ token }: { token: string }) {
  const [state, formAction, isPending] = useActionState(resetPasswordAction, userInitialState);

  return (
    <>
      {state.error ? (
        <div className="alert alert-danger" role="alert">
          {state.error}
        </div>
      ) : null}
      <form action={formAction}>
        <input type="hidden" name="token" value={token} />
        <div className="form-field">
          <label className="form-label" htmlFor="new-password">
            New password
          </label>
          <input
            className="form-control"
            id="new-password"
            type="password"
            name="password"
            minLength={12}
            required
          />
          <small className="text-muted">At least 12 characters.</small>
        </div>
        <button className="btn-admin" type="submit" disabled={isPending}>
          {isPending ? "Updating…" : "Update password"}
        </button>
      </form>
    </>
  );
}

export function VerifyTwoFactorForm() {
  const [state, formAction, isPending] = useActionState(verifyTwoFactorAction, userInitialState);

  return (
    <>
      {state.error ? (
        <div className="alert alert-danger" role="alert">
          {state.error}
        </div>
      ) : null}
      <p>Enter the six-digit code sent to your account email.</p>
      <form action={formAction}>
        <div className="form-field">
          <label className="form-label" htmlFor="code">
            Security code
          </label>
          <input
            className="form-control"
            id="code"
            name="code"
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            required
            autoFocus
          />
        </div>
        <button className="btn-admin" type="submit" disabled={isPending}>
          {isPending ? "Verifying…" : "Verify"}
        </button>
      </form>
    </>
  );
}
