import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import hero from "@/assets/ind-green.jpg";

export const Route = createFileRoute("/network/green-energy")({
  head: () => ({
    meta: [
      { title: "Green Energy — Industries We Serve | AtS" },
      { name: "description", content: "Engineering, construction, maintenance and infrastructure support for renewable and sustainable energy projects." },
    ],
  }),
  component: Page,
});

const capabilities = [
  ["Renewable Infrastructure", "Civil and mechanical works supporting solar, wind and clean energy facilities."],
  ["Sustainable Construction", "Construction practices that reduce environmental impact across the project lifecycle."],
  ["Plant Maintenance", "Maintenance services that keep renewable assets producing reliably."],
  ["Engineering Support", "Engineering and integration support for sustainable energy programmes."],
];

function Page() {
  return (
    <PageLayout
      eyebrow="Global Network · Sector"
      title="Green Energy"
      subtitle="Supporting renewable and sustainable energy projects through reliable engineering, construction, maintenance and infrastructure solutions."
      nav={<PageNav title="Global Network" links={networkLinks} currentPath="/network/green-energy" />}
    >
      <div className="overflow-hidden rounded-sm border border-black/14">
        <img src={hero} alt="Green energy facility" className="h-64 w-full object-cover grayscale" />
      </div>
      <div className="lp-prose mt-6">
        <p>
          AtS contributes to the energy transition by delivering the civil, mechanical and
          maintenance backbone that renewable and sustainable energy projects rely on.
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
