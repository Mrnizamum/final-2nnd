import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/hd-slide-1.png.asset.json";
import slide2 from "@/assets/hd-slide-2.png.asset.json";
import slide3 from "@/assets/hd-slide-3.png.asset.json";
import slide4 from "@/assets/hd-slide-4.png.asset.json";
import slide5 from "@/assets/hd-slide-5.png.asset.json";
import bizProject from "@/assets/biz-project.jpg";
import bizMaintenance from "@/assets/biz-maintenance.jpg";
import bizScaffold from "@/assets/biz-scaffold.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AtS Construction & Engineering Pte. Ltd." },
      {
        name: "description",
        content:
          "Engineering Excellence for Industrial Performance — EPC, General Construction, Mechanical, Piping & Structure, Scaffolding, Maintenance Services.",
      },
    ],
  }),
  component: Home,
});

const slides = [slide1.url, slide2.url, slide3.url, slide4.url, slide5.url];

function Home() {
  const [index, setIndex] = useState(0);

  const go = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, []);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
    <section className="relative isolate h-[85vh] min-h-[600px] w-full overflow-hidden bg-black">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden={i !== index}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}


      {/* Hero copy */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-x">
          <div className="max-w-3xl text-white">
            <h1 className="font-display text-4xl font-bold leading-[1.1] drop-shadow-md md:text-6xl" style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.9), 0px 0px 2px rgba(0,0,0,1), 0px 1px 3px rgba(0,0,0,0.8)' }}>
              Engineering Excellence for Industrial Performance
            </h1>
            <p className="mt-6 text-base font-medium text-white/90 md:text-lg" style={{ textShadow: '0px 0px 3px rgba(0,0,0,0.9), 0px 0px 1px rgba(0,0,0,1), 0px 1px 2px rgba(0,0,0,0.8)' }}>
              EPC <span className="mx-2 text-[#ef6c1a]">|</span> General Construction
              <span className="mx-2 text-[#ef6c1a]">|</span> Mechanical
              <span className="mx-2 text-[#ef6c1a]">|</span> Piping &amp; Structure
              <span className="mx-2 text-[#ef6c1a]">|</span> Scaffolding
              <span className="mx-2 text-[#ef6c1a]">|</span> Maintenance Service
            </p>
            <Link
              to="/business"
              className="mt-10 inline-flex items-center gap-2 bg-[#ef6c1a] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#d65a10]"
            >
              Explore Our Business
            </Link>
          </div>
        </div>
      </div>

      {/* Nav buttons */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white/30 md:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white/30 md:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2 transition-all duration-300 ${
              i === index ? "w-8 bg-[#ef6c1a]" : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>

    <section className="bg-white py-10 md:py-14">
      <div className="container-x grid gap-6 lg:grid-cols-2">
        {/* About Us */}
        <div className="relative">
          <div className="bg-[#1e40af] p-6 text-white md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">About Us</h2>
            <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-white/90 md:text-sm">
              <p>
                [About Us content goes here — share the company introduction, history, and key
                message. Replace this placeholder with the text you'd like displayed.]
              </p>
              <p>
                [Continue the About Us description here with additional paragraphs as needed.]
              </p>
            </div>
            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-2 border-b-2 border-white pb-1 text-xs font-semibold uppercase tracking-wider text-white transition hover:text-[#1e40af] hover:border-[#1e40af]"
            >
              More +
            </Link>
          </div>
          <div className="absolute -bottom-3 right-6 h-3 w-24 bg-[#ef6c1a]" />
        </div>

        {/* Our Business */}
        <div>
          <h2 className="font-display text-2xl font-semibold text-[#1e40af] md:text-3xl">
            Our Business
          </h2>
          <div className="mt-4 h-px w-full bg-border" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { img: bizProject, title: "Project Works", to: "/business/project-works" },
              { img: bizMaintenance, title: "Maintenance Services", to: "/business/maintenance" },
              { img: bizScaffold, title: "Other Operations", to: "/business/partnership" },
            ].map((s) => (
              <Link key={s.title} to={s.to} className="group block">
                <div className="aspect-[4/3] overflow-hidden border border-border">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground group-hover:text-[#1e40af]">
                  {s.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Link
              to="/business"
              className="relative inline-flex items-center gap-2 border-b-2 border-[#1e40af] pb-1 text-sm font-semibold uppercase tracking-wider text-[#1e40af] transition hover:text-[#ef6c1a] hover:border-[#ef6c1a]"
            >
              More +
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
