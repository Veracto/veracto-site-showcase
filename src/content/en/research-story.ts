import type { StoryContent } from '@/content/stories.schema';
export const researchStory = {
  id: 'research',
  placement: 'Researchers / working example',
  title: 'A claim you can trace.',
  description:
    'A draft overstates its source. The researcher compares, returns and narrows the claim.',
  objects: ['Source A', 'Unreviewed draft', 'Revised entry + limitation'],
  beats: [
    {
      title: 'Read the source',
      description:
        'Source A: “An association was observed. A causal effect was not tested.”',
    },
    {
      title: 'Extract, not accept',
      description:
        'The extract reaches an AI draft. “The intervention caused the change” is still unreviewed.',
    },
    {
      title: 'Compare the wording',
      description:
        'The researcher checks “caused” against “not tested”. A citation alone does not justify the stronger claim.',
    },
    {
      title: 'Return a specific issue',
      description:
        'The review note says: the source does not establish causality. Revise the wording and retain the limitation.',
    },
    {
      title: 'Keep the limitation',
      description:
        'Revised entry: “An association was observed”. Limitation: “Causality not established”. The original draft remains a separate record.',
    },
    {
      title: 'Retain the reference',
      description:
        'The corrected entry links back to Source A. Source B remains unreviewed: the next material needs its own check.',
    },
  ],
} satisfies StoryContent;
