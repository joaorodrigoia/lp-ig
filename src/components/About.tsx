import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { WhatsAppButton } from './WhatsAppButton';

const JOAO_PHOTO_URL = '/joao.jpg';

export function About() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <SectionWrapper id="sobre" className="bg-bg-secondary/30">
      <div className="grid gap-10 md:gap-16 md:grid-cols-[0.85fr_1.15fr] items-start">

        {/* Photo column */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-[280px] md:max-w-none">
            {/* Glow behind the photo */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-3xl bg-gold-gradient opacity-20 blur-2xl"
            />

            {/* Photo frame — portrait aspect ratio, no cropping */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-gold/40 shadow-gold-glow aspect-[3/4] w-full">
              {!imgFailed ? (
                <img
                  src={JOAO_PHOTO_URL}
                  alt="João Rodrigo — especialista em IA aplicada a negócios"
                  className="h-full w-full object-cover object-top"
                  onError={() => setImgFailed(true)}
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-bg-secondary">
                  <span className="font-serif font-bold text-gradient-gold"
                    style={{ fontSize: 'clamp(4rem, 15vw, 7rem)' }}
                  >
                    JR
                  </span>
                </div>
              )}

              {/* Subtle gold vignette on bottom */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg/60 to-transparent pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="flex flex-col justify-center gap-5">
          <div>
            <p className="mb-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
              Quem é João Rodrigo
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
              Especialista em{' '}
              <span className="text-gradient-gold">IA aplicada a negócios</span>.
            </h2>
          </div>

          <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed">
            <p>
              21 anos, de Maceió/AL. Comecei como gestor de tráfego e hoje construo
              sistemas completos de aquisição que unem mídia paga, IA e
              desenvolvimento.
            </p>
            <p>
              Atendo empresários que querem mais que campanha — querem máquina de
              crescimento rodando todo dia, sem depender de freelancer que some.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 py-5 border-y border-subtle">
            {[
              { value: '21', label: 'anos' },
              { value: '6+', label: 'serviços' },
              { value: '24/7', label: 'sistemas ativos' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-gradient-gold">
                  {s.value}
                </p>
                <p className="text-xs md:text-sm text-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <WhatsAppButton label="Quero conversar" size="lg" />
        </div>
      </div>
    </SectionWrapper>
  );
}
