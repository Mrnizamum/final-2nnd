import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, assuranceLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/delivery")({
  head: () => ({
    meta: [
      { title: "Timely Delivery Assurance — AtS Construction & Engineering" },
      { name: "description", content: "Disciplined project management, detailed planning and continuous progress monitoring to meet agreed milestones." },
    ],
  }),
  component: Delivery,
});

const approach = [
  ["Detailed Planning", "Clear scheduling and sequencing of every project phase."],
  ["Coordination", "Close alignment with clients, suppliers and subcontractors."],
  ["Resource Optimization", "The right manpower and equipment, deployed efficiently."],
  ["Progress Monitoring", "Continuous tracking against agreed milestones."],
];

function Delivery() {
  return (
    <PageLayout
      eyebrow="About · Our Assurance"
      title="Timely Delivery Assurance"
      subtitle="Meeting project schedules where delays significantly impact operations and costs."
      nav={<PageNav title="Our Assurance" links={assuranceLinks} currentPath="/about/delivery" />}
    >
      <div className="lp-prose">
        <p>
          We understand the importance of meeting project schedules in the oil &amp; gas,
          petrochemical and industrial sectors, where delays significantly impact operations and
          costs. AtS adopts a disciplined project management approach emphasizing detailed planning,
          coordination, resource optimization and continuous progress monitoring.
        </p>
        <p>
          Our teams work closely with clients, suppliers and subcontractors to ensure smooth
          workflow and adherence to agreed milestones.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {approach.map(([t, b]) => (
          <div key={t} className="lp-card">
            <h3 className="lp-h text-base">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/65">{b}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
