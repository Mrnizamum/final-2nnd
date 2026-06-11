import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";
import indConstruction from "@/assets/ind-construction.jpg";

export const Route = createFileRoute("/business/construction")({
  head: () => ({
    meta: [
      { title: "General Construction Works — AtS Construction & Engineering" },
      { name: "description", content: "Civil works, structural steel, concrete, foundations and supporting infrastructure for industrial facilities." },
      { property: "og:image", content: "/assets/ind-construction.jpg" },
    ],
  }),
  component: Construction,
});

function Construction() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="General Construction Works"
      subtitle=""
      nav={<PageNav title="Our Business" links={businessLinks} currentPath="/business/construction" />}
    >
      <img src={indConstruction} alt="Construction site with cranes" loading="lazy" className="lp-image mb-8" />
      <div className="lp-prose">
        <p>
          We provide comprehensive general construction services supported by strong technical
          capability and experienced project execution teams. Our scope covers industrial,
          commercial and infrastructure development projects — delivered with a focus on safety,
          quality and timely completion.
        </p>
        <p>
          We undertake a wide range of construction activities including civil works, structural
          steel works, concrete works, earthworks, foundations, building construction and site
          development. We also provide full <strong>supporting infrastructure works</strong> such as
          roads and accessways, drainage systems, underground utilities, pipe racks, equipment
          foundations, concrete platforms and associated facility works required for industrial
          operations.
        </p>
        <p>
          Our approach emphasizes proper planning, efficient coordination and strict adherence to
          engineering standards and client specifications. With a skilled workforce, strong project
          management capability and commitment to excellence, AtS delivers solutions that support
          the long-term performance of industrial facilities across Singapore and the region.
        </p>
      </div>
    </PageLayout>
  );
}
