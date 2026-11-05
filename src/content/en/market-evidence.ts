import type { MarketEvidence } from '@/content/market-evidence.schema';

export const workflowEvidence = {
  id: 'workflow-evidence',
  eyebrow: 'Research on AI adoption',
  title: 'Workflow redesign is associated with value',
  population:
    'Share of leaders reporting AI value for their organisation at the initial adoption stage · February–April 2026',
  bars: [
    { label: 'Workflows left unchanged', value: 6 },
    { label: 'Workflows redesigned', value: 32 },
  ],
  source: {
    label: 'McKinsey · 8 July 2026',
    href: 'https://www.mckinsey.com/capabilities/people-and-organization/our-insights/from-adoption-to-impact-three-horizons-of-ai-transformation',
  },
  limitation:
    'Leader responses; association between workflow redesign and reported AI value.',
  implication:
    'Choose AI together with the changes to the workflow. We help assess both before you invest.',
  reference: {
    label: 'Research behind the approach',
    href: 'https://docs.veracto.ai/en/consulting/ai-adoption-evidence/',
  },
} satisfies MarketEvidence;

export const businessEvidence = {
  id: 'business-evidence',
  eyebrow: 'Personal and organisational results',
  title: 'Personal gains are more visible than business impact',
  population:
    'Share of respondents in McKinsey’s global survey · May–June 2026',
  bars: [
    { label: 'Report improved personal productivity', value: 80 },
    {
      label: 'Report a positive AI contribution to enterprise EBIT',
      value: 37,
    },
  ],
  source: {
    label: 'McKinsey · 25 August 2026',
    href: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  limitation:
    'Separate survey questions: personal productivity and enterprise EBIT (earnings before interest and taxes).',
  implication:
    'We assess business value and the full cost of adoption to help you decide where to invest.',
  reference: {
    label: 'More about the research',
    href: 'https://docs.veracto.ai/en/consulting/ai-adoption-evidence/',
  },
} satisfies MarketEvidence;
