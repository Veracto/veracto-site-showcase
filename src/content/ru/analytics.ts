import type { AnalyticsCopy } from '@/content/analytics.schema';

export const analyticsCopy = {
  title: 'Cookies и аналитика',
  description:
    'Статистика, тепловые карты и выборочные записи помогают улучшать сайт. Поля ввода скрыты. Вы можете отказаться или изменить выбор позже.',
  allow: 'Разрешить',
  decline: 'Отказаться',
  settings: 'Настройки аналитики',
  excluded: 'Этот браузер исключён из аналитики.',
  privacyLabel: 'Об использовании данных',
  privacyHref: '/ru/privacy/',
} satisfies AnalyticsCopy;
