import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { differentials } from '@/data/content';

export function Differentials() {
  return (
    <SectionWrapper className="bg-bg">
      <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
        <p className="mb-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
          Por que comigo é diferente
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
          Três coisas que <span className="text-gradient-gold">mudam o jogo.</span>
        </h2>
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-3">
        {differentials.map(({ number, title, description }, idx) => (
          <motion.div
            key={number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
            className="relative rounded-2xl border border-subtle bg-bg-secondary p-7 md:p-8"
          >
            <div className="absolute -top-4 left-6 rounded-full bg-bg px-3 py-1 font-serif text-sm text-gold ring-1 ring-gold/30">
              {number}
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-3">
              {title}
            </h3>
            <p className="text-muted leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
