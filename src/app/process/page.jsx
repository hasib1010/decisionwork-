import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Process — DecisionWorks",
  description: "Four steps to a finite decision: Submission, Evaluation, Decision, Conclusion.",
};

function SectionLabel({ children }) {
  return (
    <p className="section-label font-mono text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-5">
      {children}
    </p>
  );
}

const steps = [
  {
    n: "01",
    slug: "Submission",
    heading: "Structured Input",
    intro: "You provide a complete description of your idea using a structured format. Incomplete submissions are returned without evaluation.",
    extra: null,
    requirements: [
      ["Problem Statement",    "The specific problem your idea addresses, with evidence of its existence and severity."],
      ["Proposed Solution",    "How your idea solves the problem, including core mechanism and differentiation."],
      ["Target Audience",      "Who specifically will use this, with demographic and behavioral characteristics."],
      ["Resource Constraints", "Available capital, time, and capabilities. Be precise."],
      ["Timeline Assumptions", "Key milestones and deadlines you are operating under."],
      ["Definition of Success","Specific, measurable outcomes that would constitute success."],
    ],
  },
  {
    n: "02",
    slug: "Evaluation",
    heading: "Systematic Assessment",
    intro: "Your submission is evaluated against four dimensions. Each dimension is scored on explicit criteria. There is no subjective interpretation.",
    extra: "Each dimension produces a score. Scores are compared against thresholds. The combination of scores determines the outcome.",
    dimensions: [
      ["01", "Feasibility",    "Can this be built with available resources? Technical viability, skill gaps, infrastructure requirements."],
      ["02", "Risk Exposure",  "What could go wrong? Market risk, execution risk, reputational risk, dependency risk."],
      ["03", "Cost Structure", "What does it actually cost? Total investment, burn rate, opportunity cost, hidden costs."],
      ["04", "Endgame Clarity","Where does this end? Exit paths, sustainability, long-term viability, success criteria."],
    ],
  },
  {
    n: "03",
    slug: "Decision",
    heading: "Finite Outcome",
    intro: "The evaluation produces one of three outcomes. Each is accompanied by the full scoring breakdown and the specific criteria that determined it.",
    outcomes: [
      { name: "Go",     filled: true,  desc: "All dimensions meet or exceed thresholds. The idea is viable as submitted. Proceed with confidence. The decision document confirms what passed and why." },
      { name: "No-Go",               desc: "One or more dimensions fall below thresholds with no viable modification path. Do not proceed. The document specifies which criteria failed and why they cannot be addressed." },
      { name: "Modify", half:   true,  desc: "One or more dimensions fall below thresholds but can be addressed. The document specifies exact modifications required to achieve Go. You may resubmit after modifications." },
    ],
  },
  {
    n: "04",
    slug: "Conclusion",
    heading: "Engagement Ends",
    paras: [
      "You receive the decision document. The engagement concludes. There is no follow-up consultation, no implementation support, no ongoing relationship.",
      "The decision is the deliverable. What you do with it is entirely your responsibility.",
      "If you received a Modify outcome and wish to resubmit, that constitutes a new engagement.",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* ════════════════════ HERO */}
      <section className="pt-40 pb-20 border-b border-[#e8e8e8]">
        <div className="max-w-[1300px] mx-auto px-8">
          <h1 className="animate-page-title text-[clamp(32px,5vw,48px)] font-normal leading-tight mb-6">
            The Process
          </h1>
          <p className="animate-page-desc text-[18px] leading-relaxed max-w-[560px] text-[#5a5a5a]">
            Four steps. Each with explicit inputs, criteria, and outputs. No ambiguity,
            no interpretation, no ongoing engagement.
          </p>
        </div>
      </section>

      {/* ════════════════════ TIMELINE */}
      <div className="max-w-[1300px] mx-auto px-8">
        <RevealWrapper>
          <div className="flex items-center overflow-x-auto py-8 bg-[#f3f3f3] px-8">
            {["Submit", "Evaluate", "Decide", "Conclude"].map((label, i) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center gap-3 min-w-[100px]">
                  <div
                    className={`w-3 h-3 rounded-full border-2 border-[#1a1a1a] ${
                      i === 0 ? "bg-[#1a1a1a]" : "bg-[#f3f3f3]"
                    }`}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#5a5a5a] text-center">
                    {label}
                  </span>
                </div>
                {i < 3 && <div className="flex-1 h-[1px] bg-[#d4d4d4] min-w-[40px] -mt-6" />}
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>

      {/* ════════════════════ STEP ARTICLES */}
      <main>
        <div className="max-w-[1300px] mx-auto px-8">

          {/* ── 01 Submission ── */}
          <RevealWrapper>
            <article
              className="py-20 border-b border-[#e8e8e8] grid gap-20 max-md:grid-cols-1 max-md:gap-8"
              style={{ gridTemplateColumns: "200px 1fr" }}
            >
              <aside className="sticky top-[100px] h-fit">
                <div className="font-mono text-[64px] leading-none text-[#d4d4d4] mb-4">01</div>
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#5a5a5a]">Submission</p>
              </aside>
              <div>
                <h2 className="text-[28px] font-medium mb-6">Structured Input</h2>
                <p className="text-[16px] leading-[1.7] text-[#5a5a5a] mb-6">
                  You provide a complete description of your idea using a structured
                  format. Incomplete submissions are returned without evaluation.
                </p>
                <div className="bg-[#f3f3f3] p-8 mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-5">
                    Required Information
                  </p>
                  {[
                    ["Problem Statement",    "The specific problem your idea addresses, with evidence of its existence and severity."],
                    ["Proposed Solution",    "How your idea solves the problem, including core mechanism and differentiation."],
                    ["Target Audience",      "Who specifically will use this, with demographic and behavioral characteristics."],
                    ["Resource Constraints", "Available capital, time, and capabilities. Be precise."],
                    ["Timeline Assumptions", "Key milestones and deadlines you are operating under."],
                    ["Definition of Success","Specific, measurable outcomes that would constitute success."],
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      className="flex items-start gap-4 py-3 border-b border-[#e8e8e8] last:border-0 text-[14px] leading-[1.6]"
                    >
                      <span className="w-[6px] h-[6px] bg-[#1a1a1a] mt-[7px] flex-shrink-0" />
                      <span><strong>{title}:</strong> {desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </RevealWrapper>

          {/* ── 02 Evaluation ── */}
          <RevealWrapper>
            <article
              className="py-20 border-b border-[#e8e8e8] grid gap-20 max-md:grid-cols-1 max-md:gap-8"
              style={{ gridTemplateColumns: "200px 1fr" }}
            >
              <aside className="sticky top-[100px] h-fit">
                <div className="font-mono text-[64px] leading-none text-[#d4d4d4] mb-4">02</div>
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#5a5a5a]">Evaluation</p>
              </aside>
              <div>
                <h2 className="text-[28px] font-medium mb-6">Systematic Assessment</h2>
                <p className="text-[16px] leading-[1.7] text-[#5a5a5a] mb-6">
                  Your submission is evaluated against four dimensions. Each dimension
                  is scored on explicit criteria. There is no subjective interpretation.
                </p>
                <div className="grid grid-cols-2 gap-[1px] bg-[#d4d4d4] mt-8 max-sm:grid-cols-1">
                  {[
                    ["01", "Feasibility",    "Can this be built with available resources? Technical viability, skill gaps, infrastructure requirements."],
                    ["02", "Risk Exposure",  "What could go wrong? Market risk, execution risk, reputational risk, dependency risk."],
                    ["03", "Cost Structure", "What does it actually cost? Total investment, burn rate, opportunity cost, hidden costs."],
                    ["04", "Endgame Clarity","Where does this end? Exit paths, sustainability, long-term viability, success criteria."],
                  ].map(([num, title, desc]) => (
                    <div key={title} className="bg-[#fafafa] p-7">
                      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-2">
                        Dimension {num}
                      </p>
                      <h3 className="text-[16px] font-medium mb-2">{title}</h3>
                      <p className="text-[13px] leading-[1.6] text-[#5a5a5a]">{desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[16px] leading-[1.7] text-[#5a5a5a]">
                  Each dimension produces a score. Scores are compared against thresholds.
                  The combination of scores determines the outcome.
                </p>
              </div>
            </article>
          </RevealWrapper>

          {/* ── 03 Decision ── */}
          <RevealWrapper>
            <article
              className="py-20 border-b border-[#e8e8e8] grid gap-20 max-md:grid-cols-1 max-md:gap-8"
              style={{ gridTemplateColumns: "200px 1fr" }}
            >
              <aside className="sticky top-[100px] h-fit">
                <div className="font-mono text-[64px] leading-none text-[#d4d4d4] mb-4">03</div>
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#5a5a5a]">Decision</p>
              </aside>
              <div>
                <h2 className="text-[28px] font-medium mb-6">Finite Outcome</h2>
                <p className="text-[16px] leading-[1.7] text-[#5a5a5a] mb-6">
                  The evaluation produces one of three outcomes. Each is accompanied by
                  the full scoring breakdown and the specific criteria that determined it.
                </p>
                <div className="mt-8">
                  {[
                    { name: "Go",     filled: true,  desc: "All dimensions meet or exceed thresholds. The idea is viable as submitted. Proceed with confidence. The decision document confirms what passed and why." },
                    { name: "No-Go",                 desc: "One or more dimensions fall below thresholds with no viable modification path. Do not proceed. The document specifies which criteria failed and why they cannot be addressed." },
                    { name: "Modify", half:   true,  desc: "One or more dimensions fall below thresholds but can be addressed. The document specifies exact modifications required to achieve Go. You may resubmit after modifications." },
                  ].map((o, i) => (
                    <div
                      key={o.name}
                      className={`grid items-start py-8 border-b border-[#e8e8e8] max-sm:grid-cols-1 max-sm:gap-4 ${
                        i === 0 ? "border-t border-[#e8e8e8]" : ""
                      }`}
                      style={{ gridTemplateColumns: "120px 1fr", gap: 32 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 border-2 border-[#1a1a1a] flex-shrink-0"
                          style={{
                            background: o.filled
                              ? "#1a1a1a"
                              : o.half
                              ? "linear-gradient(135deg,#1a1a1a 50%,transparent 50%)"
                              : "transparent",
                          }}
                        />
                        <span className="font-mono text-[14px] font-medium uppercase tracking-[0.04em]">
                          {o.name}
                        </span>
                      </div>
                      <p className="text-[15px] leading-[1.7] text-[#5a5a5a]">{o.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </RevealWrapper>

          {/* ── 04 Conclusion ── */}
          <RevealWrapper>
            <article
              className="py-20 grid gap-20 max-md:grid-cols-1 max-md:gap-8"
              style={{ gridTemplateColumns: "200px 1fr" }}
            >
              <aside className="sticky top-[100px] h-fit">
                <div className="font-mono text-[64px] leading-none text-[#d4d4d4] mb-4">04</div>
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#5a5a5a]">Conclusion</p>
              </aside>
              <div>
                <h2 className="text-[28px] font-medium mb-6">Engagement Ends</h2>
                {[
                  "You receive the decision document. The engagement concludes. There is no follow-up consultation, no implementation support, no ongoing relationship.",
                  "The decision is the deliverable. What you do with it is entirely your responsibility.",
                  "If you received a Modify outcome and wish to resubmit, that constitutes a new engagement.",
                ].map((p) => (
                  <p key={p} className="mb-6 last:mb-0 text-[16px] leading-[1.7] text-[#5a5a5a]">{p}</p>
                ))}
              </div>
            </article>
          </RevealWrapper>

        </div>
      </main>

      {/* ════════════════════ CTA */}
      <section className="py-24 border-t border-[#e8e8e8]">
        <div className="max-w-[480px] mx-auto px-8 text-center">
          <RevealWrapper>
            <h2 className="text-[24px] font-normal mb-4">Ready to decide?</h2>
            <p className="text-[#5a5a5a] mb-8">
              Submit an inquiry if you have an early-stage idea and want a structured
              evaluation before committing resources.
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

      <Footer />
    </>
  );
}