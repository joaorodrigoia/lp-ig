import { SectionWrapper } from './SectionWrapper';
import { painPoints } from '@/data/content';
import { motion } from 'framer-motion';

export function PainPoints() {
  return (
    <SectionWrapper id="dores" className="bg-bg">
      <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
        <p className="mb-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
          Você reconhece isso?
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
          Sinais de que o seu negócio precisa <span className="text-gradient-gold">de sistema</span>
          , não de freelancer.
        </h2>
      </div>

      <ul className="grid gap-4 md:gap-5 sm:grid-cols-2">
        {painPoints.map(({ icon: Icon, title }, idx) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="flex items-start gap-4 rounded-xl border border-subtle bg-bg-secondary/50 p-5 md:p-6"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
              <Icon className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              {title}
            </p>
          </motion.li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
