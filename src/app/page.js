import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

/* ─── small shared pieces ─────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <p className="section-label font-mono text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-5">
      {children}
    </p>
  );
}

function OutcomePill({ label, filled, half }) {
  return (
    <div className="flex items-center gap-[10px] px-5 py-3 border border-[#d4d4d4] bg-[#fafafa] font-mono text-[12px] tracking-[0.02em] cursor-default transition-all duration-300 hover:border-[#1a1a1a] hover:-translate-y-0.5">
      <span
        className="w-[10px] h-[10px] border-[1.5px] border-[#1a1a1a] inline-block flex-shrink-0"
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

/* ─── page ─────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════ HERO */}
      <section className="grid-bg min-h-screen flex items-center pt-[120px] pb-20 relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-8 relative z-10 w-full">

          <p className="animate-hero-label font-mono text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-6">
            Decision Framework
          </p>

          <h1 className="animate-hero-title text-[clamp(28px,5vw,42px)] font-normal leading-[1.35] max-w-[680px] mb-12">
            A structured framework that evaluates early-stage ideas and produces a
            finite outcome.{" "}
            <em className="not-italic text-[#5a5a5a]">Nothing more.</em>
          </h1>

          <div className="animate-hero-pills flex gap-3 flex-wrap">
            <OutcomePill label="Go"     filled />
            <OutcomePill label="No-Go"          />
            <OutcomePill label="Modify" half   />
          </div>
        </div>

        {/* decorative decision-tree SVG */}
        <svg
          viewBox="0 0 320 320"
          fill="none"
          className="draw-path absolute top-1/2 right-[-40px] -translate-y-1/2 w-[320px] h-[320px] opacity-[0.06] pointer-events-none hidden md:block"
        >
          <line x1="160" y1="20"  x2="160" y2="120" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="160" y1="120" x2="60"  y2="220" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="160" y1="120" x2="160" y2="220" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="160" y1="120" x2="260" y2="220" stroke="#1a1a1a" strokeWidth="2" />
          <circle cx="60"  cy="250" r="20" fill="#1a1a1a" />
          <circle cx="160" cy="250" r="20" fill="none" stroke="#1a1a1a" strokeWidth="2" />
          <circle cx="260" cy="250" r="20" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        </svg>
      </section>

      {/* ════════════════════════════════════ DEFINITION */}
      <section className="py-24 border-t border-[#e8e8e8]">
        <div className="max-w-[1300px] mx-auto px-8">

          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Definition</SectionLabel>
              <h2 className="text-[clamp(24px,4vw,32px)] font-normal leading-[1.4] max-w-[560px]">
                DecisionWorks evaluates feasibility, risk, cost, and endgame clarity.
              </h2>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={1}>
            <div className="relative bg-[#f3f3f3] p-12 mb-16 border-l-4 border-[#1a1a1a]">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#5a5a5a] mb-4">
                What You Get
              </p>
              <p className="text-[17px] leading-[1.7] max-w-[600px]">
                A decision document containing: the outcome (Go / No-Go / Modify),
                scores across all evaluation dimensions, the specific thresholds that
                were or were not met, and if applicable, the modifications required to
                change the outcome.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#d4d4d4]">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 mb-6 opacity-60" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4v24M4 16h24" stroke="#1a1a1a" strokeWidth="2" />
                    </svg>
                  ),
                  title: "Not Validation",
                  text: "If you are seeking confirmation that your idea is good, this framework will not provide it.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8 mb-6 opacity-60" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="12" stroke="#1a1a1a" strokeWidth="2" />
                      <path d="M16 8v8l6 6" stroke="#1a1a1a" strokeWidth="2" />
                    </svg>
                  ),
                  title: "Not Advice",
                  text: "The output is a decision, not a plan. You do not receive recommendations or strategic guidance.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8 mb-6 opacity-60" viewBox="0 0 32 32" fill="none">
                      <rect x="4" y="4" width="24" height="24" stroke="#1a1a1a" strokeWidth="2" />
                      <path d="M4 12h24M12 12v16" stroke="#1a1a1a" strokeWidth="2" />
                    </svg>
                  ),
                  title: "Not Ongoing",
                  text: "Engagement is finite. The framework produces an answer and concludes. No follow-up, no support.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-[#fafafa] p-10 hover:bg-[#f3f3f3] transition-colors duration-300"
                >
                  {card.icon}
                  <h3 className="font-mono text-[13px] font-medium uppercase tracking-[0.04em] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#5a5a5a]">{card.text}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>

        </div>
      </section>

      {/* ════════════════════════════════════ AUDIENCE */}
      <section className="py-24">
        <div className="max-w-[1300px] mx-auto px-8">

          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Audience</SectionLabel>
              <h2 className="text-[clamp(24px,4vw,32px)] font-normal leading-[1.4] max-w-[560px]">
                For solo professionals who are already competent.
              </h2>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={1}>
            <p className="text-[17px] leading-[1.7] max-w-[600px] text-[#5a5a5a] mb-12">
              You have built things before. You understand execution. The question is
              not whether you can build it, but whether you should. The risk you face
              is reputational, not technical.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={2}>
            <div className="bg-[#f3f3f3] p-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-8">
                This Is Not For You If
              </p>
              <div className="flex flex-col gap-5">
                {[
                  "You are exploring possibilities without constraints.",
                  "You want encouragement or strategic partnership.",
                  "You need help building, not deciding.",
                  "You are not prepared to receive a No-Go recommendation.",
                ].map((text) => (
                  <div key={text} className="disq-row flex items-start gap-5 pl-2 cursor-default group">
                    <span className="disq-mark w-3 h-3 border border-[#888] mt-1 flex-shrink-0" />
                    <span className="text-[15px] leading-[1.6] text-[#5a5a5a] group-hover:text-[#1a1a1a] transition-colors duration-200">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

        </div>
      </section>

      {/* ════════════════════════════════════ PROCESS PREVIEW */}
      <section className="py-24 border-t border-[#e8e8e8]">
        <div className="max-w-[1300px] mx-auto px-8">

          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-[clamp(24px,4vw,32px)] font-normal leading-[1.4] max-w-[560px]">
                Four steps. One outcome. Then it ends.
              </h2>
            </div>
          </RevealWrapper>

          {[
            { n: "01", title: "Submission",  desc: "You provide a structured description: problem, solution, audience, constraints, timeline, and definition of success." },
            { n: "02", title: "Evaluation",  desc: "The framework scores feasibility, risk, cost, and endgame clarity against explicit criteria. No interpretation." },
            { n: "03", title: "Decision",    desc: "You receive Go, No-Go, or Modify. Each outcome includes scoring breakdown and determining criteria." },
            { n: "04", title: "Conclusion",  desc: "The engagement ends. No follow-up, no implementation support, no ongoing relationship." },
          ].map((step, i) => (
            <RevealWrapper key={step.n}>
              <div
                className={`grid py-12 border-b border-[#e8e8e8] group ${i === 0 ? "border-t border-[#e8e8e8]" : ""}`}
                style={{ gridTemplateColumns: "80px 1fr", gap: "40px" }}
              >
                <div className="w-16 h-16 border border-[#d4d4d4] flex items-center justify-center font-mono text-[18px] text-[#5a5a5a] transition-all duration-300 group-hover:border-[#1a1a1a] group-hover:text-[#1a1a1a]">
                  {step.n}
                </div>
                <div className="pt-2">
                  <h3 className="text-[20px] font-medium mb-3">{step.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-[#5a5a5a] max-w-[480px]">{step.desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}

          <RevealWrapper>
            <div className="mt-12">
              <Link
                href="/process"
                className="inline-flex items-center gap-3 border border-[#d4d4d4] px-8 py-4 font-mono text-[12px] font-medium tracking-[0.02em] transition-all duration-300 hover:border-[#1a1a1a]"
              >
                View Full Process
                <span className="arrow" />
              </Link>
            </div>
          </RevealWrapper>

        </div>
      </section>

      {/* ════════════════════════════════════ DIAGRAM */}
      <section className="py-24">
        <div className="max-w-[1300px] mx-auto px-8">
          <RevealWrapper>
            <div className="bg-[#f3f3f3] px-10 py-20 my-16 flex flex-col items-center">

              {/* Idea node */}
              <div className="px-10 py-5 border border-[#d4d4d4] bg-[#fafafa] font-mono text-[12px] uppercase tracking-[0.04em]">
                Idea
              </div>

              {/* Vertical connector */}
              <div className="w-[1px] h-12 bg-[#d4d4d4] relative">
                <span className="absolute -bottom-[3px] -left-[3px] w-[7px] h-[7px] border-b border-r border-[#d4d4d4] rotate-45 bg-[#f3f3f3] block" />
              </div>

              {/* Evaluation node */}
              <div className="px-10 py-5 border border-[#d4d4d4] bg-[#fafafa] font-mono text-[12px] uppercase tracking-[0.04em]">
                Evaluation
              </div>

              {/* Branch */}
              <div className="relative flex gap-16 mt-0">
                {/* stem down from Evaluation */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-[#d4d4d4]" />
                {/* horizontal bar */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#d4d4d4]" />

                {[
                  { label: "Go",     filled: true,  tip: "Proceed with confidence" },
                  { label: "Modify", half:   true,  tip: "Adjust and resubmit"     },
                  { label: "No-Go",                 tip: "Do not proceed"          },
                ].map((o) => (
                  <div
                    key={o.label}
                    className="tip-parent flex flex-col items-center gap-3 cursor-pointer transition-transform duration-300 hover:-translate-y-1 mt-6 relative"
                  >
                    {/* stem down to dot */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-[#d4d4d4]" />

                    <div
                      className="w-4 h-4 border-2 border-[#1a1a1a] transition-transform duration-300 hover:scale-110"
                      style={{
                        background: o.filled
                          ? "#1a1a1a"
                          : o.half
                          ? "linear-gradient(135deg,#1a1a1a 50%,transparent 50%)"
                          : "transparent",
                      }}
                    />
                    <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#5a5a5a]">
                      {o.label}
                    </span>

                    {/* tooltip */}
                    <span className="tip-box bg-[#1a1a1a] text-[#fafafa] font-mono text-[11px] px-3 py-2">
                      {o.tip}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ════════════════════════════════════ ENGAGE */}
      <section className="py-24 border-t border-[#e8e8e8]" id="engage">
        <div className="max-w-[1300px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

            <RevealWrapper>
              <h2 className="text-[28px] font-normal mb-6">Submit an Inquiry</h2>
              <p className="text-[15px] leading-[1.7] text-[#5a5a5a] mb-4">
                If you have an early-stage idea and want a structured evaluation before
                committing resources, submit your inquiry. You will receive confirmation
                of fit within 48 hours.
              </p>
              <p className="text-[14px] text-[#5a5a5a]">
                Inquiries that seek validation, lack specificity, or indicate
                misalignment with the framework's purpose will be declined.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={1}>
              <ContactForm />
            </RevealWrapper>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}