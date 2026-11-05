import type { StaticVisuals } from '@/content/static-visuals.schema';
import { hero } from '@/content/ru/home/hero';
import { organisationsPage } from '@/content/ru/organisations';
import { researchersPage } from '@/content/ru/researchers';

export const staticVisuals = {
  title: 'Бумага, процесс и проверка.',
  intro:
    'Три статичные иллюстрации с актуальными текстами сайта. Пробуем визуальное направление перед заменой анимированных схем.',
  backgroundStatus:
    'Удаление фона пока не завершено: повторные запросы к той же модели дали непрозрачную шахматную сетку. Здесь показаны исходные схемы со светлым фоном.',
  navigation: 'Статичные иллюстрации',
  back: 'Все исследования',
  language: 'EN',
  proof: 'Проверить на лесном фоне',
  studies: [
    {
      id: 'process',
      label: '01 / От задачи к самостоятельной работе',
      heading: hero.title,
      description: hero.description,
      alt: 'Папка с рабочими материалами, рамка сравнения и открытая инструкция соединены зелёными бумажными лентами.',
      steps: [
        'Ваша задача',
        'Сравнение способов работы',
        'Повторяемый процесс',
      ],
      note: 'Объёмная бумажная композиция для главной. Инструкция обозначает передачу процесса; она не означает, что самостоятельная работа уже проверена.',
    },
    {
      id: 'organisation',
      label: '02 / Сравнение трёх вариантов',
      heading: organisationsPage.introduction.title,
      description: organisationsPage.introduction.description,
      alt: 'Три равнозначных зелёных лотка с документами; каждый соединяет рабочие материалы с записью результата.',
      steps: ['Текущий процесс', 'Улучшение без ИИ', 'То же улучшение с ИИ'],
      note: 'Одинаковый визуальный вес не объявляет ИИ победителем. В финальной версии два улучшенных варианта стоит различить нагляднее.',
    },
    {
      id: 'research',
      label: '03 / Материалы исследования',
      heading: researchersPage.introduction.title,
      description: researchersPage.introduction.description,
      alt: 'Книга-источник и таблица анализа соединены с рукописью, на полях которой есть коралловая пометка.',
      steps: ['Источники', 'Анализ', 'Текст и проверка'],
      note: 'Спокойный бумажный коллаж для исследовательского маршрута. Линии показывают связь материалов, а не автоматическое получение научного вывода.',
    },
  ],
} satisfies StaticVisuals;
