import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { WhatsAppButton } from './WhatsAppButton';

const JOAO_PHOTO_URL = '/joao.jpg';

export function About() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <SectionWrapper id="sobre" className="bg-bg-secondary/30">
      <div className="grid gap-10 md:gap-16 md:grid-cols-[0.8fr_1.2fr] items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full bg-gold-gradient opacity-25 blur-2xl"
            />
            <div className="relative flex h-56 w-56 md:h-72 md:w-72 items-center justify-center overflow-hidden rounded-full border-2 border-gold/60 bg-bg-secondary shadow-gold-glow">
              {!imgFailed ? (
                <img
                  src={JOAO_PHOTO_URL}
                  alt="João Rodrigo"
                  className="h-full w-full object-cover"
                  onError={() => setImgFailed(true)}
                  loading="lazy"
                />
              ) : (
                <span className="font-serif text-7xl md:text-8xl font-bold text-gradient-gold">
                  JR
                </span>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
            Quem é João Rodrigo
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-5">
            Especialista em <span className="text-gradient-gold">IA aplicada a negócios</span>.
          </h2>
          <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed">
            <p>
              21 anos, de Maceió/AL. Comecei como gestor de tráfego e hoje construo
              sistemas completos de aquisição que unem mídia paga, IA e desenvolvimento.
            </p>
            <p>
              Atendo empresários que querem mais que campanha — querem máquina de
              crescimento rodando todo dia, sem depender de freelancer que some.
            </p>
          </div>
          <div className="mt-8">
            <WhatsAppButton label="Quero conversar" size="lg" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
