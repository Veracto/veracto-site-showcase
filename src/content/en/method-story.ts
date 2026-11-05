import type { StoryContent } from '@/content/stories.schema';
export const methodStory = {
  id: 'method',
  placement: 'Approach / six decisions',
  title: 'Progress includes the option to stop.',
  description:
    'Six inspectable work objects, with an exit before more technology is added.',
  objects: [
    '1 → 2 → 3: diagnose, compare, design',
    '6 ← 5 ← 4: decide, independent use, test',
  ],
  beats: [
    {
      title: 'Understand the work',
      description: 'Map the task, participants, constraints and baseline.',
    },
    {
      title: 'Compare alternatives',
      description:
        'Compare AI with a simpler change or stopping. The side branch remains a real option.',
    },
    {
      title: 'Design a bounded workflow',
      description:
        'Only where justified: define tools, roles, inputs and review rules.',
    },
    {
      title: 'Test real work',
      description:
        'Run authorised material and record issues. This does not guarantee the design works.',
    },
    {
      title: 'Observe independent use',
      description:
        'The client tries the instructions without step-by-step direction. Record where help remains necessary.',
    },
    {
      title: 'Record the next decision',
      description:
        'Adopt, revise, extend the test or stop, keeping the evidence and its limits together.',
    },
  ],
} satisfies StoryContent;
