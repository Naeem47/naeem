"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { AreaField } from "@/components/area-field";
import { profile } from "@/lib/data";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          name="name"
          autoComplete="name"
          placeholder="Name"
          className="rs-input"
        />
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          className="rs-input"
        />
      </div>
      <AreaField
        required
        name="message"
        rows={5}
        hint="Tell me about the role"
        filled={Boolean(message.trim())}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="btn-primary justify-self-start">
        Become a client
        <ArrowUpRight size={18} />
      </button>
      {status === "ready" ? (
        <p className="text-sm text-ink-mute">
          Your mail app should open addressed to {profile.email}.
        </p>
      ) : null}
    </form>
  );
}
