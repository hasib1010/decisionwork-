import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/process", label: "Process" },
    { href: "/cases",   label: "Cases"   },
    { href: "mailto:inquiry@decisionstandards.com", label: "Contact" },
  ];

  return (
    <footer className="py-12 border-t border-[#e8e8e8] bg-[#fafafa]">
      <div className="max-w-[1300px] mx-auto px-8 flex justify-between items-center flex-wrap gap-6">
        <p className="font-mono text-[12px] text-[#5a5a5a]">
          © DecisionWorks. No newsletter. No content. No community.
        </p>
        <div className="flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}