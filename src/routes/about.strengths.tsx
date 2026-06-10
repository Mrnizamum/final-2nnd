import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Users, Truck, Cpu } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/strengths")({
  head: () => ({
    meta: [
      { title: "Operational Strengths — AtS Construction & Engineering" },
      { name: "description", content: "Our capabilities, people, resources and technology — the foundations of reliable project delivery." },
    ],
  }),
  component: Strengths,
});

const cards = [
  {
    icon: Wrench,
    title: "Our Capabilities",
    body: "We specialize in delivering integrated engineering solutions with strong capability in EPC project execution and single-source maintenance services. Our expertise covers a full range of engineering disciplines, enabling us to provide complete project solutions under one roof for oil & gas, petrochemical, refinery and industrial sectors.",
  },
  {
    icon: Users,
    title: "Our People",
    body: "AtS is led by Executive Directors and senior management with more than 20 years of experience in the oil & gas and chemical terminal industries. Our project managers, engineers and technical specialists bring 15+ years of expertise, supported by continuous training and development.",
  },
  {
    icon: Truck,
    title: "Our Resources",
    body: "We are supported by strong operational resources, including a well-maintained and growing fleet of construction equipment. These resources enable us to execute projects efficiently, handle large-scale requirements and respond quickly to emergency shutdowns and maintenance needs.",
  },
  {
    icon: Cpu,
    title: "Our Technology",
    body: "We adopt modern project management practices supported by advanced digital tools. Structured planning platforms and project control systems improve communication, monitor progress and ensure accurate resource allocation across all sites.",
  },
];

function Strengths() {
  return (
    <PageLayout
      eyebrow="About Us · Operational Strengths"
      title="People, resources, technology — the foundations of reliable execution."
      subtitle="The combination of capability, experience, equipment and digital practice that lets us deliver complex industrial projects with confidence."
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/strengths" />}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <article key={c.title} className="lp-card">
            <div className="flex items-center gap-3">
              <div className="lp-icon h-11 w-11">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="lp-h text-base">{c.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-black/65">{c.body}</p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
