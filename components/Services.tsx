"use client";
import { motion } from "motion/react";
import { services } from "@/lib/data";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const card = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">What we do</p>
        <h2 className="font-display text-5xl md:text-6xl">Our <span className="italic text-rose">signature</span> services</h2>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <motion.article
            key={s.title}
            variants={card}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl border border-plum/10 bg-white/60 p-8 transition-shadow duration-500 hover:shadow-2xl"
          >
            <div className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-br from-blush to-rose/50 transition-transform duration-500 group-hover:translate-y-0" />
            <div className="relative z-10">
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-plum text-2xl text-cream transition-transform duration-500 group-hover:rotate-[360deg]">{s.icon}</span>
              <h3 className="mb-3 font-display text-3xl">{s.title}</h3>
              <p className="mb-6 leading-relaxed text-plum/70">{s.desc}</p>
              <div className="flex items-center justify-between border-t border-plum/10 pt-4 text-sm">
                <span className="uppercase tracking-widest text-plum/60">{s.price}</span>
                <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-2">→</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
