import { Instagram, MessageCircle } from 'lucide-react';
import { IG_URL, IG_HANDLE, WHATSAPP_URL, WHATSAPP_NUMBER } from '@/data/content';

export function Footer() {
  return (
    <footer className="relative border-t border-subtle bg-bg py-12 pb-28 md:py-16 md:pb-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold text-white">
                João Rodrigo
              </span>
              <span className="text-gold font-serif text-lg">| IA</span>
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Inteligência artificial aplicada ao seu negócio. Consultoria, agentes,
              tráfego, sites e sistemas que rodam todo dia.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Contato</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-gold"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              WhatsApp ({formatPhone(WHATSAPP_NUMBER)})
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4 text-gold" />
              Instagram ({IG_HANDLE})
            </a>
          </div>
        </div>

        <div className="hairline mt-10 mb-6" />

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-muted">
          <p>© 2026 João Rodrigo | IA. Maceió/AL.</p>
          <p>Feito com estratégia, IA e atenção ao detalhe.</p>
        </div>
      </div>
    </footer>
  );
}

function formatPhone(num: string) {
  // 5582981919663 → +55 82 98191-9663
  const match = num.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
  if (!match) return num;
  return `+${match[1]} ${match[2]} ${match[3]}-${match[4]}`;
}
