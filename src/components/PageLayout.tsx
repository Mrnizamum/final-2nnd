import type { ReactNode } from "react";
const pageBg = "/imgs/page-bg.jpg";
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
  nav?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${pageBg})` }}
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0b1220]/85 via-[#0b1220]/72 to-[#0b1220]/88"
      />

      <div
        className={`container-x grid items-start gap-8 pb-20 pt-28 md:pt-32 ${
          nav ? "lg:grid-cols-[clamp(220px,24%,300px)_minmax(0,1fr)]" : ""
        }`}
      >
        {nav ? <div className="lg:sticky lg:top-28">{nav}</div> : null}

        <article className="letterpad">
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
