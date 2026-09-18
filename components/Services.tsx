import Image from "next/image";
import { Truck, Forklift, Handshake, Laptop2 } from "lucide-react";

const SERVICES = [
  {
    icon: Truck,
    image: "/images/service-logistik.jpg",
    title: "Layanan Logistik",
    desc: "Pengiriman dan distribusi barang dengan pilihan layanan yang fleksibel sesuai kebutuhan operasional pelanggan.",
    tags: ["FTL (Full Truck Load)", "Point to point", "Multi drop"],
  },
  {
    icon: Forklift,
    image: "/images/service-forklift.jpg",
    title: "Layanan Sewa Alat Berat",
    desc: "Penyewaan alat berat untuk mendukung kebutuhan pemindahan dan penanganan barang dalam kegiatan operasional maupun proyek.",
    tags: ["Forklift"],
  },
  {
    icon: Handshake,
    image: "/images/service-keagenan.jpg",
    title: "Layanan Jasa Keagenan",
    desc: "Berbagai layanan keagenan yang membantu pelanggan memenuhi kebutuhan transaksi, pengiriman, dan pengelolaan layanan secara lebih mudah dan terintegrasi.",
    tags: ["Jasa keuangan (PPOB)", "Jasa kurir", "Agregator"],
  },
  {
    icon: Laptop2,
    image: "/images/service-digital.jpg",
    title: "Layanan Digital Solution",
    desc: "Solusi teknologi digital untuk membantu bisnis dan organisasi meningkatkan efisiensi proses kerja serta pengelolaan layanan.",
    tags: ["Pembuatan & pengembangan aplikasi", "Web & app based"],
  },
];

export default function Services() {
  return (
    <section id="layanan" className="border-b border-line bg-white">
      <div className="mx-auto max-w-content px-6 py-20">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-[34px]">
          Layanan Kami
        </h2>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink/70">
          Mendukung kebutuhan logistik, operasional, keagenan, hingga solusi
          digital — dirancang untuk memberikan kemudahan dan efisiensi.
        </p>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="grid gap-6 py-10 sm:grid-cols-[160px_auto_1fr] sm:items-center sm:gap-8">
                <div className="relative h-28 w-full overflow-hidden rounded-sm sm:h-24 sm:w-40">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-sm bg-blue/5 text-blue sm:flex">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <div>
                  <h3 className="flex items-center gap-2 font-display text-xl font-medium text-ink">
                    <Icon size={19} strokeWidth={1.75} className="text-blue sm:hidden" />
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink/70">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm border border-line px-2.5 py-1 text-[13px] text-ink/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
