"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const NAV = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#kenapa-kami", label: "Kenapa Kami" },
  { href: "#kontak", label: "Kontak" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-line bg-white/95 backdrop-blur" : "border-transparent bg-white/0"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="PT GRI Solusi Nusantara" width={132} height={66} priority className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-ink/70 transition-colors hover:text-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/6285139842007"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-sm bg-blue px-4 py-2 text-[15px] font-medium text-white transition-colors hover:bg-blue-light md:inline-flex"
        >
          <MessageCircle size={17} />
          Hubungi kami
        </a>

        <button
          className="inline-flex items-center justify-center rounded-sm border border-line p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-ink/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6285139842007"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-blue px-4 py-2.5 text-[15px] font-medium text-white"
            >
              <MessageCircle size={17} />
              Hubungi kami
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
