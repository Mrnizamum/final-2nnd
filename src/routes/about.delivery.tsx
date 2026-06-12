import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, commitmentLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/delivery")({
  head: () => ({
    meta: [
      { title: "Timely Delivery Assurance — AtripleS Construction & Engineering" },
      { name: "description", content: "Disciplined project management, detailed planning and continuous progress monitoring to meet agreed milestones." },
    ],
  }),
  component: Delivery,
});

function Delivery() {
  return (
    <PageLayout
      eyebrow="About · Our Commitment"
      title="Timely Delivery Assurance"
      subtitle=""
      nav={<PageNav title="Our Commitment" links={commitmentLinks} currentPath="/about/delivery" />}
    >
      <div className="lp-prose">
        <p>Timely Delivery Assurance is a key commitment at AtripleS Construction &amp; Engineering Pte. Ltd. and a critical measure of our project performance and reliability. We understand the importance of meeting project schedules in the oil &amp; gas, petrochemical, and industrial sectors, where delays can significantly impact operations and costs. AtripleS adopts a disciplined project management approach that emphasizes detailed planning, effective coordination, resource optimization, and continuous progress monitoring at every stage of execution. Our experienced project teams work closely with clients, suppliers, and subcontractors to ensure smooth workflow, proactive issue resolution, and adherence to agreed milestones. Through strong supervision, efficient execution strategies, and effective communication, we consistently strive to deliver projects on time without compromising safety or quality. AtripleS is committed to ensuring reliable and predictable project completion, building long-term trust and confidence with our clients through consistent on-schedule performance.</p>
      </div>
    </PageLayout>
  );
}
