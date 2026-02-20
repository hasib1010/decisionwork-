import Footer from "@/components/Footer";
import CasesClient from "@/components/CasesClient";

export const metadata = {
  title: "Cases — DecisionWorks",
  description: "Documented decision outcomes. Go, No-Go, and Modify results from past evaluations.",
};

export default function CasesPage() {
  return (
    <>
      {/* ════════════════════ HERO */}
      <section className="pt-[120px] pb-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8">
          <p className="animate-hero-label font-mono text-[11px] uppercase tracking-[0.12em] text-[#4a5568] mb-5">
            Case Record
          </p>
          <h1 className="animate-page-title text-[clamp(28px,5vw,48px)] font-serif font-normal leading-tight mb-6 text-[#0f1f38]">
            Cases
          </h1>
          <p className="animate-page-desc text-[18px] leading-relaxed max-w-[560px] text-[#4a5568]">
            Documented decision outcomes. These are not testimonials or success stories.
            They are factual records of evaluations and their results.
          </p>
        </div>
      </section>

      <CasesClient />

      <Footer />
    </>
  );
}