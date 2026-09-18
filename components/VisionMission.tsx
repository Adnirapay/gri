const MISSIONS = [
  "Menjadi mitra terpercaya bagi sektor swasta, pemerintah dan BUMN.",
  "Menyediakan layanan logistik yang cepat, aman, dan efisien.",
  "Mengembangkan jaringan keagenan yang produktif dan berkelanjutan.",
  "Menghadirkan solusi teknologi untuk mendukung operasional bisnis.",
  "Menciptakan nilai tambah bagi customer, mitra, dan pemegang saham.",
];

export default function VisionMission() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-[34px]">
              Visi
            </h2>
            <p className="mt-6 border-l-2 border-orange pl-5 text-[19px] leading-relaxed text-ink/80">
              Menjadi perusahaan solusi bisnis terintegrasi terdepan di Indonesia
              yang menghadirkan layanan profesional, inovatif, dan berkelanjutan di
              bidang keagenan, logistik, teknologi, serta layanan pendukung bisnis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-[34px]">
              Misi
            </h2>
            <ol className="mt-6 grid gap-5 sm:grid-cols-2">
              {MISSIONS.map((m, i) => (
                <li key={m} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue text-sm font-medium text-blue">
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink/75">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
