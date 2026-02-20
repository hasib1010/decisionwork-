import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/residential-position-determination", label: "Residential" },
    { href: "/strategic-evaluation",               label: "Strategic"   },
    { href: "/process",                            label: "Method"      },
    { href: "/#engage",                            label: "Engage"      },
  ];

  return (
    <footer className="py-12 border-t border-[#e2e8f0] bg-white">
      <div className="max-w-[1100px] mx-auto px-8 flex justify-between items-start flex-wrap gap-8">
        <div>
          <p
            className="text-[16px] font-semibold text-[#0f1f38] mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            DecisionWorks
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#4a5568] mb-4">
            Structural Decision Architecture
          </p>
          <p className="font-mono text-[11px] text-[#718096]">
            © DecisionWorks. No newsletter. No content. No community.
          </p>
        </div>
        <div className="flex gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-[12px] text-[#4a5568] hover:text-[#0f1f38] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}