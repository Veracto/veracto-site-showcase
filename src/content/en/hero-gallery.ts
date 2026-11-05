import type { HeroGalleryCopy } from '@/content/hero-gallery.schema';
export const heroGallery = {
  title: 'Twelve Hero directions.',
  intro:
    'Three complete layout proposals for each page. Generated editorial imagery illustrates the work; these are design candidates, not client results.',
  back: 'Back to the visual lab',
  catalogue: 'All 12 Hero candidates',
  open: 'Open this Hero',
  compare: 'Other variants for this page',
  language: 'RU',
  primary: 'Find your route',
  secondary: 'Our approach',
  contact: 'Discuss your work',
  eyebrow: 'AI CONSULTING & ADOPTION',
  groups: {
    home: {
      label: 'Home',
      variants: [
        {
          name: '01 / Material study',
          note: 'A generous split layout: a clear promise beside a tactile, route-specific artwork.',
          title: 'Make AI part of work that matters.',
          body: 'We help researchers, teams and organisations choose existing AI tools, test them on real work and build a repeatable process.',
        },
        {
          name: '02 / Editorial cover',
          note: 'Oversized typography leads; the artwork forms a wide visual field below the introduction.',
          title: 'Better tools. A clearer way to work.',
          body: 'We help researchers, teams and organisations choose existing AI tools, test them on real work and build a repeatable process.',
        },
        {
          name: '03 / Focused workspace',
          note: 'A contrasting forest surface with an inset paper workspace and a restrained coral accent.',
          title: 'From AI experiments to everyday practice.',
          body: 'We help researchers, teams and organisations choose existing AI tools, test them on real work and build a repeatable process.',
        },
      ],
    },
    researchers: {
      label: 'Individual researchers',
      variants: [
        {
          name: '01 / Material study',
          note: 'A generous split layout: a clear promise beside a tactile, route-specific artwork.',
          title: 'Your research. Connected.',
          body: 'Connect sources, notes and analysis with existing AI tools. Keep scientific judgement and quality checks in your hands.',
        },
        {
          name: '02 / Editorial cover',
          note: 'Oversized typography leads; the artwork forms a wide visual field below the introduction.',
          title: 'More room for the research itself.',
          body: 'Connect sources, notes and analysis with existing AI tools. Keep scientific judgement and quality checks in your hands.',
        },
        {
          name: '03 / Focused workspace',
          note: 'A contrasting forest surface with an inset paper workspace and a restrained coral accent.',
          title: 'Build a workflow you can trust.',
          body: 'Connect sources, notes and analysis with existing AI tools. Keep scientific judgement and quality checks in your hands.',
        },
      ],
    },
    teams: {
      label: 'Research teams',
      variants: [
        {
          name: '01 / Material study',
          note: 'A generous split layout: a clear promise beside a tactile, route-specific artwork.',
          title: 'Make AI a shared research practice.',
          body: 'Agree on tools, roles and review criteria. Test one shared workflow, then learn to use it independently.',
        },
        {
          name: '02 / Editorial cover',
          note: 'Oversized typography leads; the artwork forms a wide visual field below the introduction.',
          title: 'One team. A common way to work.',
          body: 'Agree on tools, roles and review criteria. Test one shared workflow, then learn to use it independently.',
        },
        {
          name: '03 / Focused workspace',
          note: 'A contrasting forest surface with an inset paper workspace and a restrained coral accent.',
          title: 'A protocol your team can actually use.',
          body: 'Agree on tools, roles and review criteria. Test one shared workflow, then learn to use it independently.',
        },
      ],
    },
    organisations: {
      label: 'Organisations',
      variants: [
        {
          name: '01 / Material study',
          note: 'A generous split layout: a clear promise beside a tactile, route-specific artwork.',
          title: 'Find where AI earns its place.',
          body: 'Choose one workflow. Compare the current process, a simpler improvement and an AI-assisted option before deciding what to adopt.',
        },
        {
          name: '02 / Editorial cover',
          note: 'Oversized typography leads; the artwork forms a wide visual field below the introduction.',
          title: 'Start with the work. Then choose the tools.',
          body: 'Choose one workflow. Compare the current process, a simpler improvement and an AI-assisted option before deciding what to adopt.',
        },
        {
          name: '03 / Focused workspace',
          note: 'A contrasting forest surface with an inset paper workspace and a restrained coral accent.',
          title: 'Make the next decision with evidence.',
          body: 'Choose one workflow. Compare the current process, a simpler improvement and an AI-assisted option before deciding what to adopt.',
        },
      ],
    },
  },
} satisfies HeroGalleryCopy;
