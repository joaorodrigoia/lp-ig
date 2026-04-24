import { motion } from 'framer-motion';
import { WhatsAppButton } from './WhatsAppButton';

export function FinalCTA() {
  return (
    <section id="contato" className="relative py-24 md:py-36 overflow-hidden bg-bg">
      {/* Atmospheric glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.12] blur-[160px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.09] blur-[80px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold"
          >
            Vamos construir o seu
          </motion.p>

          <h2 className="font-serif font-bold leading-[1.02] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)' }}
          >
            Pronto pra montar seu{' '}
            <span className="text-gradient-gold italic">
              sistema de aquisição?
            </span>
          </h2>

          {/* Divider ornament */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold/60 flex-none" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <p className="max-w-xl text-muted text-base md:text-lg leading-relaxed">
            Conversa rápida no WhatsApp, sem compromisso.{' '}
            <span className="text-white/90">Em 15 minutos</span> eu te mostro o que
            dá pra fazer no seu negócio.
          </p>

          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <WhatsAppButton label="Chamar no WhatsApp agora" size="lg" />
          </motion.div>

          {/* Social proof micro */}
          <p className="text-xs text-muted/70">
            Respondo em minutos · Sem enrolação · Sem pitch de venda forçado
          </p>
        </motion.div>
      </div>

      {/* Gold hairline top */}
      <div aria-hidden className="absolute inset-x-0 top-0 hairline" />
    </section>
  );
}
