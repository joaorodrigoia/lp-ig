import {
  Brain,
  GraduationCap,
  MessageSquareText,
  Target,
  LayoutTemplate,
  BarChart3,
  AlertTriangle,
  Cog,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const WHATSAPP_NUMBER = '5582981919663';
export const WHATSAPP_MSG =
  'Olá João, vim pelo Instagram e quero entender mais sobre seus serviços';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MSG,
)}`;

export const IG_URL = 'https://www.instagram.com/joaorodrigo.ia/';
export const IG_HANDLE = '@joaorodrigo.ia';

export const LOCATION = 'Maceió/AL • Atendimento Brasil';

export const nav = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Brain,
    title: 'Consultoria em IA',
    description:
      'Mapeio os processos do seu negócio e aponto exatamente onde a IA entra pra cortar custo, acelerar operação e gerar mais venda.',
  },
  {
    icon: GraduationCap,
    title: 'Mentoria 1x1',
    description:
      'Ensino IA aplicada de forma prática, sem enrolação. Você sai sabendo usar as ferramentas que mais importam hoje.',
  },
  {
    icon: MessageSquareText,
    title: 'Agentes de IA no WhatsApp',
    description:
      'Atendentes virtuais que qualificam lead, respondem cliente e vendem 24/7 direto no seu WhatsApp.',
  },
  {
    icon: Target,
    title: 'Tráfego Pago',
    description:
      'Opero suas campanhas de Meta e Google Ads com foco em CAC, LTV e escala real — não em métricas de vaidade.',
  },
  {
    icon: LayoutTemplate,
    title: 'Criação de Sites e LPs',
    description:
      'Sites e landing pages sob medida, otimizados para converter — construídos com IA + estratégia.',
  },
  {
    icon: BarChart3,
    title: 'Sistemas de IA',
    description:
      'Dashboards automáticos que substituem planilhas e hubs internos que destravam o trabalho do seu time.',
  },
];

export type PainPoint = {
  icon: LucideIcon;
  title: string;
};

export const painPoints: PainPoint[] = [
  {
    icon: AlertTriangle,
    title: 'Gestor que só sobe campanha e some quando o resultado cai.',
  },
  {
    icon: Cog,
    title: 'Processos manuais e planilhas que travam o crescimento do time.',
  },
  {
    icon: LayoutTemplate,
    title: 'Site bonito que não converte — ou nem tem site ainda.',
  },
  {
    icon: Wrench,
    title: 'Investimento em tráfego sem estratégia nem inteligência por trás.',
  },
];

export type Differential = {
  number: string;
  title: string;
  description: string;
};

export const differentials: Differential[] = [
  {
    number: '01',
    title: 'Stack Híbrida',
    description:
      'Não sou só gestor de tráfego nem só dev. Sou os dois — e isso muda tudo na velocidade de execução.',
  },
  {
    number: '02',
    title: 'Visão Sistêmica',
    description:
      'Não vendo serviço solto. Construo o ecossistema completo: anúncio → landing page → automação → IA → conversão.',
  },
  {
    number: '03',
    title: 'Tecnologia de Ponta',
    description:
      'Uso as mesmas ferramentas das maiores empresas do mundo (Claude, N8n, Meta API, Supabase) aplicadas no seu negócio.',
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Conversamos no WhatsApp, entendo seu cenário e objetivos.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Desenho o sistema sob medida pro seu negócio.',
  },
  {
    number: '03',
    title: 'Execução',
    description: 'Implemento tudo: campanhas, automações, IA e sistemas.',
  },
  {
    number: '04',
    title: 'Otimização',
    description: 'Monitoro, ajusto e escalo continuamente.',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Cliente Placeholder',
    role: 'Fotógrafo — Maceió/AL',
    text: 'Depoimento placeholder — substituir por texto real quando disponível. O João montou um sistema que triplicou minha agenda sem eu precisar responder no WhatsApp.',
    initials: 'CP',
  },
  {
    name: 'Cliente Placeholder',
    role: 'Varejo — Alagoas',
    text: 'Depoimento placeholder. Saímos de planilha manual pra dashboard automatizado em duas semanas. O time inteiro ganhou tempo.',
    initials: 'CP',
  },
  {
    name: 'Cliente Placeholder',
    role: 'Infoprodutor',
    text: 'Depoimento placeholder. O agente no WhatsApp qualifica lead melhor que eu fazia manualmente. E ainda roda 24h.',
    initials: 'CP',
  },
];

export const clientLogos = [
  'Logo Cliente 1',
  'Logo Cliente 2',
  'Logo Cliente 3',
  'Logo Cliente 4',
  'Logo Cliente 5',
];
