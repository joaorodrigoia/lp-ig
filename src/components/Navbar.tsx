import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '@/data/content';
import { WhatsAppButton } from './WhatsAppButton';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-subtle/70'
          : 'bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-8"
        aria-label="Navegação principal"
      >
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-white">
            João Rodrigo
          </span>
          <span className="text-gold font-serif text-lg md:text-xl">| IA</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-white/80 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <WhatsAppButton size="sm" label="WhatsApp" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-subtle text-white/90"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-subtle bg-bg/95 backdrop-blur-md">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-white/90 transition-colors hover:bg-gold/10 hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <WhatsAppButton size="md" label="Falar no WhatsApp" className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
