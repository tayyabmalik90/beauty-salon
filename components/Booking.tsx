"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { services } from "@/lib/data";

const field = "w-full rounded-xl border border-plum/15 bg-white/70 px-5 py-4 outline-none transition focus:border-rose focus:ring-4 focus:ring-rose/20";

export default function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section id="book" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Reserve your chair</p>
        <h2 className="font-display text-5xl leading-tight md:text-6xl">Ready for your <span className="italic text-rose">glow-up?</span></h2>
        <p className="mt-6 max-w-md text-lg text-plum/70">Tell us what you have in mind and we&apos;ll confirm your appointment within a few hours.</p>
        <dl className="mt-10 space-y-3 text-sm uppercase tracking-widest text-plum/70">
          <div><dt className="inline text-gold">Hours · </dt><dd className="inline">Mon–Sat, 10am – 8pm</dd></div>
          <div><dt className="inline text-gold">Phone · </dt><dd className="inline">+00 000 000 0000</dd></div>
          <div><dt className="inline text-gold">Visit · </dt><dd className="inline">123 Rose Street, Your City</dd></div>
        </dl>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="rounded-3xl bg-blush/50 p-8 md:p-10">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[22rem] flex-col items-center justify-center text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-plum text-4xl text-cream">✓</motion.div>
              <h3 className="font-display text-4xl">Thank you!</h3>
              <p className="mt-3 text-plum/70">We&apos;ll be in touch shortly to confirm.</p>
            </motion.div>
          ) : (
            <motion.form key="form" exit={{ opacity: 0 }} onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <input required name="name" placeholder="Your name" className={field} />
              <input required type="email" name="email" placeholder="Email address" className={field} />
              <select required name="service" defaultValue="" className={field}>
                <option value="" disabled>Choose a service</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
              <input required type="date" name="date" className={field} />
              <textarea name="notes" rows={3} placeholder="Anything we should know?" className={field} />
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit" className="w-full rounded-full bg-plum py-4 text-xs uppercase tracking-[0.3em] text-cream transition hover:bg-rose">Request appointment</motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
