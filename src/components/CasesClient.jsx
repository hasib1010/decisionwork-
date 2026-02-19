// src\components\Casesclient.jsx
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

/* ─── sub-components ───────────────────────────────────────────────── */

function OutcomeBadge({ outcome }) {
  const label  = outcome === "nogo" ? "No-Go" : outcome.charAt(0).toUpperCase() + outcome.slice(1);
  const filled = outcome === "go";
  const half   = outcome === "modify";

  return (
    <div className="inline-flex items-center gap-[10px] px-5 py-3 bg-[#f3f3f3] font-mono text-[12px] uppercase tracking-[0.04em]">
      <span
        className="w-[10px] h-[10px] border-[1.5px] border-[#1a1a1a] flex-shrink-0"
        style={{
          background: filled
            ? "#1a1a1a"
            : half
            ? "linear-gradient(135deg,#1a1a1a 50%,transparent 50%)"
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
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative bg-[#fafafa] max-w-[640px] w-full max-h-[80vh] overflow-y-auto p-12 z-10">
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-transparent border-0 cursor-pointer"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="2"  y1="2"  x2="18" y2="18" stroke="#1a1a1a" strokeWidth="1.5" />
            <line x1="18" y1="2"  x2="2"  y2="18" stroke="#1a1a1a" strokeWidth="1.5" />
          </svg>
        </button>

        {/* header */}
        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#888] mb-3">{item.id}</p>
          <h2 className="text-[24px] font-medium mb-4">{item.title}</h2>
          <OutcomeBadge outcome={item.outcome} />
        </div>

        {/* context */}
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-3">Context</p>
          <p className="text-[15px] leading-[1.7] text-[#5a5a5a]">{item.context}</p>
        </div>

        {/* scores */}
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-3">
            Evaluation Scores
          </p>
          <div className="grid grid-cols-2 gap-[1px] bg-[#d4d4d4] mt-4">
            {Object.entries(item.scores).map(([key, val]) => (
              <div key={key} className="bg-[#fafafa] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#888] mb-1">{key}</p>
                <p className="font-mono text-[18px] font-medium">{val}</p>
                <div className="h-[3px] bg-[#e8e8e8] mt-2">
                  <div className="score-bar" style={{ width: `${val}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* factors */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-3">
            Determining Factors
          </p>
          <p className="text-[15px] leading-[1.7] text-[#5a5a5a]">{item.factors}</p>
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
      <div className="max-w-[1300px] mx-auto px-8">

        {/* ── Stats ── */}
        <RevealWrapper>
          <div className="grid grid-cols-3 gap-[1px] bg-[#d4d4d4] border border-[#d4d4d4] my-16">
            {[
              ["47",  "Total Evaluations"],
              ["34%", "Go Outcomes"      ],
              ["41%", "No-Go Outcomes"   ],
            ].map(([val, label]) => (
              <div key={label} className="bg-[#fafafa] p-8 text-center">
                <div className="font-mono text-[36px] font-normal mb-2">{val}</div>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a]">{label}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* ── Filter ── */}
        <RevealWrapper>
          <div className="flex gap-2 flex-wrap py-8 border-b border-[#e8e8e8]">
            {FILTERS.map((f) => {
              const label = f === "all" ? "All" : f === "nogo" ? "No-Go" : f.charAt(0).toUpperCase() + f.slice(1);
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-[10px] border font-mono text-[11px] uppercase tracking-[0.06em] transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#1a1a1a] text-[#fafafa] border-[#1a1a1a]"
                      : "bg-[#fafafa] text-[#5a5a5a] border-[#d4d4d4] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
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
                className={`grid py-12 border-b border-[#e8e8e8] cursor-pointer transition-all duration-300 hover:pl-4 hover:bg-gradient-to-r hover:from-[#f3f3f3] hover:to-[#fafafa] max-sm:grid-cols-1 max-sm:gap-6 ${
                  i === 0 ? "border-t border-[#e8e8e8]" : ""
                }`}
                style={{ gridTemplateColumns: "1fr 140px", gap: 48 }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-[#f3f3f3] font-mono text-[10px] uppercase tracking-[0.1em] text-[#888]">
                      {c.id}
                    </span>
                    <span className="font-mono text-[11px] text-[#888]">{c.date}</span>
                  </div>
                  <h2 className="text-[20px] font-medium mb-3">{c.title}</h2>
                  <p className="text-[15px] leading-[1.7] text-[#5a5a5a] max-w-[560px]">{c.summary}</p>
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
      <section className="py-24 border-t border-[#e8e8e8]">
        <div className="max-w-[480px] mx-auto px-8 text-center">
          <RevealWrapper>
            <h2 className="text-[24px] font-normal mb-4">Have an idea to evaluate?</h2>
            <p className="text-[#5a5a5a] mb-8">
              Submit an inquiry if you want a structured evaluation before committing resources.
            </p>
            <Link
              href="/#engage"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-[#fafafa] px-8 py-4 font-mono text-[12px] font-medium tracking-[0.02em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Submit Inquiry <span className="arrow" />
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}