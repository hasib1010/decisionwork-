import Link from "next/link";
import Footer from "@/components/Footer";
import CasesClient from "@/components/CasesClient";

export const metadata = {
  title: "Cases — DecisionWorks",
  description: "Documented decision outcomes. Go, No-Go, and Modify results from past evaluations.",
};

export default function CasesPage() {
  return (
    <>

      {/* ════════════════════ HERO — centered, matches homepage exactly */}
      <section className="bg-white pt-[120px] pb-[120px]">
        <div className="max-w-[1100px] mx-auto px-8 text-center">
          <p className="animate-hero-label font-mono text-[11px] uppercase tracking-[0.12em] text-[#4a5568] mb-6">
            Case Record
          </p>
          <h1 className="animate-hero-title text-[clamp(32px,5vw,56px)] font-serif font-normal leading-[1.25] max-w-[780px] mx-auto mb-6 text-[#0f1f38]">
            Cases
          </h1>
          <p className="animate-page-desc text-[17px] leading-[1.75] text-[#4a5568] max-w-[560px] mx-auto mb-12">
            Documented decision outcomes. These are not testimonials or success stories.
            They are factual records of evaluations and their results.
          </p>
          <div className="animate-hero-ctas flex justify-center gap-4 flex-wrap">
            <Link href="/residential-position-determination#engage" className="btn-primary">
              Submit RPD Inquiry <span className="arrow" />
            </Link>
            <Link href="/strategic-evaluation#engage" className="btn-secondary">
              Submit Strategic Inquiry <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <CasesClient />

      <Footer />
    </>
  );
}