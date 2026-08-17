"use client";

import { useState } from "react";
import { enquirySubjectOptions } from "@/lib/content/contact";

const subjectKeys = Object.keys(enquirySubjectOptions);

function isValidSubject(value: string): value is keyof typeof enquirySubjectOptions {
  return subjectKeys.includes(value);
}

export function EnquiryForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const initialSubject = isValidSubject(defaultSubject) ? defaultSubject : "";
  const [pendingNotice, setPendingNotice] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPendingNotice(true);
  }

  return (
    <div className="border border-[#d8cec1] bg-[#fffdf8] p-6 shadow-[0_30px_80px_rgba(58,51,44,0.1)] sm:p-10 lg:p-14">
      {pendingNotice ? (
        <div
          className="relative overflow-hidden bg-linear-to-br from-[#1e1916] to-noir p-8 text-ivory sm:p-12"
          role="status"
        >
          <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-gold">Enquiry form</p>
          <h2 className="font-serif text-3xl sm:text-4xl">Submission coming soon.</h2>
          <p className="mt-4 max-w-lg text-sm text-[#b8ada2]">
            The enquiry form UI is live; secure submission and admin routing will be enabled in the
            next release. For now, please email{" "}
            <a href="mailto:info@origina.co" className="text-gold hover:underline">
              info@origina.co
            </a>{" "}
            directly with the same details.
          </p>
          <button
            type="button"
            onClick={() => setPendingNotice(false)}
            className="mt-6 rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
          >
            Back to form
          </button>
        </div>
      ) : (
        <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
          <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

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
              className="border-0 border-b border-[#cfc3b6] bg-transparent py-3 text-base outline-none focus:border-gold"
            />
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
              className="border-0 border-b border-[#cfc3b6] bg-transparent py-3 text-base outline-none focus:border-gold"
            />
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
              className="border-0 border-b border-[#cfc3b6] bg-transparent py-3 text-base outline-none focus:border-gold"
            />
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
              className="border-0 border-b border-[#cfc3b6] bg-transparent py-3 text-base outline-none focus:border-gold"
            />
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
              className="border-0 border-b border-[#cfc3b6] bg-transparent py-3 text-base outline-none focus:border-gold"
            >
              <option value="">Choose enquiry category</option>
              {Object.entries(enquirySubjectOptions).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
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
              aria-describedby="message-help"
              className="min-h-[150px] resize-y border-0 border-b border-[#cfc3b6] bg-transparent py-3 text-base outline-none focus:border-gold"
            />
            <span id="message-help" className="text-xs text-stone">
              Include the context, opportunity, timing, and next step you are requesting.
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-[0.67rem] text-[#786d63]">
              By submitting, you consent to Origina using these details to respond to your enquiry.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
            >
              Send enquiry
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
