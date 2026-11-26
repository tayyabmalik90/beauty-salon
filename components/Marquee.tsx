const items = ["Hair Styling", "Balayage", "Facials", "Bridal Makeup", "Manicure", "Keratin", "Spa Rituals"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-plum py-5 text-cream">
      <div className="marquee-track flex gap-12 font-display text-3xl italic">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            {t} <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
