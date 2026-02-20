import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

/* ─── small shared pieces ─────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <p className="section-label font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568] mb-5">
      {children}
    </p>
  );
}

/* ─── page ─────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════ HERO */}
      <section className="bg-white pt-[120px] pb-[120px]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">

          <p className="animate-hero-label font-mono text-[11px] uppercase tracking-[0.12em] text-[#4a5568] mb-6">
            Structural Decision Architecture
          </p>

          <h1 className="animate-hero-title text-[clamp(32px,5vw,56px)] font-serif leading-[1.2] max-w-[780px] mx-auto mb-6 text-[#0f1f38]">
            Decide Deliberately.
          </h1>

          <p className="animate-hero-ctas text-[17px] leading-[1.75] text-[#4a5568] max-w-[520px] mx-auto mb-12">
            A structured framework that evaluates early-stage decisions and produces
            a finite outcome:{" "}
            <strong className="font-medium text-[#0f1f38]">Go, No-Go, or Modify.</strong>{" "}
            Nothing more.
          </p>

          {/* Two horizontal CTAs — equal weight, side-by-side desktop / stacked mobile */}
          <div className="animate-hero-ctas flex justify-center gap-4 flex-wrap">
            <Link href="/residential-position-determination" className="btn-primary">
              Residential Position Determination
            </Link>
            <Link href="/strategic-evaluation" className="btn-secondary">
              Strategic Project Evaluation
            </Link>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════ PROBLEM */}
      <section className="py-24 bg-[#f7f8fa] border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="max-w-[800px] mx-auto">
              <div className="w-12 h-[1px] bg-[#4a5568] mb-6" />
              <h2 className="text-[clamp(22px,3.5vw,30px)] font-serif font-normal leading-[1.4] text-[#0f1f38] mb-8">
                Most decisions fail before they start.
              </h2>
              <p className="text-[17px] leading-[1.8] text-[#4a5568] mb-6">
                Early-stage decisions are rarely undermined by execution. They fail
                because the underlying feasibility was never properly assessed, the
                risk was misunderstood, or the end outcome was never defined before
                resources were committed.
              </p>
              <p className="text-[17px] leading-[1.8] text-[#4a5568]">
                DecisionWorks applies a structured evaluation framework to your
                specific situation — residential or strategic — and returns a single,
                clear answer. Not a plan. Not encouragement. A decision.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ════════════════════════════════════ TWO DECISION TRACKS */}
      <section className="py-24 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">

          <RevealWrapper>
            <div className="mb-14 text-center">
              <SectionLabel>Decision Tracks</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38]">
                Two structured pathways. One methodology.
              </h2>
            </div>
          </RevealWrapper>

          {/* Split layout — equal columns, flat cards, light border */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* RPD — slightly more prominent (blue border accent) */}
            <RevealWrapper>
              <div className="h-full flex flex-col p-12 border border-[#2b6cb0] transition-all duration-200">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#2b6cb0] mb-4">
                  Residential · RPD
                </span>
                <h3 className="font-serif text-[22px] font-medium text-[#0f1f38] mb-4 leading-[1.3]">
                  Residential Position<br />Determination
                </h3>
                <p className="text-[14px] leading-[1.8] text-[#4a5568] mb-10 flex-grow">
                  A structured evaluation for residential real estate decisions.
                  Determines whether a specific property or market position is viable
                  given your financial constraints, timeline, and stated criteria.
                  Produces a clear position recommendation.
                </p>
                <Link href="/residential-position-determination" className="btn-primary self-start">
                  Begin RPD Evaluation
                </Link>
              </div>
            </RevealWrapper>

            {/* Strategic */}
            <RevealWrapper delay={1}>
              <div className="h-full flex flex-col p-12 border border-[#e2e8f0] transition-all duration-200 hover:border-[#cbd5e0]">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4a5568] mb-4">
                  Strategic · SPE
                </span>
                <h3 className="font-serif text-[22px] font-medium text-[#0f1f38] mb-4 leading-[1.3]">
                  Strategic Project<br />Evaluation
                </h3>
                <p className="text-[14px] leading-[1.8] text-[#4a5568] mb-10 flex-grow">
                  A structured evaluation for early-stage business, professional, or
                  venture decisions. Assesses feasibility, risk, cost structure, and
                  endgame clarity against explicit criteria. Returns Go, No-Go, or
                  Modify with full scoring breakdown.
                </p>
                <Link href="/strategic-evaluation" className="btn-secondary self-start">
                  Begin Strategic Evaluation
                </Link>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ METHOD — 5-point criteria grid */}
      <section className="py-24 bg-[#f7f8fa] border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">

          <RevealWrapper>
            <div className="mb-14 text-center">
              <SectionLabel>Method</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38] mb-3">
                Five evaluation criteria.
              </h2>
              <p className="text-[16px] text-[#4a5568] max-w-[480px] mx-auto">
                Every evaluation scores the same five dimensions. Explicit thresholds.
                No subjectivity.
              </p>
            </div>
          </RevealWrapper>

          {/* 5-point horizontal grid desktop / stacked mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#e2e8f0]">
            {[
              {
                title: "Economic\nViability",
                desc: "Financial feasibility and return profile relative to stated constraints.",
              },
              {
                title: "Operational\nFeasibility",
                desc: "Capacity to execute given available resources, skills, and timeline.",
              },
              {
                title: "Strategic\nAlignment",
                desc: "Coherence between the decision and stated long-term objectives.",
              },
              {
                title: "Risk\nExposure",
                desc: "Downside risk quantified against acceptable threshold and mitigation capacity.",
              },
              {
                title: "Execution\nCapacity",
                desc: "Ability to follow through based on current capabilities and constraints.",
              },
            ].map((c) => (
              <RevealWrapper key={c.title}>
                <div className="bg-[#f7f8fa] p-8 h-full hover:bg-[#ebf4ff] transition-colors duration-200">
                  <h4 className="font-serif text-[15px] font-medium text-[#0f1f38] mb-3 leading-[1.35] whitespace-pre-line">
                    {c.title}
                  </h4>
                  <p className="text-[12px] leading-[1.7] text-[#4a5568]">{c.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════ ENGAGEMENT PATHWAYS */}
      {/* ════════════════════ ENGAGEMENT PATHWAYS */}
      <section className="py-24 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">

          <RevealWrapper>
            <div className="mb-16 text-center">
              <SectionLabel>Engagement</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38]">
                Structured pathways. No ambiguity.
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#e2e8f0]">

            {/* ── Residential Pathway ── */}
            <RevealWrapper>
              <div className="bg-white p-10 h-full">

                {/* Pathway header */}
                <div className="flex items-center gap-3 mb-10 pb-6 border-b border-[#e2e8f0]">
                  <span
                    className="w-[8px] h-[8px] flex-shrink-0"
                    style={{ background: "#2b6cb0" }}
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#2b6cb0]">
                    Residential Pathway
                  </p>
                </div>

                <div className="flex flex-col gap-0">
                  {[
                    { n: "1", title: "Position Submission", desc: "Submit property details, financial parameters, and decision criteria." },
                    { n: "2", title: "Market Evaluation", desc: "Position assessed against viability criteria and local market context." },
                    { n: "3", title: "Position Outcome", desc: "Receive a structured recommendation with scoring and rationale." },
                    { n: "4", title: "Engagement Closes", desc: "The evaluation concludes. No follow-up. No ongoing relationship." },
                  ].map((step, i) => (
                    <div
                      key={step.n}
                      className="group relative flex gap-5 py-6 border-b border-[#e2e8f0] last:border-0 last:pb-0 first:pt-0 pl-4 transition-all duration-200 hover:pl-6"
                    >
                      {/* Accent bar */}
                      <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-[#2b6cb0] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                      {/* Step number */}
                      <span
                        className="font-serif text-[36px] font-normal leading-none flex-shrink-0 select-none transition-colors duration-300 text-[#e2e8f0] group-hover:text-[#bee3f8]"
                        style={{ minWidth: 32, paddingTop: 2 }}
                      >
                        {step.n}
                      </span>

                      <div>
                        <h4 className="font-serif text-[15px] font-medium text-[#0f1f38] mb-1 leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-[13px] leading-[1.7] text-[#4a5568]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                  <Link
                    href="/residential-position-determination"
                    className="inline-flex items-center gap-2 font-sans text-[12px] font-medium text-[#2b6cb0] tracking-[0.02em] transition-all duration-200 hover:gap-3"
                  >
                    Begin RPD Evaluation <span className="arrow" style={{ background: "#2b6cb0" }} />
                  </Link>
                </div>
              </div>
            </RevealWrapper>

            {/* ── Strategic Pathway ── */}
            <RevealWrapper delay={1}>
              <div className="bg-[#f7f8fa] p-10 h-full">

                {/* Pathway header */}
                <div className="flex items-center gap-3 mb-10 pb-6 border-b border-[#e2e8f0]">
                  <span
                    className="w-[8px] h-[8px] flex-shrink-0"
                    style={{ background: "#0f1f38" }}
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4a5568]">
                    Strategic Pathway
                  </p>
                </div>

                <div className="flex flex-col gap-0">
                  {[
                    { n: "1", title: "Idea Submission", desc: "Submit a structured description: problem, solution, audience, constraints, timeline." },
                    { n: "2", title: "Framework Evaluation", desc: "Scored across five dimensions against explicit, non-negotiable thresholds." },
                    { n: "3", title: "Decision Delivery", desc: "Receive Go, No-Go, or Modify with full scoring breakdown and determining factors." },
                    { n: "4", title: "Engagement Concludes", desc: "The evaluation ends. No follow-up. No implementation support." },
                  ].map((step) => (
                    <div
                      key={step.n}
                      className="group relative flex gap-5 py-6 border-b border-[#e2e8f0] last:border-0 last:pb-0 first:pt-0 pl-4 transition-all duration-200 hover:pl-6"
                    >
                      {/* Accent bar */}
                      <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-[#0f1f38] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                      {/* Step number */}
                      <span
                        className="font-serif text-[36px] font-normal leading-none flex-shrink-0 select-none transition-colors duration-300 text-[#e2e8f0] group-hover:text-[#cbd5e0]"
                        style={{ minWidth: 32, paddingTop: 2 }}
                      >
                        {step.n}
                      </span>

                      <div>
                        <h4 className="font-serif text-[15px] font-medium text-[#0f1f38] mb-1 leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-[13px] leading-[1.7] text-[#4a5568]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                  <Link
                    href="/strategic-evaluation"
                    className="inline-flex items-center gap-2 font-sans text-[12px] font-medium text-[#0f1f38] tracking-[0.02em] transition-all duration-200 hover:gap-3"
                  >
                    Begin Strategic Evaluation <span className="arrow" />
                  </Link>
                </div>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ FINAL CTA BLOCK */}
      <section className="py-32 bg-[#0f1f38]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <RevealWrapper>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-serif font-normal text-white mb-6 leading-[1.2]">
              Decide Deliberately.
            </h2>
            <p className="text-[16px] leading-[1.75] text-[#a0aec0] mb-14 max-w-[440px] mx-auto">
              Select the pathway appropriate to your decision. Both produce the same
              thing: a finite, structured outcome.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/residential-position-determination" className="inline-flex items-center gap-3 px-9 py-[18px] border border-white text-white font-sans text-[13px] font-medium tracking-[0.04em] transition-all duration-200 hover:bg-white hover:text-[#0f1f38]">
                Residential Position Determination
              </Link>
              {/* Outlined variant against dark bg */}
              <Link
                href="/strategic-evaluation"
                className="inline-flex items-center gap-3 px-9 py-[18px] border border-white text-white font-sans text-[13px] font-medium tracking-[0.04em] transition-all duration-200 hover:bg-white hover:text-[#0f1f38]"
              >
                Strategic Project Evaluation
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ════════════════════════════════════ ENGAGE / CONTACT */}
      <section className="py-24 bg-white border-t border-[#e2e8f0]" id="engage">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

            <RevealWrapper>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-[28px] font-serif font-normal mb-6 text-[#0f1f38]">Submit an Inquiry</h2>
              <p className="text-[15px] leading-[1.75] text-[#4a5568] mb-4">
                If you have a decision that requires structured evaluation before
                committing resources, submit your inquiry. You will receive
                confirmation of fit within 48 hours.
              </p>
              <p className="text-[13px] text-[#718096]">
                Inquiries seeking validation, lacking specificity, or indicating
                misalignment with the framework's scope will be declined.
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