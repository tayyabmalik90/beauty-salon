"use client";
import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { stats } from "@/lib/data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const decimals = Number.isInteger(to) ? 0 : 1;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => { el.textContent = (decimals ? v.toFixed(1) : Math.round(v).toLocaleString()) + suffix; },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="bg-blush/50 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-6xl text-plum md:text-7xl"><Counter to={s.value} suffix={s.suffix} /></p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-plum/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
