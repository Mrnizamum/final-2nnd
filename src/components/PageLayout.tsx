import type { ReactNode } from "react";
import pageBg from "@/assets/page-bg.jpg.asset.json";
import logoAsset from "@/assets/ats-logo-transparent.png.asset.json";

export function PageLayout({
  eyebrow,
  title,
  subtitle,
  nav,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  nav: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${pageBg.url})` }}
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0b1220]/85 via-[#0b1220]/72 to-[#0b1220]/88"
      />

      <div className="container-x grid items-start gap-8 pb-20 pt-28 md:pt-32 lg:grid-cols-[clamp(220px,24%,300px)_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-28">{nav}</div>

        <article className="letterpad">
          <header className="letterpad-head">
            <div className="flex items-center gap-3">
              <div className="lp-logo-badge">
                <img
                  src={logoAsset.url}
                  alt="AtripleS Construction & Engineering"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="lp-brand">{"\n"}</div>
                <div className="lp-brand-sub">{"\n"}</div>
              </div>
            </div>
            <div className="hidden text-right leading-relaxed sm:block">
              <div className="lp-meta">{"\n"}</div>
              <div className="lp-meta">{"\n"}</div>
            </div>
          </header>

          <div className="letterpad-body">
            {eyebrow && <div className="letterpad-eyebrow">{eyebrow}</div>}
            <h1 className="letterpad-title">{title}</h1>
            {subtitle && <p className="letterpad-subtitle">{subtitle}</p>}
            <div className="mt-8">{children}</div>
          </div>

          <footer className="letterpad-foot">
            <span>AtripleS Construction &amp; Engineering Pte. Ltd.</span>
            <span>admin@atsce.com.sg · +65 8124 6664</span>
          </footer>
        </article>
      </div>
    </div>
  );
}
