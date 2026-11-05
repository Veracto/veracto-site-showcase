import type { StoryContent } from '@/content/stories.schema';
export const organisationStory = {
  id: 'organisation',
  placement: 'Organisations / pilot decision',
  title: 'A forecast is not an observation.',
  description:
    'Test one reporting workflow before deciding what deserves wider adoption.',
  objects: [
    'Forecast / assumptions',
    'Bounded pilot',
    'Observations → four decisions',
  ],
  beats: [
    {
      title: 'Name the assumptions',
      description:
        'Forecast: preparation time, review effort, licences and setup are assumptions, not measured savings.',
    },
    {
      title: 'Bound the test',
      description:
        'The bracket encloses one reporting process, approved inputs and agreed review criteria.',
    },
    {
      title: 'Run real material',
      description:
        'Participants prepare and review a report. The illustration represents the test, not its outcome.',
    },
    {
      title: 'Record observations',
      description:
        'A separate record receives observations. It does not overwrite the forecast assumptions.',
    },
    {
      title: 'Keep the unknowns',
      description:
        'The note holds limitations and remaining uncertainty beside the observed record.',
    },
    {
      title: 'Choose the next step',
      description:
        'Four equal options: implement, revise, test further or stop. No branch is chosen automatically.',
    },
  ],
} satisfies StoryContent;
