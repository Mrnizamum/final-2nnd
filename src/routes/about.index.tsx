import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Award } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";
import certIso9001 from "@/assets/cert-iso9001.jpg.asset.json";
import certIso45001 from "@/assets/cert-iso45001.jpg.asset.json";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About AtripleS Construction & Engineering — Corporate Profile" },
      { name: "description", content: "Singapore-based engineering and construction company serving oil & gas, petrochemical, refinery, energy and industrial sectors." },
    ],
  }),
  component: About,
});

function About() {
  const certificates = [
    { title: "ISO 9001:2015", subtitle: "Quality Management System", img: certIso9001.url, available: true },
    { title: "ISO 45001:2018", subtitle: "Occupational Health & Safety", img: certIso45001.url, available: true },
    { title: "ISO 14001:2015", subtitle: "Environmental Management", img: null, available: false },
  ];
  const [active, setActive] = useState<number | null>(null);

  return (
    <PageLayout
      eyebrow="ABOUT US ·"
      title="Corporate Profile"
      subtitle=""
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about" />}
    >
      <div className="lp-prose max-w-none">
        <p>
          Established in 2025, {"\n"} is a {"\n"} based
          engineering and construction company serving the oil &amp; gas, petrochemical, refinery,
          energy, and industrial sectors. Although newly founded, our company is built upon decades
          of combined industry experience, technical expertise, and leadership gained through
          delivering complex projects across various industrial environments.
        </p>
        <p>
          AtripleS specializes in Engineering, Procurement and Construction (EPC), piping and mechanical
          works, scaffolding services, industrial construction, maintenance support and skilled
          manpower solutions. Our experienced team is committed to providing safe, reliable and
          cost-effective services tailored to meet the unique requirements of each client.
        </p>
        <p>
          We take pride in our commitment to quality workmanship, operational excellence and strict
          adherence to safety standards. By combining strong engineering judgment with practical
          field experience, we strive to deliver projects efficiently, on schedule and to the
          highest industry standards.
        </p>
        <p>
          At AtripleS, we believe that long term success is built on trust, integrity and performance. We
          work closely with our clients to understand their goals and deliver solutions that create
          lasting value. As we continue to grow, our vision is to become a trusted engineering
          partner and preferred service provider for industrial projects across Singapore and the
          region.
        </p>
        <p>
          Driven by experience, guided by safety, and committed to excellence, {"\n"} is ready to support the evolving needs of today&apos;s
          industrial landscape.
        </p>
      </div>

      <section className="mt-12">
        <div className="lp-kicker">Certifications</div>
        <h2 className="mt-2 lp-h text-xl">Accredited & Audited</h2>
        <p className="mt-2 max-w-2xl text-sm text-black/65">
          Independently certified to international standards for quality, safety and environmental management.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <li key={c.title}>
              <button
                type="button"
                disabled={!c.available}
                onClick={() => c.available && setActive(i)}
                className={`group relative flex h-full w-full flex-col overflow-hidden rounded-md border border-black/14 bg-white text-left transition ${
                  c.available
                    ? "hover:-translate-y-1 hover:border-[#1e40af] hover:shadow-lg cursor-pointer"
                    : "opacity-75 cursor-not-allowed"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f3f4f6]">
                  {c.img ? (
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-black/40">
                      <Award className="h-10 w-10" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Available Soon</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#ef6c1a]">
                    {c.available ? "Certified" : "Coming soon"}
                  </div>
                  <div className="mt-1 font-display text-base font-bold text-[#111]">{c.title}</div>
                  <div className="mt-1 text-xs text-black/60">{c.subtitle}</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {active !== null && certificates[active].img && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#111] shadow-lg transition hover:bg-[#ef6c1a] hover:text-white"
          >
            <X className="h-4 w-4" /> Exit
          </button>
          <img
            src={certificates[active].img!}
            alt={certificates[active].title}
            className="max-h-[90vh] max-w-full rounded-md object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </PageLayout>
  );
}
