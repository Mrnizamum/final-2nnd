import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import indConstruction from "@/assets/ind-construction.jpg";
import indGreen from "@/assets/ind-green.jpg";
import indPower from "@/assets/ind-power.jpg";
import indLta from "@/assets/ind-lta.jpg";
import bizMaintenance from "@/assets/biz-maintenance.jpg";
import heroTanks from "@/assets/hero-tanks.jpg";

export const Route = createFileRoute("/network/")({
  head: () => ({
    meta: [
      { title: "Field of Business — Industries We Serve | AtS" },
      { name: "description", content: "Industries served by AtS: infrastructure, oil & gas, green energy, power generation, construction and Land Transport Authority works." },
    ],
  }),
  component: Network,
});

const fields = [
  { to: "/network/infrastructure", title: "Infrastructure", img: indConstruction, body: "Comprehensive infrastructure solutions, including road works, civil construction, repair, maintenance, and public facility upgrading projects." },
  { to: "/network/oil-gas", title: "Oil & Gas", img: heroTanks, body: "Integrated EPC, construction, piping, mechanical and maintenance services for oil & gas facilities, refineries, terminals and process plants." },
  { to: "/network/green-energy", title: "Green Energy", img: indGreen, body: "Supporting renewable and sustainable energy projects through reliable engineering, construction, maintenance and infrastructure solutions." },
  { to: "/network/power-generation", title: "Power Generation", img: indPower, body: "Supporting uninterrupted power production through dependable plant maintenance and turnaround services." },
  { to: "/network/construction", title: "Construction", img: bizMaintenance, body: "Supporting sustainable development through reliable and efficient construction services." },
  { to: "/network/land-transport", title: "Land Transport Authority", img: indLta, body: "Supporting transport infrastructure development through civil works, road maintenance and repair services." },
] as const;

function Network() {
  return (
    <PageLayout
      eyebrow="Field of Business"
      title="Industries we serve"
      subtitle="Specialised engineering and construction support across Singapore's most demanding industrial sectors."
      nav={<PageNav title="Field of Business" links={networkLinks} currentPath="/network" />}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map((f, i) => (
          <Link
            key={f.title}
            to={f.to}
            className="group relative flex flex-col overflow-hidden rounded-md border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#1e40af]/40 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-3 top-3 rounded-sm bg-[#ef6c1a] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="flex flex-1 flex-col border-t-2 border-[#1e40af] p-5">
              <h3 className="font-display text-lg font-bold text-[#1e40af]">{f.title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-black/65">{f.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#ef6c1a] transition group-hover:gap-2">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
