import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logoAsset from "@/assets/ats-logo-transparent.png.asset.json";

type SubItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

type NavItem = {
  label: string;
  to: string;
  children?: SubItem[];
};

const nav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Corporate Profile", to: "/about" },
      { label: "Governance, Ethics & Compliance", to: "/about/governance" },
      { label: "Leadership & Management Approach", to: "/about/leadership" },
      {
        label: "Our Assurance",
        to: "/about/commitment",
        children: [
          { label: "HSSE Philosophy", to: "/about/hsse" },
          { label: "Quality Assurance", to: "/about/quality" },
          { label: "Timely Delivery Assurance", to: "/about/delivery" },
          { label: "Client Satisfaction", to: "/about/client" },
        ],
      },
      { label: "Operational Strengths", to: "/about/strengths" },
    ],
  },
  {
    label: "Our Business",
    to: "/business",
    children: [
      { label: "Project Works (EPC Mechanical)", to: "/business/project-works" },
      { label: "General Construction Works", to: "/business/construction" },
      { label: "Plant Maintenance Works", to: "/business/maintenance" },
      { label: "Core Partnership Services", to: "/business/partnership" },
    ],
  },
  {
    label: "Field of Business",
    to: "/network",
    children: [
      { label: "Infrastructure", to: "/network/infrastructure" },
      { label: "Oil & Gas", to: "/network/oil-gas" },
      { label: "Green Energy", to: "/network/green-energy" },
      { label: "Power Generation", to: "/network/power-generation" },
      { label: "Construction", to: "/network/construction" },
      { label: "Land Transport Authority", to: "/network/land-transport" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";

  const headerClasses = isHome
    ? "absolute top-0 z-50 w-full bg-gradient-to-b from-black/40 to-transparent"
    : "sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-black/10";

  const navContainerClasses = isHome
    ? "flex w-full items-stretch overflow-visible rounded-sm bg-black/30 backdrop-blur-sm shadow-lg shadow-black/20"
    : "flex w-full items-stretch overflow-visible rounded-sm bg-[#f5f5f5] shadow-sm";

  const logoClasses = isHome
    ? "flex items-center px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-sm"
    : "flex items-center px-4 py-2 bg-white border-r border-black/10";

  const activeItem = isHome ? "bg-white/20 text-white" : "bg-[#1e40af] text-white";
  const inactiveItem = isHome
    ? "text-white hover:bg-white/10"
    : "text-[#3A3A3A] hover:bg-black/5";

  const mobileBtnClasses = isHome
    ? "rounded-md border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
    : "rounded-md border border-black/20 bg-white p-2 text-[#3A3A3A] transition-colors hover:bg-black/5";

  return (
    <header className={headerClasses}>
      <div className="container-x flex items-center justify-between gap-6 py-2">
        {/* Desktop Nav with integrated logo */}
        <div className="hidden w-full items-center lg:flex">
          <nav className={navContainerClasses}>
            <Link to="/" className={logoClasses}>
              <img
                src={logoAsset.url}
                alt="AtS Construction & Engineering"
                className="h-10 w-auto object-contain md:h-12"
                style={{ imageRendering: "auto" }}
              />
            </Link>
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    to={item.to}
                    activeProps={{ className: activeItem }}
                    inactiveProps={{ className: inactiveItem }}
                    className="flex h-full items-center gap-1 px-5 py-3 text-[13px] font-medium tracking-wide transition-colors duration-300"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 min-w-[280px] translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="mt-1 rounded-sm bg-[#1e40af]/95 py-2 shadow-xl shadow-black/30 backdrop-blur-md">
                      {item.children.map((sub) => (
                        <li key={sub.label} className="group/sub relative">
                          {sub.children ? (
                            <>
                              <Link
                                to={sub.to}
                                className="flex items-center justify-between gap-2 px-5 py-2.5 text-[14px] text-white transition-colors hover:bg-white/20"
                              >
                                <span>{sub.label}</span>
                                <ChevronRight className="h-3.5 w-3.5" />
                              </Link>
                              <div className="invisible absolute left-full top-0 z-50 min-w-[240px] -translate-x-1 pl-1 opacity-0 transition-all duration-200 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                                <ul className="rounded-sm bg-[#1e40af]/95 py-2 shadow-xl shadow-black/30 backdrop-blur-md">
                                  {sub.children.map((leaf) => (
                                    <li key={leaf.label}>
                                      <Link
                                        to={leaf.to}
                                        className="block px-5 py-2.5 text-[14px] text-white transition-colors hover:bg-white/20"
                                      >
                                        {leaf.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          ) : (
                            <Link
                              to={sub.to}
                              className="block px-5 py-2.5 text-[14px] text-white transition-colors hover:bg-white/20"
                            >
                              {sub.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{ className: activeItem }}
                  inactiveProps={{ className: inactiveItem }}
                  activeOptions={{ exact: item.to === "/" }}
                  className="flex h-full items-center px-5 py-3 text-[13px] font-medium tracking-wide transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Mobile logo + hamburger */}
        <Link to="/" className="flex items-center lg:hidden">
          <img
            src={logoAsset.url}
            alt="AtS Construction & Engineering"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className={mobileBtnClasses}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 rounded-sm bg-[#3A3A3A]/95 backdrop-blur lg:hidden">
          <div className="flex flex-col py-2">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded((p) => (p === item.label ? null : item.label))
                    }
                    className="flex w-full items-center justify-between px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="bg-black/20">
                      {item.children.map((sub) =>
                        sub.children ? (
                          <div key={sub.label}>
                            <button
                              onClick={() =>
                                setMobileSubExpanded((p) =>
                                  p === sub.label ? null : sub.label
                                )
                              }
                              className="flex w-full items-center justify-between px-8 py-2.5 text-sm text-white hover:bg-white/10"
                            >
                              {sub.label}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  mobileSubExpanded === sub.label ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {mobileSubExpanded === sub.label &&
                              sub.children.map((leaf) => (
                                <Link
                                  key={leaf.label}
                                  to={leaf.to}
                                  onClick={() => setOpen(false)}
                                  className="block px-12 py-2 text-sm text-white/90 hover:bg-white/10"
                                >
                                  {leaf.label}
                                </Link>
                              ))}
                          </div>
                        ) : (
                          <Link
                            key={sub.label}
                            to={sub.to}
                            onClick={() => setOpen(false)}
                            className="block px-8 py-2.5 text-sm text-white hover:bg-white/10"
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-white text-[#3A3A3A]" }}
                  inactiveProps={{ className: "text-white hover:bg-white/10" }}
                  activeOptions={{ exact: item.to === "/" }}
                  className="px-5 py-3 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
