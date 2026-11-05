import type { PersonProfile } from '@/content/people.schema';

export const people = [
  {
    id: 'artem',
    number: 'АШ',
    title: 'Артём Шапошников',
    role: 'Сооснователь',
    description:
      'Кандидат экономических наук, MBA по международному бизнесу. Опыт руководства в банковской сфере, корпоративных ИТ и автоматизации процессов. Преподаёт в РАНХиГС и РУДН.',
    expertise: 'Экономика, бизнес-процессы и управление изменениями.',
    source: {
      label: 'Академический профиль',
      href: 'https://emm.rudn.ru/lecturers',
    },
    portrait: 'artem',
  },
  {
    id: 'mikhail',
    number: 'МК',
    title: 'Михаил Каляев',
    role: 'Сооснователь',
    description:
      'MS — международная экономика и торговля. Ведёт экономическую часть работы и консалтинг; участвует в проверке решений по ИИ-инструментам.',
    expertise: 'Экономика и консалтинг; проверка ИИ-инструментов.',
  },
  {
    id: 'timofey',
    number: 'ТС',
    title: 'Тим Смыков',
    role: 'Сооснователь',
    description:
      'MS — Applied AI. Ведёт подбор и применение ИИ-инструментов; участвует в консалтинге и проверке экономических выводов.',
    expertise: 'Прикладной ИИ, проектирование процессов и консалтинг.',
    portrait: 'timofey',
  },
  {
    id: 'ratner',
    number: 'СР',
    title: 'Светлана Ратнер',
    role: 'Адвайзер',
    description: 'Доктор экономических наук, профессор.',
    expertise:
      'Экономическое моделирование, инновации, устойчивое развитие и энергетический переход.',
    source: {
      label: 'Академический профиль',
      href: 'https://admission.rudn.ru/staff/84f4fa50-5014-11f0-b573-00155dec4f22/',
    },
    portrait: 'ratner',
  },
  {
    id: 'paiva',
    number: 'ИП',
    title: 'Инна Паива',
    role: 'Адвайзер',
    description:
      'Ассоциированный профессор с хабилитацией, ISCTE Business School.',
    expertise:
      'Бухгалтерский учёт, управленческий контроль и отчётность об устойчивом развитии.',
    source: {
      label: 'Академический профиль',
      href: 'https://ciencia.iscte-iul.pt/authors/inna-choban-de-sousa-paiva/cv',
    },
    portrait: 'paiva',
  },
  {
    id: 'romanenko',
    number: 'СР',
    title: 'Станислав Романенко',
    role: 'Эксперт',
    description:
      'Бизнес-консультант для руководителей и управленческих команд.',
    expertise: 'Лидерство, управленческая практика и развитие организаций.',
    source: {
      label: 'Профессиональный профиль',
      href: 'https://stan-romanenko.ru/about/',
    },
    portrait: 'romanenko',
  },
  {
    id: 'shimanskaya',
    number: 'ВШ',
    title: 'Виктория Шиманская',
    role: 'Эксперт',
    description: 'Психолог, автор книг, сооснователь SKILLFOLIO.',
    expertise: 'Эмоциональный интеллект, лидерство и развитие навыков.',
    source: {
      label: 'Профессиональный профиль',
      href: 'https://shimanskaya.pro/',
    },
    portrait: 'shimanskaya',
  },
] as const satisfies readonly PersonProfile[];
