import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, commitmentLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/quality")({
  head: () => ({
    meta: [
      { title: "Quality Assurance — AtS Construction & Engineering" },
      { name: "description", content: "A structured Quality Management System spanning planning, procurement, construction, inspection, testing and handover." },
    ],
  }),
  component: Quality,
});

const stages = [
  "Planning",
  "Procurement",
  "Construction",
  "Inspection",
  "Testing",
  "Final Handover",
];

function Quality() {
  return (
    <PageLayout
      eyebrow="About · Our Commitment"
      title="Quality Assurance"
      subtitle="A core principle at AtS and an integral part of our project execution strategy."
      nav={<PageNav title="Our Commitment" links={commitmentLinks} currentPath="/about/quality" />}
    >
      <div className="lp-prose">
        <p>
          Quality Assurance is a core principle at AtS and an integral part of our project execution
          strategy. Our structured <strong>Quality Management System</strong> covers planning,
          procurement, construction, inspection, testing and final handover.
        </p>
        <p>
          We emphasize strict adherence to approved procedures, competent workmanship, continuous
          monitoring and effective quality control. Continuous improvement is driven through audits,
          performance reviews and lessons learned, aligned with <strong>ISO 9001</strong>.
        </p>
      </div>

      <div className="mt-8">
        <div className="lp-kicker">Quality lifecycle</div>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {stages.map((s, i) => (
            <li key={s} className="lp-list-item flex items-center gap-3">
              <span className="lp-num text-xl">{String(i + 1).padStart(2, "0")}</span>
              {s}
            </li>
          ))}
        </ol>
      </div>
    </PageLayout>
  );
}
