import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export default function Legal() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src="/images/port-night.jpg"
        alt="Terminal peti kemas pada malam hari"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden />
      <div className="relative mx-auto max-w-content px-6 py-16">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <BadgeCheck size={28} strokeWidth={1.75} className="mt-0.5 shrink-0 text-orange" />
            <div>
              <h2 className="font-display text-xl font-medium text-white">
                Berizin & terdaftar resmi
              </h2>
              <p className="mt-1 max-w-lg text-[15px] leading-relaxed text-white/65">
                PT GRI Solusi Nusantara menjalankan kegiatan usaha secara profesional
                dan sesuai ketentuan yang berlaku, didukung Nomor Induk Berusaha
                (NIB) melalui sistem OSS Republik Indonesia.
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-sm border border-white/15 px-4 py-2 text-sm text-white/70">
            NIB — OSS Republik Indonesia
          </span>
        </div>
      </div>
    </section>
  );
}
