import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const CONTACTS = [
  { icon: Phone, label: "0851 3984 2007", href: "https://wa.me/6285139842007" },
  { icon: Mail, label: "grisolusinusantara@gmail.com", href: "mailto:grisolusinusantara@gmail.com" },
  {
    icon: MapPin,
    label: "EasyBuilding Jl. Cihampelas No. 201A, Cipaganti, Coblong, Kota Bandung, Jawa Barat 40131",
    href: "https://maps.google.com/?q=Jl.+Cihampelas+No.+201A+Cipaganti+Coblong+Bandung",
  },
];

export default function Contact() {
  return (
    <section id="kontak" className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-[34px]">
              Mari bekerja sama
            </h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink/70">
              Butuh armada, sewa forklift, atau solusi digital untuk operasional
              bisnis Anda? Tim kami siap membantu.
            </p>
            <a
              href="https://wa.me/6285139842007"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-blue px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-blue-light"
            >
              <MessageCircle size={18} />
              Chat via WhatsApp
            </a>
          </div>

          <ul className="grid content-start gap-6 border-t border-line pt-8 md:border-t-0 md:border-l md:pl-12 md:pt-0">
            {CONTACTS.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-[15px] text-ink/75 transition-colors hover:text-blue"
                  >
                    <Icon size={19} strokeWidth={1.75} className="mt-0.5 shrink-0 text-blue" />
                    <span>{c.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
