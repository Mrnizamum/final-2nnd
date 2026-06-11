import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, commitmentLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/hsse")({
  head: () => ({
    meta: [
      { title: "HSSE Philosophy — AtS Construction & Engineering" },
      { name: "description", content: "Health, Safety, Security & Environment management system, ISO alignment and BizSAFE Star ambition at AtS." },
    ],
  }),
  component: Hsse,
});

const pillars = [
  ["Policies & Procedures", "A structured HSSE Management System governing every site activity."],
  ["Training & Toolbox Meetings", "Safety training and daily toolbox briefings for all personnel."],
  ["Risk Assessment", "Hazard identification and risk assessment before work begins."],
  ["Incident Reporting", "Reporting and investigation to drive continuous improvement."],
  ["Subcontractor Control", "Site inspections and oversight of all subcontractors."],
  ["Emergency Preparedness", "Occupational health and environmental programs on every site."],
];

function Hsse() {
  return (
    <PageLayout
      eyebrow="About · Our Commitment"
      title="HSSE Philosophy"
      subtitle="Health, Safety, Security & Environment performance is a fundamental priority and a critical factor in the successful delivery of every project."
      nav={<PageNav title="Our Commitment" links={commitmentLinks} currentPath="/about/hsse" />}
    >
      <div className="lp-prose">
        <p>
          HSSE performance is a fundamental priority at AtS and a critical factor in the successful
          delivery of every project. AtS adopts a structured HSSE Management System covering
          policies, safety training, toolbox meetings, incident reporting and investigation, hazard
          identification and risk assessment, subcontractor control, site inspections, maintenance
          practices, emergency preparedness and occupational health and environmental programs.
        </p>
        <p>
          We align with <strong>ISO 9001</strong> and <strong>ISO 14001</strong> and target{" "}
          <strong>BizSAFE Star certification</strong> — the highest level of Singapore&apos;s WSH
          framework.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {pillars.map(([t, b]) => (
          <div key={t} className="lp-card">
            <h3 className="lp-h text-base">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/65">{b}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
