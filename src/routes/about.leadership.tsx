import { createFileRoute } from "@tanstack/react-router";
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

const principles: Array<[string, string]> = [
  ["Safety First Culture", "Safety is embedded in every activity, decision, and stage of execution"],
  ["Leadership with Integrity", "Transparent, responsible, and ethical leadership at all levels"],
  ["Structured Execution", "Clear planning, coordination, and controlled project delivery"],
  ["Quality Commitment", "Ensuring compliance with industry standards and client requirements"],
  ["Continuous Improvement", "Enhancing skills, systems, and performance through learning"],
  ["People & Performance Focus", "Developing a competent and safety conscious workforce"],
  ["Client Satisfaction", "Delivering reliable, timely, and cost effective solutions"],
];

function Leadership() {
  return (
    <PageLayout
      eyebrow="ABOUT US"
      title="Leadership & Management Approach"
      subtitle=""
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/leadership" />}
    >
      <div className="lp-prose space-y-5">
        <p>At AtS Construction &amp; Engineering Pte. Ltd., our leadership and Management approach is built on disciplined execution, strong leadership, and full accountability. We are committed to delivering safe, efficient, and high quality engineering solutions that consistently meet client expectations.</p>

        <h2 className="lp-h text-lg">Core Principles</h2>
        <p>Our operations are guided by the following principles:</p>

        {principles.map(([t, b]) => (
          <div key={t}>
            <p className="font-bold text-[#1a1a1a]">{t}</p>
            <p>{b}</p>
          </div>
        ))}

        <p className="font-bold text-[#1a1a1a]">Our Commitment</p>
        <p>AtS is committed to maintaining a strong safety driven management approach, ensuring operational excellence, risk control, and long-term trust with our clients and partners in every project we undertake.</p>
      </div>
    </PageLayout>
  );
}
