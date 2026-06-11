import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";
import bizMaintenance from "@/assets/biz-maintenance.jpg";

export const Route = createFileRoute("/business/maintenance")({
  head: () => ({
    meta: [
      { title: "Plant Maintenance Works — AtS Construction & Engineering" },
      { name: "description", content: "Mechanical maintenance, piping repairs, structural maintenance, turnaround and shutdown support for process plants." },
      { property: "og:image", content: "/assets/biz-maintenance.jpg" },
    ],
  }),
  component: Maintenance,
});

const scope = [
  "Mechanical maintenance",
  "Piping repairs & replacement",
  "Structural maintenance",
  "Equipment servicing",
  "Plant modification works",
  "Turnaround & shutdown support",
  "Preventive & corrective maintenance",
  "Skilled manpower & supervision",
];

function Maintenance() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="Plant Maintenance Works"
      subtitle="Asset integrity, minimum downtime and improved operational efficiency through structured maintenance services."
      nav={<PageNav title="Our Business" links={businessLinks} currentPath="/business/maintenance" />}
    >
      <img src={bizMaintenance} alt="Maintenance workers in PPE" loading="lazy" className="lp-image mb-8" />
      <div className="lp-prose">
        <p>
          We provide comprehensive <strong>maintenance services for refineries and process plant
          facilities</strong>, ensuring safe, reliable and continuous plant operations. Our
          solutions support oil &amp; gas, petrochemical and industrial clients in maintaining asset
          integrity, minimizing downtime and improving operational efficiency.
        </p>
        <p>
          We also support turnaround and shutdown activities, providing manpower, supervision and
          execution resources for time-critical maintenance works. Preventive and corrective
          maintenance is undertaken to ensure long-term reliability of plant systems and equipment.
        </p>
        <p>
          With experienced supervisors, skilled technicians and strong site execution capability,
          AtS ensures all maintenance works comply with safety standards, client procedures and
          regulatory requirements — with minimal disruption to plant operations.
        </p>
      </div>

      <div className="mt-8">
        <div className="lp-kicker">Scope of Work</div>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {scope.map((s) => (
            <li key={s} className="lp-list-item">{s}</li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
