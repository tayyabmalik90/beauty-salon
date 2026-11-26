export default function Footer() {
  return (
    <footer className="bg-plum px-6 py-12 text-center text-cream">
      <p className="font-display text-4xl">Lumière<span className="text-rose">.</span></p>
      <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cream/50">Hair · Skin · Nails</p>
      <p className="mt-8 text-xs text-cream/40">© {new Date().getFullYear()} Lumière Beauty Salon. All rights reserved.</p>
    </footer>
  );
}
