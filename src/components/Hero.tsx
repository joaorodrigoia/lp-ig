import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { LOCATION } from '@/data/content';

const HEADLINE_1 = 'Mais que tráfego pago:';
const HEADLINE_2 = 'sistemas de aquisição com IA';
const HEADLINE_3 = 'pro seu negócio crescer no automático.';

function WordReveal({ text, delay = 0, gold = false }: { text: string; delay?: number; gold?: boolean }) {
  const words = text.split(' ');
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.09,
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
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-28 overflow-hidden"
    >
      {/* Background atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-15%] right-[-5%] h-[600px] w-[600px] rounded-full bg-gold/[0.14] blur-[140px] animate-pulse-soft" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[450px] w-[450px] rounded-full bg-gold-dark/[0.18] blur-[140px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse at 70% 40%, black 30%, transparent 70%)',
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — text */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1.5 text-xs md:text-sm text-gold/90 backdrop-blur-sm"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>{LOCATION}</span>
          </motion.div>

          <h1 className="font-serif text-[2.5rem] leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold">
            <span className="text-white/90">
              <WordReveal text={HEADLINE_1} delay={0.1} />
            </span>
            {' '}
            <span>
              <WordReveal text={HEADLINE_2} delay={0.4} gold />
            </span>
            {' '}
            <span className="text-white/90">
              <WordReveal text={HEADLINE_3} delay={0.85} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="max-w-xl text-base md:text-lg text-muted leading-relaxed"
          >
            Uno consultoria em IA, agentes no WhatsApp, tráfego pago e
            desenvolvimento de sistemas sob medida para construir máquinas de
            venda que rodam 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.55 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-2"
          >
            <WhatsAppButton size="lg" label="Falar no WhatsApp" />
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-base md:text-lg font-medium text-gold/90 transition-all duration-200 hover:bg-gold/5 hover:border-gold hover:scale-[1.02] active:scale-[0.97]"
            >
              Ver Serviços
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </motion.div>
        </div>

        {/* Right — floating visual */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="relative hidden lg:flex items-center justify-center"
          aria-hidden
        >
          <div className="relative w-full max-w-sm mx-auto">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl animate-pulse-soft" />

            {/* Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-gold/20"
            />
            {/* Ring 2 — counter-rotate */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-dashed border-gold/15"
            />
            {/* Ring 3 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-16 rounded-full border border-gold/10"
            />

            {/* Center card */}
            <div className="relative z-10 mx-auto w-[280px] h-[280px] flex items-center justify-center">
              <div className="rounded-2xl bg-bg-secondary/80 backdrop-blur-xl border border-gold/30 p-6 shadow-gold-glow w-full">
                {/* Pseudo-dashboard */}
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-muted uppercase tracking-widest">Sistema ativo</p>
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30" />
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Leads hoje', value: '+47', bar: '78%' },
                    { label: 'CAC', value: 'R$ 18', bar: '45%' },
                    { label: 'Conversão', value: '12.4%', bar: '62%' },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted">{row.label}</span>
                        <span className="text-gold font-semibold">{row.value}</span>
                      </div>
                      <div className="h-1 rounded-full bg-subtle overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: row.bar }}
                          transition={{ duration: 1.4, delay: 1.8, ease: 'easeOut' }}
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
