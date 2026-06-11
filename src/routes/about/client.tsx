import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, commitmentLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/client")({
  head: () => ({
    meta: [
      { title: "Client Satisfaction — AtS Construction & Engineering" },
      { name: "description", content: "A client-focused approach built on close communication, responsive support and proactive problem-solving." },
    ],
  }),
  component: Client,
});

function Client() {
  return (
    <PageLayout
      eyebrow="About · Our Commitment"
      title="Client Satisfaction"
      subtitle=""
      nav={<PageNav title="Our Commitment" links={commitmentLinks} currentPath="/about/client" />}
    >
      <div className="lp-prose">
        <p>Client Satisfaction Assurance is a fundamental commitment at AtS Construction &amp; Engineering Pte. Ltd. and forms the basis of our long term business relationships. We are dedicated to understanding our clients&rsquo; requirements in detail and delivering engineering and construction solutions that meet or exceed their expectations in terms of safety, quality, cost, and schedule. AtS adopts a clientfocused approach through close communication, responsive project support, and proactive problem-solving throughout the project life cycle. Our experienced team ensures that all deliverables are executed in accordance with agreed specifications and industry standards, while maintaining transparency and accountability at every stage. We continuously seek feedback from clients to improve our performance and strengthen service delivery. AtS believes that client satisfaction is achieved through trust, consistency, and reliable execution, and we are committed to building long term partnerships based on performance, integrity, and mutual success.</p>
      </div>
    </PageLayout>
  );
}
