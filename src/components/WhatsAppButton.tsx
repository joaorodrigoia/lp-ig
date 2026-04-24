import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/content';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type Props = {
  label?: string;
  variant?: Variant;
  size?: Size;
  showIcon?: boolean;
  className?: string;
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-5 py-2.5',
  md: 'text-sm md:text-base px-7 py-3.5',
  lg: 'text-base md:text-lg px-9 py-4.5',
};

export function WhatsAppButton({
  label = 'Falar no WhatsApp',
  variant = 'primary',
  size = 'md',
  showIcon = true,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 28 });
  const sy = useSpring(y, { stiffness: 220, damping: 28 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  if (variant !== 'primary') {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] whitespace-nowrap',
          variant === 'secondary'
            ? 'bg-transparent text-gold border border-gold/60 hover:border-gold hover:bg-gold/5'
            : 'bg-transparent text-white/80 hover:text-gold',
          sizes[size],
          className,
        )}
        aria-label="Abrir conversa no WhatsApp"
      >
        {showIcon && <MessageCircle className="h-4 w-4 md:h-5 md:w-5 flex-none" />}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn('relative inline-flex', className)}
    >
      {/* Pulse rings expandindo para fora do botão */}
      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-gold/30 pointer-events-none" />
      <span className="animate-pulse-ring-delayed absolute inset-0 rounded-full bg-gold/20 pointer-events-none" />

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'shimmer-sweep relative z-10 overflow-hidden inline-flex items-center justify-center gap-2.5',
          'rounded-full font-semibold bg-gold-gradient text-bg',
          'shadow-gold-glow hover:shadow-gold-glow-lg',
          'transition-shadow duration-300 whitespace-nowrap',
          'active:scale-[0.97]',
          sizes[size],
        )}
        aria-label="Abrir conversa no WhatsApp"
      >
        {showIcon && (
          <MessageCircle className="h-4 w-4 md:h-5 md:w-5 flex-none" />
        )}
        <span>{label}</span>
        {/* Ponto "online" verde estilo WhatsApp */}
        <span className="relative ml-0.5 flex h-2.5 w-2.5 flex-none">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
      </a>
    </motion.div>
  );
}
