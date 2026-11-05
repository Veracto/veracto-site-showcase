import type { MarketEvidence } from '@/content/market-evidence.schema';

export const workflowEvidence = {
  id: 'workflow-evidence',
  eyebrow: 'Исследования внедрения ИИ',
  title: 'Перестройка процесса связана с пользой для организации',
  population:
    'Доля руководителей, сообщивших о пользе ИИ для организации на начальной стадии внедрения · февраль–апрель 2026',
  bars: [
    { label: 'Процессы оставили прежними', value: 6 },
    { label: 'Процессы переработали', value: 32 },
  ],
  source: {
    label: 'McKinsey · 8 июля 2026',
    href: 'https://www.mckinsey.com/capabilities/people-and-organization/our-insights/from-adoption-to-impact-three-horizons-of-ai-transformation',
  },
  limitation:
    'Ответы руководителей; связь между перестройкой процессов и заявленной пользой ИИ.',
  implication:
    'Чтобы оценить внедрение ИИ, нужно понять, как изменится процесс. Помогаем разобраться в этом до вложений.',
  reference: {
    label: 'Исследования, на которых основан подход',
    href: 'https://docs.veracto.ai/ru/consulting/ai-adoption-evidence/',
  },
} satisfies MarketEvidence;

export const businessEvidence = {
  id: 'business-evidence',
  eyebrow: 'Личный результат и результат организации',
  title: 'Личная польза заметнее эффекта для бизнеса',
  population: 'Доля респондентов глобального опроса McKinsey · май–июнь 2026',
  bars: [
    { label: 'Отмечают рост личной продуктивности', value: 80 },
    { label: 'Отмечают положительный вклад ИИ в EBIT организации', value: 37 },
  ],
  source: {
    label: 'McKinsey · 25 августа 2026',
    href: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  limitation:
    'Разные вопросы опроса: личная продуктивность и EBIT компании — прибыль до процентов и налогов.',
  implication:
    'Оцениваем пользу для бизнеса и полные затраты на внедрение, чтобы выбрать оправданное решение.',
  reference: {
    label: 'Подробнее об исследованиях',
    href: 'https://docs.veracto.ai/ru/consulting/ai-adoption-evidence/',
  },
} satisfies MarketEvidence;
