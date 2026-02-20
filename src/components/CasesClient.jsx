// src\components\CasesClient.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import RevealWrapper from "./RevealWrapper";

/* ─── data ─────────────────────────────────────────────────────────── */

const CASES = [
  {
    id: "DW-047", date: "Jan 2026", outcome: "go",
    title: "B2B Invoice Automation Tool",
    summary: "Solo developer with 12 years enterprise experience evaluating a niche invoicing tool for construction subcontractors. Clear market gap, defined audience, realistic timeline.",
    context: "Solo developer with 12 years of enterprise software experience in the construction industry. Identified friction in invoice processing between general contractors and subcontractors.",
    factors: "Strong technical capability aligned with problem domain. Clear market gap validated by direct industry experience. Realistic resource constraints and timeline. Well-defined success criteria with achievable first milestone.",
    scores: { Feasibility: 87, Risk: 72, Cost: 81, Endgame: 78 },
  },
  {
    id: "DW-046", date: "Jan 2026", outcome: "nogo",
    title: "AI-Powered Legal Document Review",
    summary: "Former attorney considering document automation startup. Technical feasibility concerns, regulatory complexity, and capital requirements exceeded stated constraints.",
    context: "Former attorney with strong domain knowledge seeking to build AI-powered document review system. Encountered significant technical and regulatory barriers.",
    factors: "Technical feasibility below threshold due to skills gap. Regulatory complexity created unacceptable risk. Capital requirements exceeded available resources by a significant margin.",
    scores: { Feasibility: 48, Risk: 31, Cost: 44, Endgame: 52 },
  },
  {
    id: "DW-045", date: "Dec 2025", outcome: "modify",
    title: "Specialty Coffee Subscription Service",
    summary: "Coffee industry professional exploring D2C subscription model. Strong domain expertise but unclear differentiation and underestimated logistics costs. Modifications identified.",
    context: "15-year coffee industry veteran with strong supplier relationships exploring direct-to-consumer subscription model.",
    factors: "Cost structure dimension failed due to underestimated logistics. Modification: narrow initial offering to single origin, partner with existing fulfillment provider.",
    scores: { Feasibility: 74, Risk: 58, Cost: 49, Endgame: 67 },
  },
  {
    id: "DW-044", date: "Dec 2025", outcome: "go",
    title: "Technical Writing Agency",
    summary: "Senior technical writer with API documentation expertise evaluating agency model. Low capital requirements, existing network, clear service definition, sustainable growth path.",
    context: "Senior technical writer with 8 years specialising in API documentation, developer guides, and SDK documentation.",
    factors: "Exceptional alignment across all dimensions. Existing client relationships reduce risk. Capital requirements minimal. Clear, defensible service definition.",
    scores: { Feasibility: 91, Risk: 82, Cost: 88, Endgame: 85 },
  },
  {
    id: "DW-043", date: "Dec 2025", outcome: "nogo",
    title: "Fitness App with Social Features",
    summary: "Personal trainer seeking to build fitness tracking app. Saturated market, unclear differentiation, technical skills gap, and unrealistic timeline assumptions.",
    context: "Personal trainer with no technical background seeking to build a fitness app with social engagement features.",
    factors: "Technical feasibility failed: no development skills or budget for adequate hire. Market differentiation insufficient. Timeline assumptions required major correction.",
    scores: { Feasibility: 41, Risk: 38, Cost: 55, Endgame: 45 },
  },
  {
    id: "DW-042", date: "Nov 2025", outcome: "modify",
    title: "Online Course Platform for Architects",
    summary: "Architect with teaching experience exploring course business. Strong content expertise but platform choice and pricing model needed reconsideration. Specific modifications provided.",
    context: "Licensed architect with 12 years experience and adjunct teaching role exploring structured online course business.",
    factors: "Cost and endgame dimensions required modification. Platform choice was cost-inefficient. Modification: use established platform first, custom build only after validating demand.",
    scores: { Feasibility: 78, Risk: 63, Cost: 61, Endgame: 70 },
  },
  {
    id: "DW-041", date: "Nov 2025", outcome: "nogo",
    title: "Blockchain-Based Supply Chain Tool",
    summary: "Supply chain consultant proposing blockchain solution. Technology mismatch with stated problem, enterprise sales cycle incompatible with resources, unclear value proposition.",
    context: "Supply chain consultant with Fortune 500 client experience proposing blockchain-based tracking for pharmaceutical supply chains.",
    factors: "Blockchain technology mismatched to stated problem. Risk: enterprise sales cycle of 18+ months incompatible with 6-month runway. Value proposition unclear.",
    scores: { Feasibility: 52, Risk: 29, Cost: 38, Endgame: 41 },
  },
];

const FILTERS = ["all", "go", "nogo", "modify"];

const OUTCOME_STYLES = {
  go:     { bg: "#ebf4ff", border: "#bee3f8", text: "#2b6cb0" },
  nogo:   { bg: "#fff5f5", border: "#fed7d7", text: "#c53030" },
  modify: { bg: "#fffff0", border: "#faf089", text: "#744210" },
};

/* ─── sub-components ───────────────────────────────────────────────── */

function OutcomeBadge({ outcome }) {
  const label  = outcome === "nogo" ? "No-Go" : outcome.charAt(0).toUpperCase() + outcome.slice(1);
  const filled = outcome === "go";
  const half   = outcome === "modify";
  const s      = OUTCOME_STYLES[outcome];

  return (
    <div
      className="inline-flex items-center gap-[10px] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.05em]"
      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.text }}
    >
      <span
        className="w-[8px] h-[8px] border-[1.5px] flex-shrink-0"
        style={{
          borderColor: s.text,
          background: filled
            ? s.text
            : half
            ? `linear-gradient(135deg,${s.text} 50%,transparent 50%)`
            : "transparent",
        }}
      />
      {label}
    </div>
  );
}

function CaseModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[#0f1f38]/70" onClick={onClose} />

      <div className="relative bg-white max-w-[640px] w-full max-h-[80vh] overflow-y-auto p-12 z-10 border border-[#e2e8f0]">

        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-transparent border-0 cursor-pointer"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="2"  y1="2"  x2="18" y2="18" stroke="#0f1f38" strokeWidth="1.5" />
            <line x1="18" y1="2"  x2="2"  y2="18" stroke="#0f1f38" strokeWidth="1.5" />
          </svg>
        </button>

        {/* header */}
        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#718096] mb-3">{item.id}</p>
          <h2 className="font-serif text-[24px] font-medium text-[#0f1f38] mb-4">{item.title}</h2>
          <OutcomeBadge outcome={item.outcome} />
        </div>

        {/* context */}
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4a5568] mb-3">Context</p>
          <p className="text-[15px] leading-[1.75] text-[#4a5568]">{item.context}</p>
        </div>

        {/* scores */}
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4a5568] mb-3">
            Evaluation Scores
          </p>
          <div className="grid grid-cols-2 gap-[1px] bg-[#e2e8f0] mt-4">
            {Object.entries(item.scores).map(([key, val]) => (
              <div key={key} className="bg-white p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#718096] mb-1">{key}</p>
                <p className="font-serif text-[20px] font-medium text-[#0f1f38]">{val}</p>
                <div className="h-[3px] bg-[#e2e8f0] mt-2">
                  <div className="score-bar" style={{ width: `${val}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* factors */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4a5568] mb-3">
            Determining Factors
          </p>
          <p className="text-[15px] leading-[1.75] text-[#4a5568]">{item.factors}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── main client component ─────────────────────────────────────────── */

export default function CasesClient() {
  const [filter,   setFilter]   = useState("all");
  const [selected, setSelected] = useState(null);

  const visible = filter === "all"
    ? CASES
    : CASES.filter((c) => c.outcome === filter);

  return (
    <main>
      <div className="max-w-[1100px] mx-auto px-8">

        {/* ── Stats ── */}
        <RevealWrapper>
          <div className="grid grid-cols-3 gap-[1px] bg-[#e2e8f0] border border-[#e2e8f0] my-16">
            {[
              ["47",  "Total Evaluations"],
              ["34%", "Go Outcomes"      ],
              ["41%", "No-Go Outcomes"   ],
            ].map(([val, label]) => (
              <div key={label} className="bg-white p-8 text-center">
                <div className="font-serif text-[40px] font-normal text-[#0f1f38] mb-2">{val}</div>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4a5568]">{label}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* ── Filter ── */}
        <RevealWrapper>
          <div className="flex gap-2 flex-wrap py-8 border-b border-[#e2e8f0]">
            {FILTERS.map((f) => {
              const label = f === "all" ? "All" : f === "nogo" ? "No-Go" : f.charAt(0).toUpperCase() + f.slice(1);
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-[10px] border font-mono text-[11px] uppercase tracking-[0.06em] transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#0f1f38] text-white border-[#0f1f38]"
                      : "bg-white text-[#4a5568] border-[#e2e8f0] hover:border-[#0f1f38] hover:text-[#0f1f38]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </RevealWrapper>

        {/* ── Case list ── */}
        <div className="pb-24">
          {visible.map((c, i) => (
            <RevealWrapper key={c.id}>
              <article
                onClick={() => setSelected(c)}
                className={`grid py-10 border-b border-[#e2e8f0] cursor-pointer transition-all duration-300 hover:pl-4 hover:bg-[#f7f8fa] max-sm:grid-cols-1 max-sm:gap-6 ${
                  i === 0 ? "border-t border-[#e2e8f0]" : ""
                }`}
                style={{ gridTemplateColumns: "1fr 140px", gap: 48 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-[#f7f8fa] font-mono text-[10px] uppercase tracking-[0.1em] text-[#718096]">
                      {c.id}
                    </span>
                    <span className="font-mono text-[11px] text-[#718096]">{c.date}</span>
                  </div>
                  <h2 className="font-serif text-[20px] font-medium text-[#0f1f38] mb-3">{c.title}</h2>
                  <p className="text-[14px] leading-[1.75] text-[#4a5568] max-w-[560px]">{c.summary}</p>
                </div>
                <div className="flex flex-col items-end">
                  <OutcomeBadge outcome={c.outcome} />
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <CaseModal item={selected} onClose={() => setSelected(null)} />

      {/* ── CTA ── */}
      <section className="py-28 bg-[#0f1f38]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <RevealWrapper>
            <h2 className="font-serif text-[clamp(24px,4vw,36px)] font-normal text-white mb-5 leading-[1.25]">
              Have a decision to evaluate?
            </h2>
            <p className="text-[#a0aec0] mb-12 text-[16px] leading-[1.75] max-w-[400px] mx-auto">
              Submit an inquiry for a structured evaluation before committing resources.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/residential-position-determination#engage" className="btn-primary">
                Residential Position Determination
              </Link>
              <Link
                href="/strategic-evaluation#engage"
                className="inline-flex items-center gap-3 px-9 py-[18px] border border-white text-white font-sans text-[13px] font-medium tracking-[0.04em] transition-all duration-200 hover:bg-white hover:text-[#0f1f38]"
              >
                Strategic Project Evaluation
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}