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

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Global Network — Industries We Serve | AtS" },
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
      eyebrow="Global Network · Industries"
      title="Industries we serve across the region."
      subtitle="From oil & gas and infrastructure to green energy, power generation and transport — AtS supports the industries that keep Singapore and the region moving."
      nav={<PageNav title="Global Network" links={networkLinks} currentPath="/network" />}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <Link
            key={f.title}
            to={f.to}
            className="group relative block h-64 overflow-hidden rounded-sm border border-black/14"
          >
            <img src={f.img} alt={f.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/95 via-[#1a1a1a]/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Sector</div>
              <h3 className="mt-1 font-display text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-2 max-h-0 overflow-hidden text-[13px] leading-relaxed text-white/90 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                {f.body}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-white opacity-0 transition group-hover:opacity-100">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
