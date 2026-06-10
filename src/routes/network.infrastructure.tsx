import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import hero from "@/assets/ind-construction.jpg";

export const Route = createFileRoute("/network/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure — Industries We Serve | AtS" },
      { name: "description", content: "Road works, civil construction, repair, maintenance and public facility upgrading projects across Singapore." },
    ],
  }),
  component: Page,
});

const capabilities = [
  ["Civil & Road Works", "Road construction, resurfacing, drainage and ancillary civil works."],
  ["Public Facility Upgrading", "Renovation and upgrading of public facilities, amenities and shared infrastructure."],
  ["Repair & Maintenance", "Scheduled and reactive repair programmes that extend asset life."],
  ["Site Preparation", "Earthworks, grading and enabling works for downstream construction."],
];

function Page() {
  return (
    <PageLayout
      eyebrow="Global Network · Sector"
      title="Infrastructure"
      subtitle="Comprehensive infrastructure solutions — road works, civil construction, repair, maintenance and public facility upgrading projects."
      nav={<PageNav title="Global Network" links={networkLinks} currentPath="/network/infrastructure" />}
    >
      <div className="overflow-hidden rounded-sm border border-black/14">
        <img src={hero} alt="Infrastructure works" className="h-64 w-full object-cover grayscale" />
      </div>
      <div className="lp-prose mt-6">
        <p>
          AtS delivers infrastructure projects that support communities, mobility and public
          services. Our teams combine disciplined planning with safe site execution to keep
          critical works on schedule.
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
