import type { StoryContent } from '@/content/stories.schema';
export const handoverStory = {
  id: 'handover',
  placement: 'Approach / what stays with the client',
  title: 'Instructions that survive an exception.',
  description:
    'The handover kit earns its place when the client encounters something the normal path does not cover.',
  objects: [
    'Instructions / recovery rules',
    'Client’s task / exception',
    'Responsible owner / new attempt',
  ],
  beats: [
    {
      title: 'Open the working kit',
      description:
        'The folder contains instructions, quality criteria and responsibility rules.',
    },
    {
      title: 'Try the workflow',
      description: 'The client uses the instructions on one bounded task.',
    },
    {
      title: 'Encounter an exception',
      description:
        'An unresolved issue is recorded. It is not hidden behind a success indicator.',
    },
    {
      title: 'Find the recovery rule',
      description:
        'The instruction points back to a recovery step instead of another improvised prompt.',
    },
    {
      title: 'Locate the responsible owner',
      description:
        'A named role receives the exception when the client cannot resolve it within the agreed boundary.',
    },
    {
      title: 'Record the next attempt',
      description:
        'A new run can begin with the clarified rule. Its outcome remains open.',
    },
  ],
} satisfies StoryContent;
