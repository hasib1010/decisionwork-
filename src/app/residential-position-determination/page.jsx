import Link from "next/link";
import Footer from "@/components/Footer";
import RevealWrapper from "@/components/RevealWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Residential Position Determination — DecisionWorks",
  description: "A structured evaluation for residential real estate decisions. Produces a clear position recommendation: Go, No-Go, or Modify.",
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

export default function RPDPage() {
  return (
    <>

      {/* ════════════════════ HERO — matches homepage: text-center, no border-b */}
      <section className="bg-white pt-[120px] pb-[120px]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <p className="animate-hero-label font-mono text-[11px] uppercase tracking-[0.12em] text-[#2b6cb0] mb-6">
            Residential Track · RPD
          </p>
          <h1 className="animate-hero-title text-[clamp(32px,5vw,56px)] font-serif font-normal leading-[1.25] max-w-[780px] mx-auto mb-6 text-[#0f1f38]">
            Residential Position Determination
          </h1>
          <p className="animate-page-desc text-[17px] leading-[1.75] text-[#4a5568] max-w-[560px] mx-auto mb-12">
            A structured evaluation for residential real estate decisions.
            Not advisory. Not predictive. A finite determination based on your
            stated constraints and the framework's explicit criteria.
          </p>
          <div className="animate-hero-ctas flex justify-center gap-4 flex-wrap">
            <Link href="#engage" className="btn-primary">
              Submit RPD Inquiry <span className="arrow" />
            </Link>
            <Link href="/process" className="btn-secondary">
              View Method <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ 1 · SCOPE — border-t like homepage */}
      <section className="py-24 bg-[#f7f8fa] border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="max-w-[800px] mx-auto">
              <ThinRule />
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38] mb-8">
                What this evaluation assesses.
              </h2>
              <p className="text-[17px] leading-[1.8] text-[#4a5568] mb-6">
                The Residential Position Determination evaluates whether a specific
                property, market position, or purchase decision is viable given your
                financial parameters, timeline, risk tolerance, and stated criteria.
              </p>
              <p className="text-[17px] leading-[1.8] text-[#4a5568]">
                It does not predict market movements. It does not recommend specific
                properties. It evaluates your specific stated decision against a
                structured set of criteria and returns a single position.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ════════════════════ 2 · EVALUATION DIMENSIONS */}
      <section className="py-24 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Evaluation Dimensions</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38]">
                Six criteria. Explicit thresholds. No subjectivity.
              </h2>
            </div>
          </RevealWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#e2e8f0]">
            {[
              { title: "Financial Viability",     desc: "Purchase price, debt service, carrying costs, and liquidity impact assessed against your stated financial parameters." },
              { title: "Market Position Clarity", desc: "Whether the defined position is specific enough to evaluate. Vague criteria produce no useful determination." },
              { title: "Timeline Feasibility",    desc: "Whether your stated decision timeline is realistic given market conditions and process requirements." },
              { title: "Risk Threshold",          desc: "Downside exposure assessed against your stated risk tolerance and mitigation capacity." },
              { title: "Constraint Alignment",    desc: "Whether the stated position is coherent with your non-negotiable constraints, as submitted." },
              { title: "Exit Clarity",            desc: "Whether a clear exit scenario or position endpoint has been defined and is achievable." },
            ].map((d) => (
              <RevealWrapper key={d.title}>
                <div className="bg-[#f7f8fa] p-8 h-full hover:bg-[#ebf4ff] transition-colors duration-200">
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
                ["Property Description",    "Address or market area, property type, asking price, and key characteristics."],
                ["Financial Parameters",    "Available capital, financing capacity, monthly carrying cost tolerance, and liquidity floor."],
                ["Decision Timeline",       "When you must decide. Hard deadlines and soft preferences."],
                ["Non-Negotiable Criteria", "Constraints that cannot be modified. These are evaluated as binary pass/fail."],
                ["Risk Tolerance",          "Your stated acceptable downside. Be specific — ranges are acceptable."],
                ["Exit Definition",         "What does a successful position end look like? Sale, hold period, rental yield, or other defined endpoint."],
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

      {/* ════════════════════ 4 · OUTPUT */}
      <section className="py-24 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Output</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38]">
                What you receive.
              </h2>
              <p className="text-[16px] text-[#4a5568] max-w-[480px] mt-4">
                Each outcome includes the full scoring breakdown and the specific criteria that determined it.
              </p>
            </div>
          </RevealWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#e2e8f0]">
            {[
              { outcome: "go",     desc: "The stated position meets all threshold criteria. Proceed with confidence against your submitted parameters. The document confirms what passed and why." },
              { outcome: "nogo",   desc: "One or more criteria failed threshold with no viable modification path. Do not proceed. The document specifies exactly which criteria failed and why." },
              { outcome: "modify", desc: "The position is viable under modified parameters. Specific modifications required to achieve a Go outcome are identified. You may resubmit after changes." },
            ].map((o) => (
              <RevealWrapper key={o.outcome}>
                <div className="bg-[#f7f8fa] p-10 h-full">
                  <div className="mb-5"><OutcomeBadge outcome={o.outcome} /></div>
                  <p className="text-[14px] leading-[1.75] text-[#4a5568]">{o.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ 5 · WHO THIS IS FOR */}
      <section className="py-24 bg-[#f7f8fa] border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <RevealWrapper>
            <div className="mb-14">
              <SectionLabel>Who This Is For</SectionLabel>
              <h2 className="text-[clamp(22px,3.5vw,32px)] font-serif font-normal leading-[1.4] text-[#0f1f38]">
                This is not general real estate advice.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-16 items-start">
              <p className="text-[16px] leading-[1.8] text-[#4a5568]">
                RPD evaluates a specific, defined position against explicit criteria.
                It is not a market analysis, a property recommendation service,
                or an investment advisory. It produces a single determination
                on a single submission.
              </p>
              <div className="bg-white border border-[#e2e8f0] p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4a5568] mb-6">
                  This Is Not For You If
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "You want general market commentary or investment direction.",
                    "You have not defined a specific position to evaluate.",
                    "You are seeking validation for a decision already made.",
                    "You are not prepared to receive a No-Go determination.",
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
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ════════════════════ FINAL CTA — navy block matching homepage */}
      <section className="py-32 bg-[#0f1f38] border-t border-[#1c2637]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <RevealWrapper>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-serif font-normal text-white mb-6 leading-[1.25]">
              Ready to evaluate your position?
            </h2>
            <p className="text-[16px] leading-[1.75] text-[#a0aec0] mb-12 max-w-[480px] mx-auto">
              Submit your residential decision details. Confirmation of fit within 48 hours.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="#engage" className="btn-primary">
                Submit RPD Inquiry <span className="arrow" />
              </Link>
              <Link
                href="/strategic-evaluation"
                className="inline-flex items-center gap-3 px-9 py-[18px] border-[1.5px] border-white text-white font-sans text-[13px] font-medium tracking-[0.04em] transition-all duration-200 hover:bg-white hover:text-[#0f1f38]"
              >
                Strategic Evaluation <span className="arrow" />
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
              <h2 className="text-[28px] font-serif font-normal text-[#0f1f38]">Submit an RPD Inquiry</h2>
            </div>
          </RevealWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <RevealWrapper>
              <p className="text-[16px] leading-[1.75] text-[#4a5568] mb-4">
                Provide the details of your residential decision. You will receive
                confirmation of fit within 48 hours.
              </p>
              <p className="text-[13px] text-[#718096]">
                Inquiries lacking defined financial parameters, without a specific
                position, or seeking general market advice will be declined.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={1}>
              <ContactForm track="Residential Position Determination" />
            </RevealWrapper>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}