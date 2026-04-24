import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { processSteps } from '@/data/content';
import { WhatsAppButton } from './WhatsAppButton';

export function Process() {
  return (
    <SectionWrapper id="processo" className="bg-bg overflow-hidden">
      <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
        <p className="mb-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
          Como trabalhamos juntos
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
          Do primeiro <span className="text-gradient-gold">oi</span> à escala —
          em quatro passos.
        </h2>
      </div>

      <div className="grid gap-0 md:grid-cols-4">
        {processSteps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col md:items-center md:text-center px-0 py-8 md:py-0 md:px-6 border-l border-subtle first:border-l-0 md:border-l md:border-t-0"
          >
            {/* Connector dot */}
            <div className="absolute -left-[5px] top-8 hidden md:flex h-2.5 w-2.5 rounded-full bg-bg border-2 border-gold/60 group-first:left-0 group-first:-translate-x-0 md:static md:mb-5 md:h-3 md:w-3" />

            {/* Giant number */}
            <span
              aria-hidden
              className="font-serif font-bold leading-none text-gradient-gold mb-4 block"
              style={{ fontSize: 'clamp(4rem, 10vw, 6.5rem)' }}
            >
              {step.number}
            </span>

            {/* Gold line */}
            <div className="mb-5 h-px w-10 md:w-full bg-gradient-to-r from-gold/60 to-transparent md:from-transparent md:via-gold/50 md:to-transparent" />

            <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mb-2">
              {step.title}
            </h3>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-14 md:mt-20 flex flex-col items-center gap-3 text-center"
      >
        <p className="text-muted text-sm md:text-base max-w-sm">
          Tudo começa com uma conversa de 15 minutos.
        </p>
        <WhatsAppButton label="Começar agora" size="lg" />
      </motion.div>
    </SectionWrapper>
  );
}
