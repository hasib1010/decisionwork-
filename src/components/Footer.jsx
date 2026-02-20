import Link from "next/link";
import Image from "next/image";

const NAV_SECTIONS = [
  {
    label: "Tracks",
    links: [
      { href: "/residential-position-determination", label: "Residential Position Determination" },
      { href: "/strategic-evaluation",               label: "Strategic Project Evaluation"       },
    ],
  },
  {
    label: "Site",
    links: [
      { href: "/process", label: "Method"  },
      { href: "/cases",   label: "Cases Studies"   },
      { href: "/#engage", label: "Engage"  },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0]">

      {/* ── Main footer body ── */}
      <div className="max-w-[1100px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-start">

          {/* Left — Logo + tagline + description */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.jpeg"
                width={120}
                height={120}
                alt="DecisionWorks"
                className="block"
              />
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4a5568] mb-3">
              Structural Decision Architecture
            </p>
            <p className="text-[13px] leading-[1.7] text-[#718096] max-w-[280px]">
              A structured framework that evaluates decisions and returns a single,
              clear answer. Go, No-Go, or Modify.
            </p>
          </div>

          {/* Right — Nav columns */}
          <div className="flex gap-16">
            {NAV_SECTIONS.map((section) => (
              <div key={section.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4a5568] mb-5">
                  {section.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {section.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="font-sans text-[13px] text-[#4a5568] hover:text-[#0f1f38] transition-colors duration-200"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-8 py-5 flex justify-between items-center flex-wrap gap-4">
          <p className="font-mono text-[11px] text-[#718096]">
            © DecisionWorks. No newsletter. No content. No community.
          </p>
          <p className="font-mono text-[11px] text-[#a0aec0]">
            Decisions are the deliverable.
          </p>
        </div>
      </div>

    </footer>
  );
}