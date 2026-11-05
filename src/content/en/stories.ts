import type {
  StoryContent,
  StoryId,
  StoryLabels,
} from '@/content/stories.schema';
import { researchStory } from '@/content/en/research-story';
import { teamStory } from '@/content/en/team-story';
import { organisationStory } from '@/content/en/organisation-story';
import { homeStory } from '@/content/en/home-story';
import { methodStory } from '@/content/en/method-story';
import { handoverStory } from '@/content/en/handover-story';
export const labCopy = {
  title: 'Narrative laboratory.',
  intro:
    'Six stories, six visual techniques: compare, hand off, separate, assemble, branch and unfold. Each plays as its working material comes into view.',
  language: 'Russian (original source)',
  languageHref: '/ru/visual-lab/',
  context: 'See the stories in page context →',
  archiveLink: 'Earlier studies →',
  archiveTitle: 'Earlier motion studies.',
  archiveIntro:
    'Previous experiments, kept for reference. The six current scenes are on the main laboratory page.',
  archiveLanguageHref: '/ru/visual-lab/archive/',
  backToCurrent: 'Return to the current studies →',
};
export const stories = {
  research: researchStory,
  team: teamStory,
  organisation: organisationStory,
  home: homeStory,
  method: methodStory,
  handover: handoverStory,
} satisfies Record<StoryId, StoryContent>;
export const storyLabels = {
  disclosure:
    'Illustrative workflow, not a client case or measured outcome. The full story is written below.',
  reduced:
    'Reduced motion: the complete static composition and all story steps remain available.',
} satisfies StoryLabels;
