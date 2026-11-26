"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { gallery } from "@/lib/data";

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const up = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const down = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="gallery" ref={ref} className="overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Our work</p>
          <h2 className="font-display text-5xl md:text-6xl">The <span className="italic text-rose">lookbook</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.label}
              style={{ y: i % 2 === 0 ? up : down }}
              whileHover={{ scale: 1.04, rotate: i % 2 ? 1.5 : -1.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className={`group relative overflow-hidden rounded-3xl ${i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${g.from}, ${g.to})` }} />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-plum/60 to-transparent p-5 text-cream">
                <span className="font-display text-2xl italic">{g.label}</span>
                <span className="translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">↗</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
