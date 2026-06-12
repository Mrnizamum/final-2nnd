import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, siteLinks } from "@/components/PageNav";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel — AtripleS Construction & Engineering" },
      { name: "description", content: "Internal admin panel for AtripleS Construction & Engineering Pte. Ltd." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Admin,
});

function Admin() {
  return (
    <PageLayout
      eyebrow="Internal · Admin"
      title="Admin Panel"
      subtitle="Restricted area — sign in to manage site content."
      nav={<PageNav title="Navigate" links={siteLinks} currentPath="/admin" />}
    >
      <div className="lp-card">
        <p className="text-sm text-black/70">
          The admin panel is reserved for authorized AtripleS personnel. Please contact the
          site administrator for access.
        </p>
        <div className="mt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-[#1e40af] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#1e3a8a]"
          >
            Request access
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}