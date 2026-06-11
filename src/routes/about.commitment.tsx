import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Gauge, Clock, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, commitmentLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/commitment")({
  head: () => ({
    meta: [
      { title: "Our Commitment — HSSE, Quality, Delivery & Client Satisfaction" },
      { name: "description", content: "Our HSSE philosophy, quality assurance, timely delivery and client satisfaction commitments." },
    ],
  }),
  component: Commitment,
});

const items = [
  { icon: ShieldCheck, title: "HSSE Philosophy", to: "/about/hsse", body: "A structured HSSE Management System aligned with ISO 9001 and ISO 14001, targeting BizSAFE Star certification." },
  { icon: Gauge, title: "Quality Assurance", to: "/about/quality", body: "A Quality Management System covering planning, procurement, construction, inspection, testing and handover." },
  { icon: Clock, title: "Timely Delivery Assurance", to: "/about/delivery", body: "Disciplined project management, detailed planning and continuous progress monitoring against milestones." },
  { icon: HeartHandshake, title: "Client Satisfaction", to: "/about/client", body: "A client-focused approach built on close communication, responsive support and proactive problem-solving." },
];

function Commitment() {
  return (
    <PageLayout
      eyebrow="ABOUT US"
      title="Our Commitment"
      subtitle=""
      nav={<PageNav title="Our Commitment" links={commitmentLinks} currentPath="/about/commitment" />}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <Link key={it.title} to={it.to} className="lp-card group block transition hover:bg-[#f0f0f0]">
            <div className="flex items-center gap-3">
              <div className="lp-icon h-11 w-11">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="lp-h text-base underline decoration-[#1e40af] decoration-2 underline-offset-4">{it.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-black/65">{it.body}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#1a1a1a]">
              Read more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
