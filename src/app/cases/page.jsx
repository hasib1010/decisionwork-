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
      <section className="pt-40 pb-20 border-b border-[#e8e8e8]">
        <div className="max-w-[1300px] mx-auto px-8">
          <h1 className="animate-page-title text-[clamp(32px,5vw,48px)] font-normal leading-tight mb-6">
            Cases
          </h1>
          <p className="animate-page-desc text-[18px] leading-relaxed max-w-[560px] text-[#5a5a5a]">
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