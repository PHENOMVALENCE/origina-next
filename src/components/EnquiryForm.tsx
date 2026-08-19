"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitEnquiry, type EnquiryActionState } from "@/app/(site)/contact/actions";
import { enquirySubjectOptions } from "@/lib/content/contact";

const initialState: EnquiryActionState = {};

function isValidSubject(value: string): value is keyof typeof enquirySubjectOptions {
  return value in enquirySubjectOptions;
}

function fieldClass(hasError: boolean): string {
  return `border-0 border-b bg-transparent py-3 text-base outline-none ${
    hasError ? "border-oxblood" : "border-[#cfc3b6] focus:border-gold"
  }`;
}

export function EnquiryForm({
  defaultSubject = "",
  sentReference = "",
}: {
  defaultSubject?: string;
  sentReference?: string;
}) {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);
  const values = state.values;
  const errors = state.errors ?? {};
  const initialSubject =
    values?.subject ?? (isValidSubject(defaultSubject) ? defaultSubject : "");

  if (sentReference) {
    return (
      <div className="border border-[#d8cec1] bg-[#fffdf8] p-6 shadow-[0_30px_80px_rgba(58,51,44,0.1)] sm:p-10 lg:p-14">
        <div
          className="relative overflow-hidden bg-linear-to-br from-[#1e1916] to-noir p-8 text-ivory sm:p-12"
          role="status"
        >
          <span className="inline-grid h-14 w-14 place-items-center rounded-full border border-gold text-xl text-gold">
            ✓
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl">Message received.</h2>
          <p className="mt-4 max-w-lg text-sm text-[#b8ada2]">
            Thank you for writing to Origina. Your enquiry is now in our review queue and the
            appropriate team will respond using the details you supplied.
          </p>
          <p className="mt-8 border-t border-gold/25 pt-5 text-[0.62rem] uppercase tracking-[0.14em] text-gold">
            Reference · {sentReference}
          </p>
          <Link
            href="/contact#enquiry-form"
            className="mt-6 inline-block rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
          >
            Send another enquiry
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#d8cec1] bg-[#fffdf8] p-6 shadow-[0_30px_80px_rgba(58,51,44,0.1)] sm:p-10 lg:p-14">
      <form action={formAction} className="relative grid gap-5 sm:grid-cols-2" noValidate>
        <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {errors.form ? (
          <div
            className="border-l-3 border-oxblood bg-[#f6e9e7] px-4 py-3 text-sm text-[#692024] sm:col-span-2"
            role="alert"
          >
            {errors.form}
          </div>
        ) : null}

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[0.56rem] font-semibold uppercase tracking-[0.14em]">
            Full name
          </label>
          <input
            id="name"
            name="name"
            maxLength={100}
            autoComplete="name"
            required
            defaultValue={values?.name ?? ""}
            className={fieldClass(Boolean(errors.name))}
          />
          {errors.name ? <span className="text-xs text-oxblood">{errors.name}</span> : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[0.56rem] font-semibold uppercase tracking-[0.14em]">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={190}
            autoComplete="email"
            required
            defaultValue={values?.email ?? ""}
            className={fieldClass(Boolean(errors.email))}
          />
          {errors.email ? <span className="text-xs text-oxblood">{errors.email}</span> : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="organization" className="text-[0.56rem] font-semibold uppercase tracking-[0.14em]">
            Organisation <span className="font-normal text-[#7b7065]">Optional</span>
          </label>
          <input
            id="organization"
            name="organization"
            maxLength={150}
            autoComplete="organization"
            defaultValue={values?.organization ?? ""}
            className={fieldClass(Boolean(errors.organization))}
          />
          {errors.organization ? (
            <span className="text-xs text-oxblood">{errors.organization}</span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-[0.56rem] font-semibold uppercase tracking-[0.14em]">
            Phone <span className="font-normal text-[#7b7065]">Optional</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            defaultValue={values?.phone ?? ""}
            className={fieldClass(Boolean(errors.phone))}
          />
          {errors.phone ? <span className="text-xs text-oxblood">{errors.phone}</span> : null}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="subject" className="text-[0.56rem] font-semibold uppercase tracking-[0.14em]">
            Enquiry type
          </label>
          <select
            id="subject"
            name="subject"
            required
            defaultValue={initialSubject}
            className={fieldClass(Boolean(errors.subject))}
          >
            <option value="">Choose enquiry category</option>
            {Object.entries(enquirySubjectOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.subject ? <span className="text-xs text-oxblood">{errors.subject}</span> : null}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-[0.56rem] font-semibold uppercase tracking-[0.14em]">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            minLength={30}
            maxLength={5000}
            required
            defaultValue={values?.message ?? ""}
            aria-describedby="message-help"
            className={`min-h-[150px] resize-y ${fieldClass(Boolean(errors.message))}`}
          />
          <span id="message-help" className="text-xs text-stone">
            Include the context, opportunity, timing, and next step you are requesting.
          </span>
          {errors.message ? <span className="text-xs text-oxblood">{errors.message}</span> : null}
        </div>

        <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xs text-[0.67rem] text-[#786d63]">
            By submitting, you consent to Origina using these details to respond to your enquiry.
          </p>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light disabled:opacity-60"
          >
            {isPending ? "Sending…" : "Send enquiry"}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </form>
    </div>
  );
}
