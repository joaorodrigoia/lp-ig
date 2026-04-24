import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { LOCATION } from '@/data/content';

const HEADLINE_1 = 'Mais que tráfego pago:';
const HEADLINE_2 = 'sistemas de aquisição com IA';
const HEADLINE_3 = 'pro seu negócio crescer no automático.';

const METRICS = [
  { label: 'Leads hoje', value: '+47' },
  { label: 'CAC', value: 'R$18' },
  { label: 'Conversão', value: '12.4%' },
];

const BAR_WIDTHS = ['78%', '45%', '62%'];

function WordReveal({ text, delay = 0, gold = false }: { text: string; delay?: number; gold?: boolean }) {
  const words = text.split(' ');
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.45,
            delay: delay + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`inline-block mr-[0.22em] ${gold ? 'text-gradient-gold' : ''}`}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 28);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 18);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-20 pb-8 md:pt-28 md:pb-16 overflow-hidden"
    >
      {/* Background atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-15%] right-[-5%] h-[500px] w-[500px] rounded-full bg-gold/[0.14] blur-[130px] animate-pulse-soft" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-gold-dark/[0.18] blur-[130px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at 70% 40%, black 30%, transparent 70%)',
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

        {/* Left — text */}
        <div className="flex flex-col gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1.5 text-xs md:text-sm text-gold/90 backdrop-blur-sm"
          >
            <MapPin className="h-3.5 w-3.5 flex-none" />
            <span>{LOCATION}</span>
          </motion.div>

          <h1 className="font-serif font-bold leading-[1.06] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}
          >
            <span className="text-white/90">
              <WordReveal text={HEADLINE_1} delay={0.1} />
            </span>
            {' '}
            <span>
              <WordReveal text={HEADLINE_2} delay={0.38} gold />
            </span>
            {' '}
            <span className="text-white/90">
              <WordReveal text={HEADLINE_3} delay={0.75} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-sm md:text-lg text-muted leading-relaxed max-w-xl"
          >
            Uno consultoria em IA, agentes no WhatsApp, tráfego pago e desenvolvimento
            de sistemas sob medida para construir máquinas de venda que rodam 24/7.
          </motion.p>

          {/* Mobile-only compact dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.2 }}
            className="lg:hidden"
            aria-hidden
          >
            <div className="rounded-2xl bg-bg-secondary/80 backdrop-blur-xl border border-gold/30 p-4 shadow-gold-glow">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] uppercase tracking-widest text-muted">Sistema ativo</p>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30" />
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {METRICS.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-semibold text-gradient-gold text-base md:text-lg">{m.value}</p>
                    <p className="text-muted text-[10px] md:text-xs">{m.label}</p>
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.35 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <WhatsAppButton size="lg" label="Falar no WhatsApp" fullWidth className="sm:w-auto" />
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-base font-medium text-gold/90 transition-all duration-200 hover:bg-gold/5 hover:border-gold hover:scale-[1.02] active:scale-[0.97]"
            >
              Ver Serviços
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </motion.div>
        </div>

        {/* Right — desktop only floating dashboard */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="relative hidden lg:flex items-center justify-center"
          aria-hidden
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl animate-pulse-soft" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-gold/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-dashed border-gold/15"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-16 rounded-full border border-gold/10"
            />
            <div className="relative z-10 mx-auto w-[280px] h-[280px] flex items-center justify-center">
              <div className="rounded-2xl bg-bg-secondary/80 backdrop-blur-xl border border-gold/30 p-6 shadow-gold-glow w-full">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-muted uppercase tracking-widest">Sistema ativo</p>
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30" />
                </div>
                <div className="space-y-2.5">
                  {METRICS.map((row, i) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted">{row.label}</span>
                        <span className="text-gold font-semibold">{row.value}</span>
                      </div>
                      <div className="h-1 rounded-full bg-subtle overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: BAR_WIDTHS[i] }}
                          transition={{ duration: 1.4, delay: 1.8 + i * 0.15, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gold-gradient"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center font-serif text-sm text-gradient-gold">
                  24/7 · sem intervenção humana
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
