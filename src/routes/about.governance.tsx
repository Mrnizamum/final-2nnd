import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/governance")({
  head: () => ({
    meta: [
      { title: "Governance, Ethics & Compliance — AtS Construction & Engineering" },
      { name: "description", content: "Code of conduct, integrity, HSE responsibilities and ethical business commitments at AtS." },
    ],
  }),
  component: Governance,
});

const sections = [
  { title: "Commitment to Ethical Business", body: "At AtS Construction & Engineering Pte. Ltd., we are committed to conducting all business activities with integrity, transparency and professionalism. This Code of Conduct applies to all employees, subcontractors and representatives of the company." },
  { title: "Integrity & Compliance", body: "We maintain a strict policy of honesty and fairness in all operations. Bribery, corruption, fraud and unethical practices are not tolerated. All personnel must comply with applicable laws, regulations and contractual requirements." },
  { title: "Health, Safety & Environment (HSE)", body: "Safety is our top priority. All employees are required to follow safety procedures, use proper protective equipment and work responsibly to protect people, assets and the environment." },
  { title: "Professional Conduct", body: "We expect respectful, responsible and disciplined behavior in the workplace. Discrimination, harassment and unsafe practices are strictly prohibited." },
  { title: "Confidentiality", body: "All company and client information must be protected and used only for authorized business purposes." },
  { title: "Reporting Responsibility", body: "Any violation of this Code must be reported to management. AtS ensures confidentiality and proper handling of all reports." },
];

function Governance() {
  return (
    <PageLayout
      eyebrow="ABOUT US"
      title="Governance, Ethics & Compliance"
      subtitle=""
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/governance" />}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((s) => (
          <article key={s.title} className="lp-card border-l-2 border-l-[#1a1a1a]">
            <h3 className="lp-h text-base">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/65">{s.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 border border-[#1a1a1a] bg-[#1a1a1a] p-6 text-white">
        <h3 className="font-display text-lg font-bold">Our Commitment</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          AtS Construction &amp; Engineering Pte. Ltd. is committed to maintaining high ethical
          standards, strong governance and trusted partnerships in every project we undertake.
        </p>
      </div>
    </PageLayout>
  );
}
