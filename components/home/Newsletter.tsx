"use client";

import { FormEvent, useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    localStorage.setItem("authentic-sikkim-newsletter", email.trim());
    setSubscribed(true);
  }

  return (
    <section className="mt-16 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-12">
      <div className="max-w-3xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600">
          <Mail />
        </div>
        <h2 className="mt-6 text-3xl font-black sm:text-4xl">Stay close to Sikkim</h2>
        <p className="mt-3 text-slate-300">
          Save your email on this device for now. A server-side newsletter service can be connected later without changing the design.
        </p>

        {subscribed ? (
          <div className="mt-7 flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-semibold">
            <CheckCircle2 className="text-emerald-400" />
            You’re subscribed on this device.
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-xl px-5 py-4 text-slate-950 outline-none ring-red-500 focus:ring-2"
            />
            <button className="rounded-xl bg-red-600 px-7 py-4 font-bold hover:bg-red-500">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
