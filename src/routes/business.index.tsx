import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";
import bizProject from "@/assets/biz-project.jpg";
import bizMaintenance from "@/assets/biz-maintenance.jpg";
import bizScaffold from "@/assets/biz-scaffold.jpg";
import indConstruction from "@/assets/ind-construction.jpg";

export const Route = createFileRoute("/business/")({
  head: () => ({
    meta: [
      { title: "Our Services  — Services Overview | AtS Construction & Engineering" },
      { name: "description", content: "EPC mechanical, general construction, plant maintenance and core partnership services for industrial facilities." },
    ],
  }),
  component: Business,
});

const services = [
  { to: "/business/construction", title: "General Construction Works", img: indConstruction, body: "Civil, structural steel, concrete, earthworks, foundations and supporting infrastructure for industrial facilities." },
  { to: "/business/project-works", title: "Project Works (EPC Mechanical)", img: bizProject, body: "Engineering, procurement, fabrication, installation, testing and commissioning of mechanical systems." },
  { to: "/business/maintenance", title: "Plant Maintenance Works", img: bizMaintenance, body: "Mechanical maintenance, piping repairs, structural maintenance, turnaround and shutdown support." },
  { to: "/business/partnership", title: "Core Partnership Services", img: bizScaffold, body: "Scaffolding, machining, high torqueing, NDT and equipment rental support — specialized site services." },
];

function Business() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES "
      title="Overview"
      subtitle=""
      nav={<PageNav title="Our Services " links={businessLinks} currentPath="/business" />}
    >
      <div className="lp-prose">
        <p>
          At AtS Construction &amp; Engineering Pte. Ltd., we provide EPC mechanical project works
          including piping, structural steel and equipment installation, along with plant
          maintenance services for refineries and process facilities. We also undertake general
          construction works such as LTA-related repairs, roadworks, building works and external
          maintenance. In addition, we provide specialized support services including scaffolding,
          precision machining and high-torque bolting works.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <Link key={s.to} to={s.to} className="group block overflow-hidden rounded-sm border border-black/14 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" className="lp-image h-full transition duration-500 group-hover:scale-105" />
            </div>
            <div className="border-t-2 border-[#1a1a1a] p-5">
              <h3 className="lp-h text-base">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/65">{s.body}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#1a1a1a]">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
