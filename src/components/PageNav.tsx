import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export type SidebarLink = { to: string; label: string };

export function PageNav({
  title,
  links,
  currentPath,
}: {
  title: string;
  links: readonly SidebarLink[];
  currentPath?: string;
}) {
  return (
    <nav className="overflow-hidden rounded-sm border border-white/15 bg-black/45 shadow-xl shadow-black/30 backdrop-blur-md">
      <div className="border-b border-white/10 px-5 py-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          {title}
        </h2>
      </div>
      <ul className="p-2">
        {links.map((l) => {
          const isActive = currentPath === l.to;
          return (
            <li key={l.to + l.label}>
              <Link
                to={l.to}
                className={`group flex items-center justify-between gap-2 rounded-sm px-3 py-2.5 text-[13px] transition ${
                  isActive
                    ? "bg-white font-semibold text-[#1a1a1a]"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{l.label}</span>
                <ArrowRight
                  className={`h-3.5 w-3.5 shrink-0 transition ${
                    isActive
                      ? "translate-x-0.5"
                      : "opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export const aboutLinks: readonly SidebarLink[] = [
  { to: "/about", label: "Corporate Profile" },
  { to: "/about/governance", label: "Governance, Ethics & Compliance" },
  { to: "/about/leadership", label: "Leadership & Management Approach" },
  { to: "/about/commitment", label: "Our Commitment" },
  { to: "/about/strengths", label: "Operational Strengths" },
];

export const assuranceLinks: readonly SidebarLink[] = [
  { to: "/about/commitment", label: "Our Commitment — Overview" },
  { to: "/about/hsse", label: "HSSE Philosophy" },
  { to: "/about/quality", label: "Quality Assurance" },
  { to: "/about/delivery", label: "Timely Delivery Assurance" },
  { to: "/about/client", label: "Client Satisfaction" },
];

export const businessLinks: readonly SidebarLink[] = [
  { to: "/business", label: "Overview" },
  { to: "/business/construction", label: "General Construction Works" },
  { to: "/business/project-works", label: "Project Works (EPC Mechanical)" },
  { to: "/business/maintenance", label: "Plant Maintenance Works" },
  { to: "/business/partnership", label: "Core Partnership Services" },
];

export const networkLinks: readonly SidebarLink[] = [
  { to: "/network", label: "Industries Overview" },
  { to: "/network/infrastructure", label: "Infrastructure" },
  { to: "/network/oil-gas", label: "Oil & Gas" },
  { to: "/network/green-energy", label: "Green Energy" },
  { to: "/network/power-generation", label: "Power Generation" },
  { to: "/network/construction", label: "Construction" },
  { to: "/network/land-transport", label: "Land Transport Authority" },
];

export const siteLinks: readonly SidebarLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/business", label: "Our Services" },
  { to: "/network", label: "Field of Business" },
  { to: "/contact", label: "Contact Us" },
];
