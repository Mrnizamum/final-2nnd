import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import hero from "@/assets/hero-tanks.jpg";

export const Route = createFileRoute("/network/oil-gas")({
  head: () => ({
    meta: [
      { title: "Oil & Gas — Industries We Serve | AtS" },
      { name: "description", content: "EPC, construction, piping, mechanical and maintenance services for oil & gas facilities, refineries, terminals and process plants." },
    ],
  }),
  component: Page,
});

const capabilities = [
  ["EPC & Project Works", "Engineering, procurement and construction for process and utility packages."],
  ["Piping & Mechanical", "Prefabrication, erection, alignment and testing of piping and mechanical systems."],
  ["Plant Maintenance", "Routine, shutdown and turnaround maintenance for refineries, terminals and plants."],
  ["Tank & Vessel Works", "Fabrication, repair and inspection of storage tanks, vessels and pressure equipment."],
];

function Page() {
  return (
    <PageLayout
      eyebrow="Field of Business · Sector"
      title="Oil & Gas"
      subtitle="Integrated EPC, construction, piping, mechanical and maintenance services for oil & gas facilities, refineries, terminals and process plants."
      nav={<PageNav title="Field of Business" links={networkLinks} currentPath="/network/oil-gas" />}
    >
      <div className="overflow-hidden rounded-sm border border-black/14">
        <img src={hero} alt="Oil & gas storage tanks" className="h-64 w-full object-cover grayscale" />
      </div>
      <div className="lp-prose mt-6">
        <p>
          AtS supports hydrocarbon and petrochemical operators with disciplined project delivery
          and safe maintenance execution — from process piping to full turnaround programmes.
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {capabilities.map(([t, b]) => (
          <div key={t} className="lp-card">
            <h3 className="lp-h text-base">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/65">{b}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
