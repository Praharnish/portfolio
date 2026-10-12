"use client";

import { portfolio } from "@/data/portfolio";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (sending) return;

    const form = event.currentTarget;
    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Email service configuration is missing.");
      return;
    }

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        { publicKey }
      );

      setStatus("Message sent successfully! Thank you for reaching out and I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 mt-16 rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-cyan-500/10 px-6 py-10 md:px-10"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
        {portfolio.contact.label}
      </p>

      <div className="mt-4 grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            {portfolio.contact.title}
          </h2>

          <p className="mt-3 max-w-xl leading-7 text-slate-300">
            {portfolio.contact.description}
          </p>

          <p className="mt-6 text-sm text-slate-400">
            Have a project, internship opportunity, or question?
            Send me a message using this form.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="user_name"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Your name
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Your email
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              maxLength={150}
              placeholder="What would you like to discuss?"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              maxLength={5000}
              placeholder="Write your message..."
              className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              role="status"
              aria-live="polite"
              className="text-sm text-slate-200"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}