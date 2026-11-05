import { practiceCandidates } from '@/content/ru/visualization-refresh/practice';
import { decisionsCandidates } from '@/content/ru/visualization-refresh/decisions';
import type { VisualizationRefresh } from '@/content/visualization-refresh.schema';
export const visualizationRefreshNavigation = 'Пересмотр схем · 01.10';
export const visualizationRefresh = {
  title: 'Показать работу. Сделать решение видимым.',
  intro:
    'Шесть предложений для обновлённого сайта Veracto. Сохраняем конкретный рабочий материал, явно показываем сравнение и объясняем, как клиент продолжит самостоятельно.',
  status: 'Дизайн-ревью · 1 октября 2026',
  disclosure:
    'Иллюстративные предложения для обсуждения. Это не клиентские результаты, измеренная экономия или принятое решение о внедрении. Текущие схемы сайта сохранены.',
  current: 'Сравнить с текущей схемой',
  context: 'Прочитать страницу',
  back: 'Все исследования',
  language: 'EN',
  candidate: 'Предлагаемое направление',
  assessment: 'Что требует внимания',
  proposal: 'Что предлагаю изменить',
  candidates: [...practiceCandidates, ...decisionsCandidates],
} satisfies VisualizationRefresh;
