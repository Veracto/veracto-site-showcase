import type { StoryContent } from '@/content/stories.schema';
export const teamStory = {
  id: 'team',
  placement: 'Research teams / shared practice',
  title: 'A handoff that carries the context.',
  description:
    'A shared protocol becomes useful when a colleague can find and resolve the missing context.',
  objects: ['Preparer', 'Shared protocol', 'Reviewer / second participant'],
  beats: [
    {
      title: 'Agree the protocol',
      description:
        'A shared extraction template names the input, fields and scientific responsibilities.',
    },
    {
      title: 'Pass the material',
      description:
        'The preparer adds an entry to the shared record. A source reference is missing.',
    },
    {
      title: 'Review the handoff',
      description:
        'The reviewer inspects the entry, not just the existence of a filled template.',
    },
    {
      title: 'Return the gap',
      description:
        'The reviewer returns a request for the source passage. Responsibility returns to the preparer.',
    },
    {
      title: 'Update the shared rule',
      description:
        'The preparer supplies the reference and adds a source-location rule to the protocol.',
    },
    {
      title: 'Try another handoff',
      description:
        'A colleague starts a new entry with the revised protocol. Its quality still needs review.',
    },
  ],
} satisfies StoryContent;
