"use client";
import { useState } from "react";

export default function ContactForm({ track = "" }) {
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"),  1500);
    setTimeout(() => setStatus("idle"),  5000);
  };

  const fields = [
    { id: "name",     label: "Name",              type: "text",  placeholder: "Your name",                   required: true  },
    { id: "email",    label: "Email",             type: "email", placeholder: "your@email.com",              required: true  },
    { id: "timeline", label: "Decision Timeline", type: "text",  placeholder: "When do you need to decide?", required: false },
  ];

  return (
    <div className="bg-[#f7f8fa] border border-[#e2e8f0] p-10">
      {track && (
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#2b6cb0] mb-6">
          {track}
        </p>
      )}
      <form onSubmit={handleSubmit}>

        {fields.map((f) => (
          <div key={f.id} className="mb-6">
            <label
              htmlFor={f.id}
              className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#4a5568] mb-[10px]"
            >
              {f.label}
            </label>
            <input
              type={f.type}
              id={f.id}
              name={f.id}
              placeholder={f.placeholder}
              required={f.required}
              className="w-full px-4 py-[14px] border border-[#e2e8f0] bg-white text-[#0f1f38] text-sm outline-none focus:border-[#2b6cb0] transition-colors duration-200 placeholder:text-[#a0aec0]"
            />
          </div>
        ))}

        <div className="mb-6">
          <label
            htmlFor="idea"
            className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#4a5568] mb-[10px]"
          >
            Idea Summary
          </label>
          <textarea
            id="idea"
            name="idea"
            placeholder="Brief description of what you're considering"
            required
            rows={5}
            className="w-full px-4 py-[14px] border border-[#e2e8f0] bg-white text-[#0f1f38] text-sm outline-none focus:border-[#2b6cb0] transition-colors duration-200 resize-y placeholder:text-[#a0aec0]"
          />
        </div>

        <button
          type="submit"
          disabled={status !== "idle"}
          className="btn-primary border-0 cursor-pointer disabled:opacity-60"
        >
          {status === "loading" && "Submitting…"}
          {status === "done"    && "Submitted ✓"}
          {status === "idle"    && <><span>Submit Inquiry</span><span className="arrow" /></>}
        </button>

        {status === "done" && (
          <p className="mt-6 p-5 bg-[#ebf4ff] border border-[#bee3f8] font-mono text-sm text-[#0f1f38]">
            Inquiry received. You will receive confirmation of fit within 48 hours.
          </p>
        )}

      </form>
    </div>
  );
}