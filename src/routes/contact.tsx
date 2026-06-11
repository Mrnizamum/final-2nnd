import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { useState, type ReactNode } from "react";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, siteLinks } from "@/components/PageNav";
import whatsappHelmet from "@/assets/whatsapp-helmet.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AtS Construction & Engineering Pte. Ltd." },
      { name: "description", content: "Get in touch with AtS Construction & Engineering — Singapore-based industrial engineering and construction specialist." },
    ],
  }),
  component: Contact,
});

const countryCodes = [
  { code: "+65", label: "Singapore", iso: "SG" },
  { code: "+60", label: "Malaysia", iso: "MY" },
  { code: "+62", label: "Indonesia", iso: "ID" },
  { code: "+66", label: "Thailand", iso: "TH" },
  { code: "+84", label: "Vietnam", iso: "VN" },
  { code: "+63", label: "Philippines", iso: "PH" },
  { code: "+91", label: "India", iso: "IN" },
  { code: "+92", label: "Pakistan", iso: "PK" },
  { code: "+880", label: "Bangladesh", iso: "BD" },
  { code: "+86", label: "China", iso: "CN" },
  { code: "+852", label: "Hong Kong", iso: "HK" },
];

const scopeOptions = [
  "General Construction",
  "Infrastructure Works",
  "Mechanical",
  "Structural Fabrication",
  "Refinery & Plant",
  "Engineering, procurement and construction (EPC)",
  "Scaffolding Service",
  "Plant Maintenance",
  "Pipe Fabrication Services",
  "Something else",
];

const inputClass =
  "mt-2 w-full rounded-sm border border-black/20 bg-white px-3 py-3 text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a]";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageLayout
      eyebrow="Contact Us"
      title="Get in touch with our team."
      subtitle="Tell us about your project and our team will be in touch shortly."
      nav={<PageNav title="Navigate" links={siteLinks} currentPath="/contact" />}
    >
      <a
        href="https://wa.me/6581246664"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#ef6c1a] p-2 pr-4 shadow-xl shadow-black/25 ring-2 ring-white transition hover:-translate-y-0.5 hover:bg-[#d65a10]"
      >
        <img
          src={whatsappHelmet}
          alt=""
          width={64}
          height={64}
          className="h-14 w-14 object-contain drop-shadow-md transition group-hover:rotate-[-6deg]"
        />
        <span className="hidden text-sm font-semibold text-white sm:inline">
          WhatsApp us
        </span>
      </a>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="lp-card">
          <div className="lp-kicker">HQ Address</div>
          <p className="mt-2 text-sm text-black/70">14 International Business Park, Singapore 609922</p>
        </div>
        <div className="lp-card">
          <div className="lp-kicker">Contact Info</div>
          <div className="mt-2 space-y-1 text-sm text-black/70">
            <div>Telephone: <span className="font-medium text-[#1a1a1a]">+65 8124 6664</span></div>
            <div>
              Email:{" "}
              <a href="mailto:admin@atsce.com.sg" className="font-medium text-[#1a1a1a] underline">admin@atsce.com.sg</a>
            </div>
            <div>
              WhatsApp:{" "}
              <a href="https://wa.me/6581246664" target="_blank" rel="noopener noreferrer" className="font-medium text-[#1a1a1a] underline">+65 8124 6664</a>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-8 border border-black/14 bg-[#fafafa] p-6 md:p-8"
      >
        <div className="lp-kicker">General Enquiries</div>
        <div className="mt-6 grid gap-x-6 gap-y-5 md:grid-cols-2">
          <Field label="Name" name="name" placeholder="Your full name" required />
          <Field label="Company" name="company" placeholder="Optional" />
          <Field label="Email" name="email" type="email" placeholder="you@company.com" required />

          <div>
            <FieldLabel>Phone</FieldLabel>
            <div className="mt-2 grid grid-cols-[auto_1fr] gap-3">
              <select name="countryCode" defaultValue="+65" className="rounded-sm border border-black/20 bg-white px-3 py-3 text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a]">
                {countryCodes.map((c) => (
                  <option key={c.iso} value={c.code}>{c.iso} {c.code} {c.label}</option>
                ))}
              </select>
              <input type="tel" name="phone" placeholder="Phone number" className="w-full rounded-sm border border-black/20 bg-white px-3 py-3 text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a]" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <FieldLabel>Scope of interest</FieldLabel>
          <select name="scope" defaultValue={scopeOptions[0]} className={inputClass}>
            {scopeOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="mt-5">
          <FieldLabel>Tell us about your project</FieldLabel>
          <textarea name="message" rows={6} className={inputClass} placeholder="Site location, scope, indicative timeline..." />
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          {sent ? (
            <div className="text-sm font-medium text-[#1a1a1a]">
              Thanks — we&apos;ve received your message and will be in touch shortly.
            </div>
          ) : <span />}
          <button type="submit" className="inline-flex items-center gap-2 rounded-sm bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black">
            Send message <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </PageLayout>
  );
}

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-[0.15em] text-black/50">
      {children}
    </label>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <FieldLabel>
        {label}{required && " *"}
      </FieldLabel>
      <input type={type} name={name} required={required} placeholder={placeholder} className={inputClass} />
    </div>
  );
}
