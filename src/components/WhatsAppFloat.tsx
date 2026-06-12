const whatsappHelmet = "/imgs/whatsapp-helmet.png";
export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6581246664"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg shadow-black/25 ring-2 ring-[#1e40af] transition hover:-translate-y-0.5 md:bottom-28"
    >
      <img
        src={whatsappHelmet}
        alt=""
        className="h-10 w-10 object-contain"
      />
      <span className="pointer-events-none absolute inset-x-0 bottom-1 text-center font-display text-[9px] font-extrabold leading-none tracking-tight text-[#1e40af]">
        AtripleS
      </span>
    </a>
  );
}
