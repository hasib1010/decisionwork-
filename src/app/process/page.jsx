import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Method — DecisionWorks",
  description: "Four steps to a finite decision: Submission, Evaluation, Decision, Conclusion.",
};

function SectionLabel({ children }) {
  return (
    <p className="section-label font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568] mb-5">
      {children}
    </p>
  );
}

export default function ProcessPage() {
  return (
    <>
      {/* ════════════════════ HERO */}
      <section className="pt-[120px] pb-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <p className="animate-hero-label font-mono text-[11px] uppercase tracking-[0.12em] text-[#4a5568] mb-5">
            Method
          </p>
          <h1 className="animate-page-title text-[clamp(28px,5vw,48px)] font-serif font-normal leading-tight mb-6 text-[#0f1f38]">
            The Process
          </h1>
          <p className="animate-page-desc text-[18px] leading-relaxed max-w-[560px] text-[#4a5568]">
            Four steps. Each with explicit inputs, criteria, and outputs. No ambiguity,
            no interpretation, no ongoing engagement.
          </p>
        </div>
      </section>

      {/* ════════════════════ TIMELINE */}
      <div className="bg-[#f7f8fa] border-b border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="flex items-center overflow-x-auto py-8">
              {["Submit", "Evaluate", "Decide", "Conclude"].map((label, i) => (
                <div key={label} className="flex items-center flex-1 min-w-[80px]">
                  <div className="flex flex-col items-center gap-3 w-full">
                    <div className="flex items-center w-full">
                      {i > 0 && <div className="flex-1 h-[1px] bg-[#cbd5e0]" />}
                      <div
                        className="w-3 h-3 border-2 border-[#0f1f38] flex-shrink-0"
                        style={{ background: i === 0 ? "#0f1f38" : "transparent" }}
                      />
                      {i < 3 && <div className="flex-1 h-[1px] bg-[#cbd5e0]" />}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#4a5568] text-center">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>

      {/* ════════════════════ STEP ARTICLES */}
      <main>
        <div className="max-w-[1100px] mx-auto px-8">

          {/* ── 01 Submission ── */}
          <RevealWrapper>
            <article
              className="py-20 border-b border-[#e2e8f0] grid gap-20 max-md:grid-cols-1 max-md:gap-8"
              style={{ gridTemplateColumns: "200px 1fr" }}
            >
              <aside className="sticky top-[100px] h-fit">
                <div
                  className="font-serif text-[72px] leading-none text-[#e2e8f0] mb-3 select-none"
                >
                  01
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568]">Submission</p>
              </aside>
              <div>
                <h2 className="font-serif text-[28px] font-medium text-[#0f1f38] mb-6">Structured Input</h2>
                <p className="text-[16px] leading-[1.75] text-[#4a5568] mb-10">
                  You provide a complete description of your idea using a structured
                  format. Incomplete submissions are returned without evaluation.
                </p>
                <div className="bg-[#f7f8fa] border border-[#e2e8f0] p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568] mb-6">
                    Required Information
                  </p>
                  {[
                    ["Problem Statement",     "The specific problem your idea addresses, with evidence of its existence and severity."],
                    ["Proposed Solution",     "How your idea solves the problem, including core mechanism and differentiation."],
                    ["Target Audience",       "Who specifically will use this, with demographic and behavioral characteristics."],
                    ["Resource Constraints",  "Available capital, time, and capabilities. Be precise."],
                    ["Timeline Assumptions",  "Key milestones and deadlines you are operating under."],
                    ["Definition of Success", "Specific, measurable outcomes that would constitute success."],
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      className="flex items-start gap-4 py-4 border-b border-[#e2e8f0] last:border-0 text-[14px] leading-[1.7]"
                    >
                      <span className="w-[5px] h-[5px] bg-[#2b6cb0] mt-[8px] flex-shrink-0" />
                      <span className="text-[#4a5568]">
                        <strong className="font-medium text-[#0f1f38]">{title}:</strong> {desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </RevealWrapper>

          {/* ── 02 Evaluation ── */}
          <RevealWrapper>
            <article
              className="py-20 border-b border-[#e2e8f0] grid gap-20 max-md:grid-cols-1 max-md:gap-8"
              style={{ gridTemplateColumns: "200px 1fr" }}
            >
              <aside className="sticky top-[100px] h-fit">
                <div className="font-serif text-[72px] leading-none text-[#e2e8f0] mb-3 select-none">
                  02
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568]">Evaluation</p>
              </aside>
              <div>
                <h2 className="font-serif text-[28px] font-medium text-[#0f1f38] mb-6">Systematic Assessment</h2>
                <p className="text-[16px] leading-[1.75] text-[#4a5568] mb-10">
                  Your submission is evaluated against four dimensions. Each dimension
                  is scored on explicit criteria. There is no subjective interpretation.
                </p>
                <div className="grid grid-cols-2 gap-[1px] bg-[#e2e8f0] max-sm:grid-cols-1">
                  {[
                    ["01", "Feasibility",     "Can this be built with available resources? Technical viability, skill gaps, infrastructure requirements."],
                    ["02", "Risk Exposure",   "What could go wrong? Market risk, execution risk, reputational risk, dependency risk."],
                    ["03", "Cost Structure",  "What does it actually cost? Total investment, burn rate, opportunity cost, hidden costs."],
                    ["04", "Endgame Clarity", "Where does this end? Exit paths, sustainability, long-term viability, success criteria."],
                  ].map(([num, title, desc]) => (
                    <div key={title} className="bg-white p-7 hover:bg-[#f7f8fa] transition-colors duration-200">
                      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#718096] mb-2">
                        Dimension {num}
                      </p>
                      <h3 className="font-serif text-[16px] font-medium text-[#0f1f38] mb-2">{title}</h3>
                      <p className="text-[13px] leading-[1.7] text-[#4a5568]">{desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-[16px] leading-[1.75] text-[#4a5568]">
                  Each dimension produces a score. Scores are compared against thresholds.
                  The combination of scores determines the outcome.
                </p>
              </div>
            </article>
          </RevealWrapper>

          {/* ── 03 Decision ── */}
          <RevealWrapper>
            <article
              className="py-20 border-b border-[#e2e8f0] grid gap-20 max-md:grid-cols-1 max-md:gap-8"
              style={{ gridTemplateColumns: "200px 1fr" }}
            >
              <aside className="sticky top-[100px] h-fit">
                <div className="font-serif text-[72px] leading-none text-[#e2e8f0] mb-3 select-none">
                  03
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568]">Decision</p>
              </aside>
              <div>
                <h2 className="font-serif text-[28px] font-medium text-[#0f1f38] mb-6">Finite Outcome</h2>
                <p className="text-[16px] leading-[1.75] text-[#4a5568] mb-10">
                  The evaluation produces one of three outcomes. Each is accompanied by
                  the full scoring breakdown and the specific criteria that determined it.
                </p>
                <div className="mt-2">
                  {[
                    {
                      name: "Go",
                      filled: true,
                      color: { bg: "#ebf4ff", border: "#bee3f8", dot: "#2b6cb0" },
                      desc: "All dimensions meet or exceed thresholds. The idea is viable as submitted. Proceed with confidence. The decision document confirms what passed and why.",
                    },
                    {
                      name: "No-Go",
                      color: { bg: "#fff5f5", border: "#fed7d7", dot: "#c53030" },
                      desc: "One or more dimensions fall below thresholds with no viable modification path. Do not proceed. The document specifies which criteria failed and why they cannot be addressed.",
                    },
                    {
                      name: "Modify",
                      half: true,
                      color: { bg: "#fffff0", border: "#faf089", dot: "#744210" },
                      desc: "One or more dimensions fall below thresholds but can be addressed. The document specifies exact modifications required to achieve Go. You may resubmit after modifications.",
                    },
                  ].map((o, i) => (
                    <div
                      key={o.name}
                      className={`grid items-start py-8 border-b border-[#e2e8f0] max-sm:grid-cols-1 max-sm:gap-4 ${
                        i === 0 ? "border-t border-[#e2e8f0]" : ""
                      }`}
                      style={{ gridTemplateColumns: "140px 1fr", gap: 32 }}
                    >
                      <div
                        className="inline-flex items-center gap-3 px-4 py-2 self-start"
                        style={{ background: o.color.bg, border: `1px solid ${o.color.border}` }}
                      >
                        <span
                          className="w-[8px] h-[8px] border-[1.5px] flex-shrink-0"
                          style={{
                            borderColor: o.color.dot,
                            background: o.filled
                              ? o.color.dot
                              : o.half
                              ? `linear-gradient(135deg,${o.color.dot} 50%,transparent 50%)`
                              : "transparent",
                          }}
                        />
                        <span
                          className="font-mono text-[11px] font-medium uppercase tracking-[0.06em]"
                          style={{ color: o.color.dot }}
                        >
                          {o.name}
                        </span>
                      </div>
                      <p className="text-[15px] leading-[1.75] text-[#4a5568]">{o.desc}</p>
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
                <div className="font-serif text-[72px] leading-none text-[#e2e8f0] mb-3 select-none">
                  04
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568]">Conclusion</p>
              </aside>
              <div>
                <h2 className="font-serif text-[28px] font-medium text-[#0f1f38] mb-8">Engagement Ends</h2>
                {[
                  "You receive the decision document. The engagement concludes. There is no follow-up consultation, no implementation support, no ongoing relationship.",
                  "The decision is the deliverable. What you do with it is entirely your responsibility.",
                  "If you received a Modify outcome and wish to resubmit, that constitutes a new engagement.",
                ].map((p) => (
                  <p key={p} className="mb-6 last:mb-0 text-[16px] leading-[1.8] text-[#4a5568]">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          </RevealWrapper>

        </div>
      </main>

      {/* ════════════════════ FINAL CTA */}
      <section className="py-28 bg-[#0f1f38]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <RevealWrapper>
            <h2 className="font-serif text-[clamp(24px,4vw,36px)] font-normal text-white mb-5 leading-[1.25]">
              Ready to decide?
            </h2>
            <p className="text-[#a0aec0] mb-12 text-[16px] leading-[1.75] max-w-[420px] mx-auto">
              Submit an inquiry if you have an early-stage idea and want a structured
              evaluation before committing resources.
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

      <Footer />
    </>
  );
}