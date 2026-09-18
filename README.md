# PT GRI Solusi Nusantara — Company Profile

Website company profile one-page untuk PT GRI Solusi Nusantara, dibangun dengan
Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

> Catatan: `npm run build` butuh koneksi internet karena memakai `next/font/google`
> (Inter & Space Grotesk) yang diambil saat build. Ini normal dan akan berjalan
> otomatis saat build di Vercel.

## Deploy ke Vercel

1. Push project ini ke repo GitHub.
2. Buka https://vercel.com/new, import repo tersebut.
3. Vercel otomatis mendeteksi Next.js — klik **Deploy**, tidak perlu setting tambahan.

## Struktur

- `app/page.tsx` — merangkai semua section jadi satu halaman.
- `components/` — satu file per section (Hero, About, Services, dst).
- `public/logo.jpeg` — logo perusahaan.

## Yang mungkin perlu disesuaikan

- Nomor WhatsApp (`https://wa.me/6285139842007`) dan email di `SiteHeader.tsx`,
  `Hero.tsx`, `Contact.tsx`.
- Nomor NIB spesifik di `Legal.tsx` (saat ini hanya menyebut "terdaftar via OSS"
  tanpa mencantumkan nomor, karena nomornya tidak terbaca jelas dari dokumen PDF).
- Ganti `public/logo.jpeg` dengan versi PNG transparan bila tersedia, untuk hasil
  lebih rapi di header/footer.
