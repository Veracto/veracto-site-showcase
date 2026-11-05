import type { StaticVisuals } from '@/content/static-visuals.schema';
import { hero } from '@/content/en/home/hero';
import { organisationsPage } from '@/content/en/organisations';
import { researchersPage } from '@/content/en/researchers';

export const staticVisuals = {
  title: 'Paper, process and evidence.',
  intro:
    'Three static illustration studies, shown with the current website copy. A visual direction to review before replacing the animated diagrams.',
  backgroundStatus:
    'Background removal is pending: the same-model edits returned an opaque checkerboard. These studies currently show the original light background.',
  navigation: 'Static illustration studies',
  back: 'All studies',
  language: 'RU',
  proof: 'Inspect on a forest background',
  studies: [
    {
      id: 'process',
      label: '01 / From a task to independent work',
      heading: hero.title,
      description: hero.description,
      alt: 'A folder of working material, a comparison frame and an open working instruction connected by green paper ribbons.',
      steps: ['Your task', 'Compare ways to work', 'A repeatable process'],
      note: 'A tactile overview for the home page. The instruction represents the handoff; it does not imply that independent use has already been verified.',
    },
    {
      id: 'organisation',
      label: '02 / Compare three options',
      heading: organisationsPage.introduction.title,
      description: organisationsPage.introduction.description,
      alt: 'Three equal green document trays, each connecting working material to a record of the result.',
      steps: [
        'Current process',
        'Improvement without AI',
        'The same improvement with AI',
      ],
      note: 'Equal visual weight avoids suggesting an AI winner. The two improved options still need a clearer visual distinction in a final version.',
    },
    {
      id: 'research',
      label: '03 / Research materials',
      heading: researchersPage.introduction.title,
      description: researchersPage.introduction.description,
      alt: 'A source book and an analysis grid connect to a manuscript with a coral margin annotation.',
      steps: ['Sources', 'Analysis', 'Writing and review'],
      note: 'A quieter paper collage for the research route. The connecting lines show relationships between materials, not an automated scientific conclusion.',
    },
  ],
} satisfies StaticVisuals;
