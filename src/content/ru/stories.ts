import type {
  StoryContent,
  StoryId,
  StoryLabels,
} from '@/content/stories.schema';
import { researchStory } from '@/content/ru/research-story';
import { teamStory } from '@/content/ru/team-story';
import { organisationStory } from '@/content/ru/organisation-story';
import { homeStory } from '@/content/ru/home-story';
import { methodStory } from '@/content/ru/method-story';
import { handoverStory } from '@/content/ru/handover-story';
export const labCopy = {
  title: 'Лаборатория сюжетов.',
  intro:
    'Шесть сюжетов, шесть приёмов: сопоставление, передача, разделение, сборка, развилка и раскрытие правила. Каждый запускается при просмотре рабочего материала.',
  language: 'English',
  languageHref: '/visual-lab/',
  context: 'Посмотреть сцены в контексте страниц →',
  archiveLink: 'Предыдущие эскизы →',
  archiveTitle: 'Предыдущие эскизы анимаций.',
  archiveIntro:
    'Ранние эксперименты оставлены для сравнения. Шесть актуальных сцен находятся на основной странице лаборатории.',
  archiveLanguageHref: '/visual-lab/archive/',
  backToCurrent: 'Вернуться к актуальным сценам →',
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
    'Условный рабочий процесс, не клиентский кейс и не измеренный результат. Полный сюжет описан ниже.',
  reduced:
    'Уменьшенное движение: доступна полная статичная композиция и все этапы истории.',
} satisfies StoryLabels;
