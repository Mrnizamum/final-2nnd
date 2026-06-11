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

const principles = [
  ["Close Communication", "Open, proactive dialogue throughout every project."],
  ["Responsive Support", "Fast, dependable project support when it matters most."],
  ["Proactive Problem-Solving", "Anticipating issues before they affect delivery."],
  ["Transparency & Accountability", "Clear reporting at every stage of the work."],
];

function Client() {
  return (
    <PageLayout
      eyebrow="About · Our Commitment"
      title="Client Satisfaction"
      subtitle=""
      nav={<PageNav title="Our Commitment" links={commitmentLinks} currentPath="/about/client" />}
    >
      <div className="lp-prose">
        <p>
          Client Satisfaction Assurance is fundamental at AtS and forms the basis of our long-term
          business relationships. We adopt a client-focused approach through close communication,
          responsive project support and proactive problem-solving.
        </p>
        <p>
          All deliverables are executed in accordance with agreed specifications and industry
          standards, while maintaining transparency and accountability at every stage.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {principles.map(([t, b]) => (
          <div key={t} className="lp-card">
            <h3 className="lp-h text-base">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/65">{b}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
