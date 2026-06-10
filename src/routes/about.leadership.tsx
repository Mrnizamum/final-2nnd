import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Management Approach — AtS Construction & Engineering" },
      { name: "description", content: "Disciplined execution, strong leadership and full accountability across AtS operations." },
    ],
  }),
  component: Leadership,
});

const principles = [
  ["Safety First Culture", "Safety is embedded in every activity, decision and stage of execution."],
  ["Leadership with Integrity", "Transparent, responsible and ethical leadership at all levels."],
  ["Structured Execution", "Clear planning, coordination and controlled project delivery."],
  ["Quality Commitment", "Compliance with industry standards and client requirements."],
  ["Continuous Improvement", "Enhancing skills, systems and performance through learning."],
  ["People & Performance Focus", "Developing a competent and safety-conscious workforce."],
  ["Client Satisfaction", "Delivering reliable, timely and cost-effective solutions."],
];

function Leadership() {
  return (
    <PageLayout
      eyebrow="About Us · Leadership"
      title="Leadership & Management Approach"
      subtitle="Built on disciplined execution, strong leadership and full accountability — committed to delivering safe, efficient, high-quality engineering solutions."
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/leadership" />}
    >
      <div className="lp-kicker">Seven core principles</div>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {principles.map(([title, body]) => (
          <li key={title} className="lp-card flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1a1a1a]" />
            <div>
              <h3 className="lp-h text-base">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-black/65">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
