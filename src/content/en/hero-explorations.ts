import type { HeroExplorationsCopy } from '@/content/hero-explorations.schema';

export const heroExplorations = {
  galleryLink: 'Explore all 12 Heroes: 4 pages × 3 variants →',
  navigation: 'Client Hero concepts',
  title: 'Client Hero explorations.',
  description:
    'Three composition sketches and one generated image example for review. Static design proposals; the six motion studies below remain unchanged.',
  openImage: 'Open full-size image',
  openLayout: 'See the image in a Hero layout',
  concepts: {
    image: {
      title: 'Image example: a connected research project',
      description:
        'GPT Image 2.5 Sunburst · xhigh · 1536 × 1024. Paper materials, soft light and a coral ribbon. An illustrative artwork, not a client result.',
      alt: 'An open research notebook, a source sheet and a sage note connected by a pale coral ribbon.',
    },
    researchers: {
      title: 'Individual researchers: connected materials',
      description: 'Paper surface, research sources and a project notebook.',
      alt: 'Hero composition sketch for individual researchers with connected source material and a project notebook.',
    },
    teams: {
      title: 'Research teams: a shared protocol',
      description:
        'A mint work surface with one protocol and clear team roles.',
      alt: 'Hero composition sketch for research teams with researcher, reviewer and team roles around a shared protocol.',
    },
    organisations: {
      title: 'Organisations: compare before deciding',
      description:
        'A forest surface and three options: the current process, a simpler improvement and an AI test.',
      alt: 'Hero composition sketch for organisations comparing three process options before a decision.',
    },
  },
} satisfies HeroExplorationsCopy;
