"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const words = ["Where", "beauty", "becomes", "an", "art."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBig = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="grain relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-cream via-blush/60 to-cream">
      <motion.div style={{ y: yBig }} className="float absolute -right-32 top-16 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-rose/60 to-gold/40 blur-3xl" />
      <motion.div style={{ y: ySmall }} className="float absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-gradient-to-tr from-gold/40 to-blush blur-2xl [animation-delay:2s]" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pt-28 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">Luxury hair · skin · nails</motion.p>
          <h1 className="font-display text-6xl font-light leading-[1.02] md:text-8xl">
            {words.map((w, i) => (
              <span key={i} className="mr-4 inline-block overflow-hidden align-bottom">
                <motion.span
                  className={`inline-block ${w === "art." ? "italic text-rose" : ""}`}
                  initial={{ y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-plum/70">
            Step into a calm, sun-lit space where our stylists craft looks that feel unmistakably you.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }} className="mt-10 flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#book" className="rounded-full bg-plum px-9 py-4 text-xs uppercase tracking-[0.25em] text-cream">Book appointment</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#services" className="rounded-full border border-plum/30 px-9 py-4 text-xs uppercase tracking-[0.25em]">Our services</motion.a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.85, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto hidden aspect-[4/5] w-full max-w-md md:block">
          <div className="absolute inset-0 rounded-t-[999px] rounded-b-3xl bg-gradient-to-b from-blush via-rose/70 to-gold/70 shadow-2xl" />
          <div className="absolute inset-4 flex items-center justify-center rounded-t-[999px] rounded-b-2xl border border-white/50">
            <span className="font-display text-[9rem] italic text-white/80">L</span>
          </div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -left-10 bottom-16 rounded-2xl bg-cream px-5 py-4 shadow-xl">
            <p className="font-display text-3xl">4.9 ★</p>
            <p className="text-xs uppercase tracking-widest text-plum/60">8,500+ clients</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-plum/50">Scroll ↓</motion.div>
    </section>
  );
}
