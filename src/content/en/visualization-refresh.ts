import { practiceCandidates } from '@/content/en/visualization-refresh/practice';
import { decisionsCandidates } from '@/content/en/visualization-refresh/decisions';
import type { VisualizationRefresh } from '@/content/visualization-refresh.schema';
export const visualizationRefreshNavigation = 'Diagram review · 01 Oct';
export const visualizationRefresh = {
  title: 'Show the work. Make the decision visible.',
  intro:
    'Six proposed revisions for the updated Veracto site. Keep concrete working material, make the comparison explicit and show how the client continues independently.',
  status: 'Design review · 01 October 2026',
  disclosure:
    'Illustrative proposals for discussion. No client result, measured saving or adoption decision is implied. The current website diagrams remain unchanged.',
  current: 'Compare with the current diagram',
  context: 'Read the page',
  back: 'All studies',
  language: 'RU',
  candidate: 'Proposed direction',
  assessment: 'What needs attention',
  proposal: 'What I would change',
  candidates: [...practiceCandidates, ...decisionsCandidates],
} satisfies VisualizationRefresh;
