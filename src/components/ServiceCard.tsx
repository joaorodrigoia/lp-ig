import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

type Pos = { x: number; y: number };

export function ServiceCard({ icon: Icon, title, description, index = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState<Pos>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col gap-4 rounded-2xl border border-subtle bg-bg-secondary overflow-hidden p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50"
      style={{
        boxShadow: hovered ? '0 0 40px rgba(212,175,55,0.12), inset 0 0 0 1px rgba(212,175,55,0.12)' : undefined,
      }}
    >
      {/* Mouse spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(360px circle at ${pos.x}px ${pos.y}px, rgba(212,175,55,0.08), transparent 65%)`,
        }}
      />

      {/* Number watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute bottom-2 right-4 font-serif font-bold leading-none text-gold/[0.055] transition-all duration-500 group-hover:text-gold/[0.12]"
        style={{ fontSize: 'clamp(4.5rem, 9vw, 7rem)' }}
      >
        {num}
      </span>

      {/* Icon */}
      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20 transition-all duration-300 group-hover:bg-gold/[0.15] group-hover:ring-gold/40 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.18)]">
        <Icon className="h-5 w-5 text-gold" aria-hidden />
      </div>

      <h3 className="relative z-10 font-serif text-xl md:text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="relative z-10 text-muted text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
}
