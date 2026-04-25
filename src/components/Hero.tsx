import { useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  Target,
  Bot,
  Zap,
  BarChart3,
  MessageSquareText,
  Code2,
  Brain,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { WhatsAppButton } from './WhatsAppButton';
import { LOCATION } from '@/data/content';

/* ─── Word-by-word reveal ─── */
function WordReveal({
  text,
  delay = 0,
  gold = false,
}: {
  text: string;
  delay?: number;
  gold?: boolean;
}) {
  return (
    <span className="inline">
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.45, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className={cn('inline-block mr-[0.22em]', gold && 'text-gradient-gold')}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Tech tile config ─── */
type Depth = 1 | 2 | 3; // 1 = far/small, 3 = near/large

type TileConfig = {
  icon: LucideIcon;
  label: string;
  sub: string;
  depth: Depth;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  rotate: number;
  delay: number;
};

const TILES: TileConfig[] = [
  { icon: Code2,           label: 'Sites & LPs',    sub: 'Alta conversão',       depth: 3, top: '6%',   left: '4%',   rotate: -4, delay: 0.25 },
  { icon: Target,          label: 'Meta Ads',        sub: 'CAC otimizado',        depth: 1, top: '4%',   right: '6%',  rotate: -2, delay: 0.05 },
  { icon: Bot,             label: 'Agente de IA',    sub: '24/7 no WhatsApp',     depth: 3, top: '26%',  left: '12%',  rotate: 3,  delay: 0.20 },
  { icon: Brain,           label: 'Consultoria IA',  sub: 'Processos mapeados',   depth: 2, top: '30%',  right: '4%',  rotate: 2,  delay: 0.40 },
  { icon: Zap,             label: 'N8n Automação',   sub: 'Fluxos inteligentes',  depth: 2, top: '52%',  right: '2%',  rotate: 3,  delay: 0.15 },
  { icon: TrendingUp,      label: 'Google Ads',      sub: 'Escala real',          depth: 1, top: '55%',  left: '6%',   rotate: -2, delay: 0.45 },
  { icon: BarChart3,       label: 'Dashboard IA',    sub: 'Dados em tempo real',  depth: 1, bottom: '22%', right: '12%', rotate: -3, delay: 0.35 },
  { icon: MessageSquareText, label: 'WhatsApp Bot',  sub: 'Lead qualificado',     depth: 2, bottom: '8%', left: '4%',  rotate: 1,  delay: 0.55 },
];

/* ─── Floating tile component ─── */
const DEPTH_SCALE: Record<Depth, string> = {
  1: 'scale-[0.85] opacity-60',
  2: 'scale-95 opacity-80',
  3: 'scale-100 opacity-100',
};

const DEPTH_GLOW: Record<Depth, string> = {
  1: '',
  2: 'shadow-[0_4px_24px_rgba(212,175,55,0.08)]',
  3: 'shadow-gold-glow',
};

function FloatingTile({
  config,
  springX,
  springY,
}: {
  config: TileConfig;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}) {
  const factor = config.depth * 14;
  const x = useTransform(springX, (v) => v * factor);
  const y = useTransform(springY, (v) => v * factor * 0.55);
  const Icon = config.icon;

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: config.top,
        right: config.right,
        bottom: config.bottom,
        left: config.left,
        rotate: config.rotate,
        x,
        y,
      }}
      initial={{ opacity: 0, scale: 0.65, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ delay: config.delay + 1.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          'flex flex-col gap-2 rounded-xl border border-gold/25 bg-bg/20 backdrop-blur-lg p-3.5 cursor-default select-none',
          'transition-all duration-300 hover:border-gold/50 hover:bg-bg/35 hover:shadow-gold-glow',
          DEPTH_SCALE[config.depth],
          DEPTH_GLOW[config.depth],
        )}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex-none rounded-lg bg-gold/15 p-1.5 ring-1 ring-gold/20">
            <Icon className="h-4 w-4 text-gold" aria-hidden />
          </div>
          <span className="text-xs font-semibold text-white whitespace-nowrap">{config.label}</span>
        </div>
        <span className="text-[10px] text-muted/90 leading-tight">{config.sub}</span>
      </div>
    </motion.div>
  );
}

/* ─── Metrics for mobile compact card ─── */
const METRICS = [
  { label: 'Leads hoje', value: '+47' },
  { label: 'CAC', value: 'R$18' },
  { label: 'Conversão', value: '12.4%' },
];
const BAR_WIDTHS = ['78%', '45%', '62%'];

/* ─── Hero ─── */
export function Hero() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 50, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 50, damping: 20 });

  // Subtle photo parallax
  const photoX = useTransform(springX, (v) => v * 12);
  const photoY = useTransform(springY, (v) => v * 7);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [rawX, rawY]);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-20 pb-8 md:pt-28 overflow-hidden"
    >
      {/* ── Photo background ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src="/joao.jpg"
          alt=""
          aria-hidden
          style={{ x: photoX, y: photoY }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            scale: { duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
          }}
          className="absolute inset-0 h-[110%] w-full object-cover object-[62%_top]"
        />

        {/* Frosted dark layer — full on mobile, gradient on desktop */}
        <div className="absolute inset-0 bg-bg/82 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-bg/97 via-bg/82 to-bg/35" />

        {/* Bottom vignette — blends into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

        {/* Frosted glass texture overlay */}
        <div className="absolute inset-0 backdrop-blur-[1.5px] bg-bg/10" />

        {/* Gold atmosphere */}
        <div className="absolute top-[-10%] right-[10%] h-[400px] w-[400px] rounded-full bg-gold/[0.07] blur-[120px] pointer-events-none" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Left — text */}
        <div className="flex flex-col gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-bg/60 backdrop-blur-sm px-3.5 py-1.5 text-xs md:text-sm text-gold/90"
          >
            <MapPin className="h-3.5 w-3.5 flex-none" />
            <span>{LOCATION}</span>
          </motion.div>

          <h1
            className="font-serif font-bold leading-[1.06] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 7.5vw, 4.5rem)' }}
          >
            <span className="text-white/90">
              <WordReveal text="Mais que tráfego pago:" delay={0.1} />
            </span>{' '}
            <span>
              <WordReveal text="sistemas de aquisição com IA" delay={0.38} gold />
            </span>{' '}
            <span className="text-white/90">
              <WordReveal text="pro seu negócio crescer no automático." delay={0.75} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-sm md:text-lg text-muted leading-relaxed max-w-lg"
          >
            Uno consultoria em IA, agentes no WhatsApp, tráfego pago e desenvolvimento
            de sistemas sob medida para construir máquinas de venda que rodam 24/7.
          </motion.p>

          {/* Mobile-only compact dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.2 }}
            className="lg:hidden"
            aria-hidden
          >
            <div className="rounded-2xl bg-bg/50 backdrop-blur-xl border border-gold/30 p-4 shadow-gold-glow">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] uppercase tracking-widest text-muted">Sistema ativo</p>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30" />
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {METRICS.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-semibold text-gradient-gold text-base">{m.value}</p>
                    <p className="text-muted text-[10px]">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                {METRICS.map((m, i) => (
                  <div key={m.label} className="h-1 rounded-full bg-subtle overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: BAR_WIDTHS[i] }}
                      transition={{ duration: 1.2, delay: 1.4 + i * 0.15, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gold-gradient"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.35 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <WhatsAppButton size="lg" label="Falar no WhatsApp" fullWidth className="sm:w-auto" />
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-base font-medium text-gold/90 transition-all duration-200 hover:bg-gold/5 hover:border-gold hover:scale-[1.02] active:scale-[0.97] backdrop-blur-sm bg-bg/20"
            >
              Ver Serviços
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Right — floating tech tiles (desktop only) */}
        <div
          className="relative hidden lg:block"
          style={{ minHeight: '580px' }}
          aria-hidden
        >
          {TILES.map((tile) => (
            <FloatingTile key={tile.label} config={tile} springX={springX} springY={springY} />
          ))}

          {/* Connecting network lines (decorative SVG) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker id="dot" viewBox="0 0 4 4" refX="2" refY="2" markerWidth="4" markerHeight="4">
                <circle cx="2" cy="2" r="1.5" fill="rgba(212,175,55,0.4)" />
              </marker>
            </defs>
            {/* Lines connecting tiles to simulate a "system" network */}
            <line x1="18%" y1="10%" x2="38%" y2="30%" stroke="rgba(212,175,55,0.12)" strokeWidth="1" strokeDasharray="5 8" markerEnd="url(#dot)" />
            <line x1="38%" y1="30%" x2="62%" y2="34%" stroke="rgba(212,175,55,0.10)" strokeWidth="1" strokeDasharray="5 8" markerEnd="url(#dot)" />
            <line x1="62%" y1="34%" x2="76%" y2="54%" stroke="rgba(212,175,55,0.12)" strokeWidth="1" strokeDasharray="5 8" markerEnd="url(#dot)" />
            <line x1="38%" y1="30%" x2="26%" y2="56%" stroke="rgba(212,175,55,0.09)" strokeWidth="1" strokeDasharray="5 8" markerEnd="url(#dot)" />
            <line x1="26%" y1="56%" x2="66%" y2="76%" stroke="rgba(212,175,55,0.11)" strokeWidth="1" strokeDasharray="5 8" markerEnd="url(#dot)" />
            <line x1="18%" y1="10%" x2="84%" y2="7%"  stroke="rgba(212,175,55,0.08)" strokeWidth="1" strokeDasharray="5 8" />
          </svg>
        </div>
      </div>
    </section>
  );
}
