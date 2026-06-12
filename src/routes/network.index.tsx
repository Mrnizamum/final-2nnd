import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import infrastructure from "@/assets/infrastructure.jpg.asset.json";
import oilGas from "@/assets/oil_and_gas.jpg.asset.json";
import greenEnergy from "@/assets/green_energy.jpg.asset.json";
import powerGen from "@/assets/power_generation.jpg.asset.json";
import construction from "@/assets/construction.jpg.asset.json";
import landTransport from "@/assets/land_transport_authority.jpg.asset.json";

export const Route = createFileRoute("/network/")({
  head: () => ({
    meta: [
      { title: "Field of Business — Industries We Serve | AtripleS" },
      { name: "description", content: "Industries served by AtripleS: infrastructure, oil & gas, green energy, power generation, construction and Land Transport Authority works." },
    ],
  }),
  component: Network,
});

const slides = [
  { img: infrastructure.url, title: "INFRASTRUCTURE", body: "Providing comprehensive infrastructure solutions, including road works, civil construction, repair, maintenance, and public facility upgrading projects." },
  { img: oilGas.url, title: "Oil and Gas", body: "Providing integrated EPC, construction, piping, mechanical, and maintenance services for oil & gas facilities, refineries, terminals, and process plants." },
  { img: greenEnergy.url, title: "GREEN ENERGY", body: "Supporting renewable and sustainable energy projects through reliable engineering, construction, maintenance, and infrastructure solutions." },
  { img: powerGen.url, title: "POWER GENERATION", body: "Supporting uninterrupted power production through dependable plant maintenance and turnaround services." },
  { img: construction.url, title: "CONSTRUCTION", body: "Supporting sustainable development through reliable and efficient construction services." },
  { img: landTransport.url, title: "Land Transport Authority", body: "Supporting transport infrastructure development through civil works, road maintenance, and repair services." },
];

function Network() {
  const [index, setIndex] = useState(0);
  const go = useCallback((i: number) => setIndex(((i % slides.length) + slides.length) % slides.length), []);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <PageLayout
      eyebrow="Field of Business"
      title="Industries we serve"
      subtitle=""
      nav={<PageNav title="Field of Business" links={networkLinks} currentPath="/network" />}
    >
      <div className="relative isolate overflow-hidden rounded-lg border border-black/14 bg-black">
        <div className="relative aspect-[16/9] w-full">
          {slides.map((s, i) => (
            <div
              key={s.title}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: i === index ? 1 : 0 }}
              aria-hidden={i !== index}
            >
              <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div
                key={`copy-${index}-${i}`}
                className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10"
              >
                <h2
                  className={`font-display text-2xl font-extrabold uppercase tracking-wide text-white md:text-4xl ${i === index ? "animate-fade-in" : ""}`}
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
                >
                  {s.title}
                </h2>
                <p
                  className={`mt-3 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base ${i === index ? "animate-fade-in" : ""}`}
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
                >
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur transition hover:bg-white/30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur transition hover:bg-white/30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 transition-all duration-300 ${i === index ? "w-8 bg-[#ef6c1a]" : "w-2 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {slides.map((s, i) => (
          <li key={s.title}>
            <button
              onClick={() => go(i)}
              className={`flex w-full items-center gap-3 rounded-md border p-3 text-left transition ${i === index ? "border-[#1e40af] bg-[#dbeafe]" : "border-black/10 bg-white hover:border-[#1e40af]/40"}`}
            >
              <img src={s.img} alt="" className="h-12 w-16 rounded-sm object-cover" />
              <span className="text-sm font-semibold text-[#1e40af]">{s.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}