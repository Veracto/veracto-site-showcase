import type { PersonProfile } from '@/content/people.schema';

export const people = [
  {
    id: 'artem',
    number: 'AS',
    title: 'Artem Shaposhnikov',
    role: 'Co-founder',
    description:
      'PhD in Economics, MBA in International Business. Management experience in banking, corporate IT and process automation. Teaches at RANEPA and RUDN University.',
    expertise: 'Economics, business processes and organisational change.',
    source: {
      label: 'Academic profile',
      href: 'https://emm.rudn.ru/lecturers',
    },
    portrait: 'artem',
  },
  {
    id: 'mikhail',
    number: 'MK',
    title: 'Michael Kalyaev',
    role: 'Co-founder',
    description:
      'MS in International Economics and Trade. Works on economic assessment and consulting, and reviews AI tool choices.',
    expertise: 'Economics and consulting; review of AI tools.',
  },
  {
    id: 'timofey',
    number: 'TS',
    title: 'Tim Smykov',
    role: 'Co-founder',
    description:
      'MS in Applied AI. Leads AI tool selection and application, contributes to consulting and reviews economic conclusions.',
    expertise: 'Applied AI, workflow design and consulting.',
    portrait: 'timofey',
  },
  {
    id: 'ratner',
    number: 'SR',
    title: 'Svetlana Ratner',
    role: 'Advisor',
    description: 'Doctor of Sciences in Economics, Professor.',
    expertise:
      'Economic modelling, innovation, sustainability and energy transition.',
    source: {
      label: 'Academic profile',
      href: 'https://admission.rudn.ru/staff/84f4fa50-5014-11f0-b573-00155dec4f22/',
    },
    portrait: 'ratner',
  },
  {
    id: 'paiva',
    number: 'IP',
    title: 'Inna Paiva',
    role: 'Advisor',
    description:
      'Associate Professor with Habilitation at ISCTE Business School.',
    expertise: 'Accounting, management control and sustainability reporting.',
    source: {
      label: 'Academic profile',
      href: 'https://ciencia.iscte-iul.pt/authors/inna-choban-de-sousa-paiva/cv',
    },
    portrait: 'paiva',
  },
  {
    id: 'romanenko',
    number: 'SR',
    title: 'Stanislav Romanenko',
    role: 'Expert',
    description: 'Business consultant for leaders and management teams.',
    expertise:
      'Leadership, management practice and organisational development.',
    source: {
      label: 'Professional profile',
      href: 'https://stan-romanenko.ru/about/',
    },
    portrait: 'romanenko',
  },
  {
    id: 'shimanskaya',
    number: 'VS',
    title: 'Victoria Shimanskaya',
    role: 'Expert',
    description: 'Psychologist, author and co-founder of SKILLFOLIO.',
    expertise: 'Emotional intelligence, leadership and skills development.',
    source: {
      label: 'Professional profile',
      href: 'https://shimanskaya.pro/',
    },
    portrait: 'shimanskaya',
  },
] as const satisfies readonly PersonProfile[];
