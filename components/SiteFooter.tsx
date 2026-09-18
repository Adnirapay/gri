import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <Image src="/logo.jpeg" alt="PT GRI Solusi Nusantara" width={112} height={56} className="h-7 w-auto opacity-90" />
        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} PT GRI Solusi Nusantara. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
