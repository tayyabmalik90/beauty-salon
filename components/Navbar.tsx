"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = ["Services", "Gallery", "Reviews", "Book"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-cream/80 py-3 shadow-sm backdrop-blur-md" : "py-6"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-display text-3xl tracking-wide">Lumière<span className="text-rose">.</span></a>
        <ul className="hidden items-center gap-10 text-sm uppercase tracking-[0.2em] md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="group relative">
                {l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#book" className="rounded-full bg-plum px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-cream transition hover:bg-rose">Book now</a>
      </nav>
    </motion.header>
  );
}
