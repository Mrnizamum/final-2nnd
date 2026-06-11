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

function Quality() {
  return (
    <PageLayout
      eyebrow="About · Our Commitment"
      title="Quality Assurance"
      subtitle=""
      nav={<PageNav title="Our Commitment" links={commitmentLinks} currentPath="/about/quality" />}
    >
      <div className="lp-prose">
        <p>Quality Assurance is a core principle at AtS Construction &amp; Engineering Pte. Ltd. and forms an integral part of our project execution strategy. We are committed to delivering engineering and construction services that consistently meet or exceed client requirements, contractual specifications, and applicable industry standards. AtS implements a structured Quality Management System covering all stages of project delivery, including planning, procurement, construction, inspection, testing, and final handover. Our approach emphasizes strict adherence to approved procedures, competent workmanship, continuous monitoring, and effective quality control measures to ensure defect free and reliable outcomes. We also focus on continuous improvement through regular audits, performance reviews, and lessons learned from ongoing and completed projects. By maintaining high quality standards and aligning with internationally recognized systems such as ISO 9001, AtS ensures that every project is delivered with precision, reliability, and long term performance, strengthening client confidence and project success.</p>
      </div>
    </PageLayout>
  );
}
