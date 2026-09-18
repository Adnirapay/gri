import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import RouteDiagram from "./RouteDiagram";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <Image
        src="/images/port-aerial.jpg"
        alt="Aktivitas bongkar muat peti kemas di pelabuhan"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/60"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-content gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
        <div>
          <p className="text-[15px] text-orange">PT GRI Solusi Nusantara</p>
          <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl">
            Menghubungkan bisnis, mengantarkan solusi logistik yang bisa diandalkan.
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/70">
            Jasa pengiriman logistik dan penyewaan alat berat forklift untuk sektor
            swasta, pemerintah, dan BUMN — dengan pelayanan yang praktis, aman, dan
            tepat waktu.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/6285139842007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-orange px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-orange/90"
            >
              <MessageCircle size={18} />
              Hubungi via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-white/85 transition-colors hover:text-white"
            >
              Lihat layanan kami
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="rounded-sm border border-white/10 bg-ink/40 p-6 backdrop-blur-sm">
          <RouteDiagram />
        </div>
      </div>
    </section>
  );
}
