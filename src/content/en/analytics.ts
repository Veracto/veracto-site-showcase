import type { AnalyticsCopy } from '@/content/analytics.schema';

export const analyticsCopy = {
  title: 'Cookies and analytics',
  description:
    'Statistics, heatmaps and sampled recordings help us improve the site. Input fields are masked. You can decline or change your choice later.',
  allow: 'Allow',
  decline: 'Decline',
  settings: 'Analytics preferences',
  excluded: 'This browser is excluded from analytics.',
  privacyLabel: 'Data use',
  privacyHref: '/privacy/',
} satisfies AnalyticsCopy;
