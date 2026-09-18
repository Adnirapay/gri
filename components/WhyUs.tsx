import { Users2, Clock3, ShieldCheck, SlidersHorizontal, HeartHandshake } from "lucide-react";

const REASONS = [
  {
    icon: Users2,
    title: "Pelayanan Profesional",
    desc: "Mengutamakan pelayanan yang cepat, komunikatif, dan bertanggung jawab dalam setiap pekerjaan.",
  },
  {
    icon: Clock3,
    title: "Tepat Waktu",
    desc: "Kami memahami waktu sangat penting dalam operasional bisnis, dan berkomitmen menjaga ketepatan waktu layanan.",
  },
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    desc: "Keamanan barang dan kelancaran pekerjaan menjadi salah satu prioritas utama dalam setiap layanan.",
  },
  {
    icon: SlidersHorizontal,
    title: "Fleksibel",
    desc: "Layanan dapat disesuaikan dengan kebutuhan pelanggan, baik untuk pengiriman maupun penyewaan forklift.",
  },
  {
    icon: HeartHandshake,
    title: "Mengutamakan Kepuasan Pelanggan",
    desc: "Kami membangun kerja sama berdasarkan kepercayaan, kualitas pelayanan, dan hubungan jangka panjang.",
  },
];

export default function WhyUs() {
  return (
    <section id="kenapa-kami" className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-20">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-[34px]">
          Mengapa Harus Memilih Kami
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="flex gap-4">
                <Icon size={22} strokeWidth={1.75} className="mt-1 shrink-0 text-orange" />
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{r.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
