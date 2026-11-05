import type { StoryContent } from '@/content/stories.schema';
export const homeStory = {
  id: 'home',
  placement: 'Home / introductory story',
  title: 'From scattered material to a practice.',
  description:
    'Tools are only part of the change. Work, review and reusable instructions must connect.',
  objects: [
    'Authorised material',
    'Work and human review',
    'Reusable instruction',
  ],
  beats: [
    {
      title: 'Start with the work',
      description:
        'Authorised documents are the input, not a fictional AI dashboard.',
    },
    {
      title: 'Make the task explicit',
      description:
        'The working sheet gives the task an input, expected output and review point.',
    },
    {
      title: 'Examine the result',
      description:
        'A person reviews what the tool helped prepare. Inspection is not automatic approval.',
    },
    {
      title: 'Record the correction',
      description:
        'A specific note becomes part of how the task should be done next time.',
    },
    {
      title: 'Leave instructions',
      description:
        'The client retains a documented sequence and explicit quality criteria.',
    },
    {
      title: 'Prepare independent use',
      description:
        'A reusable instruction is ready for a new run. Independent use still needs to be observed.',
    },
  ],
} satisfies StoryContent;
