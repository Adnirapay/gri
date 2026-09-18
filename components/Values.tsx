import { Briefcase, ShieldCheck, Scale, Zap, HandHeart, Award } from "lucide-react";

const VALUES = [
  { icon: Briefcase, title: "Professional", desc: "Bekerja dengan standar profesional, tanggung jawab, dan komitmen terhadap kualitas." },
  { icon: Award, title: "Reliable", desc: "Menjadi mitra yang dapat diandalkan dalam memenuhi kebutuhan logistik dan operasional pelanggan." },
  { icon: ShieldCheck, title: "Safety", desc: "Mengutamakan keamanan dalam proses pengiriman, pemindahan, dan penggunaan alat." },
  { icon: Scale, title: "Integrity", desc: "Menjalankan pekerjaan dengan jujur, transparan, dan bertanggung jawab." },
  { icon: Zap, title: "Responsive", desc: "Memberikan respons dan solusi secara cepat terhadap kebutuhan pelanggan." },
  { icon: HandHeart, title: "Commitment", desc: "Berkomitmen memberikan pelayanan terbaik dan menjaga kepercayaan yang telah diberikan pelanggan." },
];

export default function Values() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-content px-6 py-20">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-[34px]">
          Nilai Kami
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            const accent = i % 2 === 0 ? "text-blue" : "text-orange";
            return (
              <div key={v.title} className="bg-white p-7">
                <Icon size={22} strokeWidth={1.75} className={accent} />
                <h3 className="mt-4 font-display text-lg font-medium text-ink">{v.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
