import Image from "next/image";

const FACTS = [
  { label: "Bergerak di bidang", value: "Logistik & sewa alat berat" },
  { label: "Melayani", value: "Swasta, pemerintah & BUMN" },
  { label: "Berbasis di", value: "Bandung, Jawa Barat" },
];

export default function About() {
  return (
    <section id="tentang" className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 md:grid-cols-[1fr_0.85fr] md:gap-16">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-[34px]">
            Tentang Kami
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink/70">
            PT GRI Solusi Nusantara merupakan perusahaan yang bergerak di bidang jasa
            pengiriman logistik dan penyewaan alat berat forklift. Kami hadir untuk
            memberikan solusi yang praktis, aman, dan terpercaya dalam mendukung
            kebutuhan distribusi, pemindahan, serta pengelolaan barang.
          </p>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink/70">
            Dengan mengutamakan pelayanan profesional, ketepatan waktu, dan kondisi
            alat yang terjaga, kami berkomitmen menjadi mitra yang dapat diandalkan
            untuk kebutuhan logistik dan operasional berbagai sektor usaha.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-ink/50">{f.label}</dt>
                <dd className="mt-1 font-display text-base font-medium text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-sm">
          <Image
            src="/images/truck-containers.jpg"
            alt="Armada truk kontainer PT GRI Solusi Nusantara"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
