import Link from "next/link";
import Footer from "@/components/Footer";
import RevealWrapper from "@/components/RevealWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Strategic Project Evaluation — DecisionWorks",
  description: "A structured evaluation for early-stage business, professional, or venture decisions. Returns Go, No-Go, or Modify with full scoring breakdown.",
};

function SectionLabel({ children }) {
  return (
    <p className="section-label font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568] mb-5">
      {children}
    </p>
  );
}

function ThinRule() {
  return <div className="w-12 h-[1px] bg-[#4a5568] mb-6" />;
}

const OUTCOME_STYLES = {
  go:     { bg: "#ebf4ff", border: "#bee3f8", text: "#2b6cb0" },
  nogo:   { bg: "#fff5f5", border: "#fed7d7", text: "#c53030" },
  modify: { bg: "#fffff0", border: "#faf089", text: "#744210" },
};

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
          background: filled ? s.text : half ? `linear-gradient(135deg,${s.text} 50%,transparent 50%)` : "transparent",
        }}
      />
      {label}
    </div>
  );
}

export default function StrategicPage() {
  return (
    <>

      {/* ════════════════════ HERO — matches homepage: text-center, no border */}
      <section className="bg-white pt-[120px] pb-[120px]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <p className="animate-hero-label font-mono text-[11px] uppercase tracking-[0.12em] text-[#4a5568] mb-6">
            Strategic Track · SPE
          </p>
          <h1 className="animate-hero-title text-[clamp(32px,5vw,56px)] font-serif font-normal leading-[1.25] max-w-[780px] mx-auto mb-6 text-[#0f1f38]">
            Strategic Project Evaluation
          </h1>
          <p className="animate-page-desc text-[17px] leading-[1.75] text-[#4a5568] max-w-[560px] mx-auto mb-12">
            A structured evaluation for early-stage professional, business, or venture
            decisions. Assesses feasibility, risk, cost, and endgame clarity against
            explicit thresholds. Returns a decision, not a plan.
          </p>
          <div className="animate-hero-ctas flex justify-center gap-4 flex-wrap">
            <Link href="#engage" className="btn-primary">
              Submit for Evaluation <span className="arrow" />
            </Link>
            <Link href="/cases" className="btn-secondary">
              View Past Case Studies <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ 1 · WHO THIS IS FOR */}
      <section className="py-24 bg-[#f7f8fa] border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="max-w-[800px] mx-auto">
              <ThinRule />
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38] mb-8">
                For solo professionals who are already competent.
              </h2>
              <p className="text-[17px] leading-[1.8] text-[#4a5568] mb-6">
                You have built things before. You understand execution. The question is
                not whether you can build it — it is whether you should. The risk you
                face is not technical. It is reputational and financial.
              </p>
              <p className="text-[17px] leading-[1.8] text-[#4a5568]">
                This evaluation is not for people exploring possibilities. It is for
                people who have a specific decision to make and want a structured,
                dispassionate assessment before committing resources.
              </p>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <div className="bg-white border border-[#e2e8f0] p-8 mt-12 max-w-[640px] mx-auto">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568] mb-6">
                This Is Not For You If
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "You are exploring possibilities without defined constraints.",
                  "You want encouragement, validation, or strategic partnership.",
                  "You need help building, not deciding.",
                  "You are not prepared to receive a No-Go recommendation.",
                ].map((text) => (
                  <div key={text} className="disq-row flex items-start gap-4 cursor-default group">
                    <span className="disq-mark w-3 h-3 border border-[#718096] mt-1 flex-shrink-0" />
                    <span className="text-[14px] leading-[1.6] text-[#4a5568] group-hover:text-[#0f1f38] transition-colors duration-200">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ════════════════════ 2 · EVALUATION CRITERIA */}
      <section className="py-24 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Evaluation Criteria</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38]">
                Four dimensions. Explicit thresholds.
              </h2>
            </div>
          </RevealWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#e2e8f0]">
            {[
              { n: "01", title: "Feasibility",    desc: "Can this be built with available resources? Technical viability, skill gaps, infrastructure requirements." },
              { n: "02", title: "Risk Exposure",  desc: "What could go wrong? Market risk, execution risk, reputational risk, dependency risk." },
              { n: "03", title: "Cost Structure", desc: "What does it actually cost? Total investment, burn rate, opportunity cost, hidden costs." },
              { n: "04", title: "Endgame Clarity",desc: "Where does this end? Exit paths, sustainability, long-term viability, success criteria." },
            ].map((d) => (
              <RevealWrapper key={d.title}>
                <div className="bg-[#f7f8fa] p-8 h-full hover:bg-[#ebf4ff] transition-colors duration-200">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#718096] mb-3">
                    Dimension {d.n}
                  </p>
                  <h4 className="font-serif text-[16px] font-medium text-[#0f1f38] mb-3 leading-[1.35]">{d.title}</h4>
                  <p className="text-[13px] leading-[1.75] text-[#4a5568]">{d.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ 3 · REQUIRED SUBMISSION */}
      <section className="py-24 bg-[#f7f8fa] border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Required Submission</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38]">
                What you must provide.
              </h2>
              <p className="text-[16px] text-[#4a5568] max-w-[480px] mt-4">
                Incomplete submissions are returned without evaluation.
              </p>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <div className="bg-white border border-[#e2e8f0] p-8 max-w-[720px]">
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
                <div key={title} className="flex items-start gap-4 py-4 border-b border-[#e2e8f0] last:border-0 text-[14px] leading-[1.7]">
                  <span className="w-[5px] h-[5px] bg-[#2b6cb0] mt-[8px] flex-shrink-0" />
                  <span className="text-[#4a5568]">
                    <strong className="font-medium text-[#0f1f38]">{title}:</strong> {desc}
                  </span>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ════════════════════ 4 · PROCESS */}
      <section className="py-24 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38]">
                Four steps. One outcome. Then it ends.
              </h2>
            </div>
          </RevealWrapper>
          {[
            { n: "01", title: "Submission",  desc: "Provide a structured description: problem, solution, audience, constraints, timeline, and definition of success." },
            { n: "02", title: "Evaluation",  desc: "The framework scores feasibility, risk, cost, and endgame clarity against explicit criteria. No interpretation." },
            { n: "03", title: "Decision",    desc: "You receive Go, No-Go, or Modify. Each outcome includes scoring breakdown and determining criteria." },
            { n: "04", title: "Conclusion",  desc: "The engagement ends. No follow-up. No implementation support. No ongoing relationship." },
          ].map((step, i) => (
            <RevealWrapper key={step.n}>
              <div
                className={`grid py-10 border-b border-[#e2e8f0] group ${i === 0 ? "border-t border-[#e2e8f0]" : ""}`}
                style={{ gridTemplateColumns: "72px 1fr", gap: "32px" }}
              >
                <span className="font-serif text-[48px] font-normal leading-none text-[#e2e8f0] select-none transition-colors duration-300 group-hover:text-[#cbd5e0]">
                  {step.n}
                </span>
                <div className="pt-2">
                  <h3 className="font-serif text-[18px] font-medium text-[#0f1f38] mb-2">{step.title}</h3>
                  <p className="text-[14px] leading-[1.75] text-[#4a5568] max-w-[480px]">{step.desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
          <RevealWrapper>
            <div className="mt-10">
              <Link
                href="/process"
                className="inline-flex items-center gap-3 border border-[#cbd5e0] px-8 py-4 font-sans text-[12px] font-medium tracking-[0.02em] text-[#4a5568] transition-all duration-300 hover:border-[#0f1f38] hover:text-[#0f1f38]"
              >
                View Full Method <span className="arrow" />
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ════════════════════ 5 · OUTCOMES */}
      <section className="py-24 bg-[#f7f8fa] border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Possible Outcomes</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38]">
                Three outcomes. Each is finite.
              </h2>
            </div>
          </RevealWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#e2e8f0]">
            {[
              { outcome: "go",     desc: "All dimensions meet or exceed thresholds. The idea is viable as submitted. Proceed with confidence. The decision document confirms what passed and why." },
              { outcome: "nogo",   desc: "One or more dimensions fall below thresholds with no viable modification path. Do not proceed. The document specifies which criteria failed and why." },
              { outcome: "modify", desc: "One or more dimensions fall below thresholds but can be addressed. The document specifies exact modifications required to achieve Go." },
            ].map((o) => (
              <RevealWrapper key={o.outcome}>
                <div className="bg-white p-10 h-full">
                  <div className="mb-4"><OutcomeBadge outcome={o.outcome} /></div>
                  <p className="text-[14px] leading-[1.75] text-[#4a5568]">{o.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ FINAL CTA — navy block matching homepage */}
      <section className="py-32 bg-[#0f1f38] border-t border-[#1c2637]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <RevealWrapper>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-serif font-normal text-white mb-6 leading-[1.25]">
              Ready to evaluate your idea?
            </h2>
            <p className="text-[16px] leading-[1.75] text-[#a0aec0] mb-12 max-w-[480px] mx-auto">
              Submit your idea for structured evaluation before committing resources.
              Confirmation of fit within 48 hours.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="#engage" className="btn-primary">
                Submit for Evaluation <span className="arrow" />
              </Link>
              <Link
                href="/residential-position-determination"
                className="inline-flex items-center gap-3 px-9 py-[18px] border-[1.5px] border-white text-white font-sans text-[13px] font-medium tracking-[0.04em] transition-all duration-200 hover:bg-white hover:text-[#0f1f38]"
              >
                Residential Evaluation <span className="arrow" />
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ════════════════════ ENGAGE */}
      <section className="py-24 bg-white border-t border-[#e2e8f0]" id="engage">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Engage</SectionLabel>
              <h2 className="text-[28px] font-serif font-normal text-[#0f1f38]">Submit for Strategic Evaluation</h2>
            </div>
          </RevealWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <RevealWrapper>
              <p className="text-[16px] leading-[1.75] text-[#4a5568] mb-4">
                If you have an early-stage idea and want a structured evaluation
                before committing resources, submit your inquiry. Confirmation
                of fit within 48 hours.
              </p>
              <p className="text-[13px] text-[#718096]">
                Inquiries that seek validation, lack specificity, or indicate
                misalignment with the framework's purpose will be declined.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={1}>
              <ContactForm track="Strategic Project Evaluation" />
            </RevealWrapper>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}