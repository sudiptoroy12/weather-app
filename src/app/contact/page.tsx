
"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect an API or email service here to send the message.
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            We wound love to hear from you.
          </h1>

          <p className="mt-6 leading-7 text-slate-400">
            Have a question, suggestion, or feedback about Atmos Weather?
            Send us a message using the form.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
              <Mail size={24} />
            </div>

            <div>
              <h2 className="font-semibold">Email & Feedback</h2>
              <p className="mt-1 text-sm text-slate-400">
                Questions, ideas, and suggestions are welcome.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message..."
              className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Send Message
            <Send size={18} />
          </button>

          {submitted && (
            <p role="status" className="text-sm text-amber-300">
              Demo only: your message has not been sent yet.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
