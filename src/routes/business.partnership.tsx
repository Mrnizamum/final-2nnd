import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";

export const Route = createFileRoute("/business/partnership")({
  head: () => ({
    meta: [
      { title: "Core Partnership Services — Scaffolding, Machining, Torqueing, NDT" },
      { name: "description", content: "Specialized industrial support services: scaffolding, machining, high torqueing, NDT and equipment rental." },
    ],
  }),
  component: Partnership,
});

const services = [
  { title: "Scaffolding Services", body: "Safe and reliable scaffolding solutions for construction, maintenance and shutdown activities — design support, erection, dismantling, inspection and certification in accordance with WSH requirements." },
  { title: "Machining Services", body: "On-site and workshop machining including precision machining, flange facing, line boring, drilling and component restoration to minimize downtime and restore equipment efficiently." },
  { title: "High Torqueing Services", body: "Controlled bolting and high torqueing for flanged joints, equipment assembly and piping systems using calibrated hydraulic torqueing and tensioning equipment." },
  { title: "Non-Destructive Testing (NDT)", body: "Visual inspection, dye penetrant, magnetic particle and ultrasonic testing to ensure the integrity and safety of materials, welds and structures." },
  { title: "Equipment Rental Support", body: "Lifting tools, small machinery, torqueing equipment and site support tools — a well-maintained equipment fleet to support smooth project execution." },
];

function Partnership() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="Core Partnership Services"
      subtitle=""
      nav={<PageNav title="Our Business" links={businessLinks} currentPath="/business/partnership" />}
    >
      <div className="space-y-4">
        {services.map((s, i) => (
          <article key={s.title} className="lp-card grid gap-4 md:grid-cols-[90px_1fr] md:items-start">
            <div className="lp-num text-4xl md:text-5xl">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h3 className="lp-h text-lg">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-black/65">{s.body}</p>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
