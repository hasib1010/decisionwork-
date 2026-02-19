"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"),  1500);
    setTimeout(() => setStatus("idle"),  5000);
  };

  const fields = [
    { id: "name",     label: "Name",              type: "text",  placeholder: "Your name",                  required: true  },
    { id: "email",    label: "Email",             type: "email", placeholder: "your@email.com",             required: true  },
    { id: "timeline", label: "Decision Timeline", type: "text",  placeholder: "When do you need to decide?", required: false },
  ];

  return (
    <div className="bg-[#f3f3f3] p-10">
      <form onSubmit={handleSubmit}>

        {fields.map((f) => (
          <div key={f.id} className="mb-6">
            <label
              htmlFor={f.id}
              className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-[10px]"
            >
              {f.label}
            </label>
            <input
              type={f.type}
              id={f.id}
              name={f.id}
              placeholder={f.placeholder}
              required={f.required}
              className="w-full px-4 py-[14px] border border-[#d4d4d4] bg-[#fafafa] text-[#1a1a1a] text-sm outline-none focus:border-[#1a1a1a] transition-colors duration-200 placeholder:text-[#888]"
            />
          </div>
        ))}

        <div className="mb-6">
          <label
            htmlFor="idea"
            className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-[10px]"
          >
            Idea Summary
          </label>
          <textarea
            id="idea"
            name="idea"
            placeholder="Brief description of what you're considering building"
            required
            rows={5}
            className="w-full px-4 py-[14px] border border-[#d4d4d4] bg-[#fafafa] text-[#1a1a1a] text-sm outline-none focus:border-[#1a1a1a] transition-colors duration-200 resize-y placeholder:text-[#888]"
          />
        </div>

        <button
          type="submit"
          disabled={status !== "idle"}
          className="inline-flex items-center gap-3 bg-[#1a1a1a] text-[#fafafa] px-8 py-4 font-mono text-[12px] font-medium tracking-[0.02em] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60"
        >
          {status === "loading" && "Submitting…"}
          {status === "done"    && "Submitted ✓"}
          {status === "idle"    && <><span>Submit Inquiry</span><span className="arrow" /></>}
        </button>

        {status === "done" && (
          <p className="mt-6 p-6 bg-[#e8f5e8] font-mono text-sm text-[#1a1a1a]">
            Inquiry received. You will receive confirmation of fit within 48 hours.
          </p>
        )}

      </form>
    </div>
  );
}