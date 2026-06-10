import { createFileRoute } from "@tanstack/react-router";
import { Cog, Layers, Boxes } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";
import bizProject from "@/assets/biz-project.jpg";

export const Route = createFileRoute("/business/project-works")({
  head: () => ({
    meta: [
      { title: "Project Works (EPC Mechanical) — AtS Construction & Engineering" },
      { name: "description", content: "EPC mechanical project works including piping, structural steel and equipment installation." },
      { property: "og:image", content: "/assets/biz-project.jpg" },
    ],
  }),
  component: ProjectWorks,
});

const scopes = [
  { icon: Cog, title: "Piping Works", body: "Fabrication, installation, modification, hydro-testing and commissioning of process and utility piping systems." },
  { icon: Layers, title: "Structural Steel Works", body: "Fabrication and erection of steel structures, platforms, pipe racks and supporting frameworks." },
  { icon: Boxes, title: "Equipment Installation", body: "Static and rotating equipment — vessels, heat exchangers, pumps, compressors — installed to spec." },
];

function ProjectWorks() {
  return (
    <PageLayout
      eyebrow="Our Business · Project Works"
      title="EPC mechanical project works for industrial facilities."
      subtitle="Complete engineering, procurement, fabrication, installation, testing and commissioning of mechanical systems."
      nav={<PageNav title="Our Business" links={businessLinks} currentPath="/business/project-works" />}
    >
      <img src={bizProject} alt="Petrochemical refinery" loading="lazy" className="lp-image mb-8" />
      <div className="lp-prose">
        <p>
          At AtS Construction &amp; Engineering Pte. Ltd., we specialize in delivering <strong>EPC
          mechanical project works</strong> for the oil &amp; gas, petrochemical, refinery and
          industrial sectors. Our scope includes complete engineering, procurement, fabrication
          support, installation, testing and commissioning of mechanical systems, ensuring safe,
          efficient and reliable project execution.
        </p>
        <p>
          With a strong focus on safety, quality and schedule adherence, our experienced project
          teams ensure smooth coordination across all disciplines and seamless integration of
          mechanical systems. Through disciplined execution, skilled manpower and proven site
          experience, AtS delivers reliable EPC mechanical solutions that meet client expectations
          and industry standards.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {scopes.map((s) => (
          <div key={s.title} className="lp-card">
            <div className="lp-icon h-10 w-10">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="lp-h mt-3 text-base">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/65">{s.body}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
