import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { clientLogos, testimonials } from '@/data/content';
import { Quote } from 'lucide-react';

export function SocialProof() {
  return (
    <SectionWrapper className="bg-bg-secondary/30">
      <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14">
        <p className="mb-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
          Quem já confiou
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
          Negócios que já rodam com <span className="text-gradient-gold">sistemas que construí.</span>
        </h2>
        <p className="mt-4 text-muted text-base md:text-lg">
          Fotografia, varejo, educação e serviços — cada um com uma operação diferente,
          todos com a mesma lógica por trás.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-3 lg:grid-cols-5 mb-16 md:mb-20">
        {clientLogos.map((logo) => (
          <li
            key={logo}
            className="flex h-16 md:h-20 items-center justify-center rounded-xl border border-subtle bg-bg-secondary/60 text-xs md:text-sm text-muted"
          >
            {logo}
          </li>
        ))}
      </ul>

      <div className="grid gap-5 md:gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.figure
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative flex flex-col gap-5 rounded-2xl border border-subtle bg-bg p-6 md:p-7"
          >
            <Quote className="h-6 w-6 text-gold/70" aria-hidden />
            <blockquote className="text-white/90 leading-relaxed text-[15px] md:text-base">
              “{t.text}”
            </blockquote>
            <figcaption className="flex items-center gap-3 pt-2 border-t border-subtle">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold-gradient font-serif text-base font-bold text-bg">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </SectionWrapper>
  );
}
