import { SectionWrapper } from './SectionWrapper';
import { ServiceCard } from './ServiceCard';
import { services } from '@/data/content';

export function Services() {
  return (
    <SectionWrapper id="servicos" className="bg-bg-secondary/30">
      <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
        <p className="mb-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
          O que eu construo pra você
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
          Seis frentes. <span className="text-gradient-gold">Um ecossistema.</span>
        </h2>
        <p className="mt-4 text-muted text-base md:text-lg">
          Cada serviço pode rodar sozinho, mas juntos formam a máquina de crescimento
          que seu negócio precisa.
        </p>
      </div>

      <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} {...service} index={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}
