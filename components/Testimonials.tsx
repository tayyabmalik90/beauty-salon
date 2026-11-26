"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section id="reviews" className="relative overflow-hidden bg-plum px-6 py-28 text-cream">
      <div className="float absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Kind words</p>
        <div className="font-display text-8xl leading-none text-gold/60">“</div>
        <div className="min-h-[14rem]">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -30, filter: "blur(6px)" }} transition={{ duration: 0.6 }}>
              <p className="font-display text-3xl italic leading-snug md:text-4xl">{t.text}</p>
              <p className="mt-8 text-sm uppercase tracking-[0.3em]">{t.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-cream/50">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, n) => (
            <button key={n} aria-label={`Review ${n + 1}`} onClick={() => setI(n)} className="h-2 rounded-full bg-cream/30 transition-all" style={{ width: n === i ? 40 : 8, background: n === i ? "var(--color-gold)" : undefined }} />
          ))}
        </div>
      </div>
    </section>
  );
}
