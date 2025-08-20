import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setStatus("sending");

    try {
      // Replace with your endpoint or serverless function
      await new Promise((r) => setTimeout(r, 800));
      console.log(Object.fromEntries(formData.entries()));
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4">
      <input
        className="w-full p-3 rounded-lg border"
        name="name"
        placeholder="Your name"
        required
      />
      <input
        className="w-full p-3 rounded-lg border"
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <textarea
        className="w-full p-3 rounded-lg border"
        name="message"
        placeholder="Message"
        rows={6}
        required
      />
      <button className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && (
        <p className="text-green-600">Thanks! I’ll be in touch.</p>
      )}
      {status === "error" && (
        <p className="text-red-600">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
