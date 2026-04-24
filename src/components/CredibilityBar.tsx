import { Bot, Zap, Target, Code2, LineChart, Brain, MessageSquareText } from 'lucide-react';

const items = [
  { icon: Bot, label: 'Agentes de IA' },
  { icon: Zap, label: 'Automações N8n' },
  { icon: Target, label: 'Tráfego Pago' },
  { icon: Code2, label: 'Sites & LPs' },
  { icon: LineChart, label: 'Data Tracking' },
  { icon: Brain, label: 'Consultoria em IA' },
  { icon: MessageSquareText, label: 'WhatsApp 24/7' },
];

export function CredibilityBar() {
  const doubled = [...items, ...items];

  return (
    <section
      className="relative border-y border-subtle bg-bg-secondary/40 py-5 overflow-hidden"
      aria-label="Especialidades"
    >
      {/* Fade masks nas bordas */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 inset-y-0 w-20 z-10 bg-gradient-to-r from-bg-secondary/80 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 inset-y-0 w-20 z-10 bg-gradient-to-l from-bg-secondary/80 to-transparent"
      />

      <div className="marquee-track">
        <ul
          className="flex animate-marquee whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {doubled.map(({ icon: Icon, label }, idx) => (
            <li
              key={idx}
              className="inline-flex items-center gap-2.5 px-8 text-sm md:text-base"
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5 text-gold flex-none" aria-hidden />
              <span className="text-white/75">{label}</span>
              <span aria-hidden className="ml-6 h-1 w-1 rounded-full bg-gold/40 flex-none" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
