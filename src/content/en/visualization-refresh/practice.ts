import type { RefreshCandidate } from '@/content/visualization-refresh.schema';
export const practiceCandidates = [
  {
    id: 'home',
    route: '/',
    currentId: 'study-home',
    name: '01 / Home',
    title: 'A process the client can own.',
    assessment:
      'Input → task → review → instruction still makes sense, but explains making one output. The new homepage promises a repeatable process and a justified next decision.',
    proposal:
      'Replace the four-part assembly with before → real comparison → independent use. Keep instructions and review; make adoption conditional.',
    nodes: [
      {
        label: 'Before',
        title: 'A fragile routine',
        detail:
          'Checks and exceptions depend on the person who knows the task.',
        icon: 'source',
      },
      {
        label: 'Compare',
        title: 'Try the same work',
        detail:
          'Current process, a better process without AI, and the same improvement with AI.',
        icon: 'review',
      },
      {
        label: 'After verification',
        title: 'A process you can repeat',
        detail:
          'A new task, instructions, review criteria and a known stop condition.',
        icon: 'manual',
      },
    ],
    bridge: 'A decision, with its limits',
    fields: ['Adopt', 'Revise', 'Test further', 'Stop'],
    note: 'No “after” state is promised before the comparison and independent-use check.',
  },
  {
    id: 'research',
    route: '/researchers/',
    currentId: 'research-revision',
    name: '02 / Researchers',
    title: 'One project. Three kinds of material.',
    assessment:
      'The association-versus-causation example is precise and worth retaining. Alone, it makes the wider sources, analysis and manuscript offer look like citation checking.',
    proposal:
      'Use a connected project workspace as the main visual. Keep claim revision as a concrete example below it, with the source limitation intact.',
    nodes: [
      {
        label: 'Sources',
        title: 'Passage + limitation',
        detail: 'Keep the source and what it actually supports.',
        icon: 'source',
      },
      {
        label: 'Data and code',
        title: 'Input + reproducible step',
        detail: 'Keep the data, transformation and scientific assumptions.',
        icon: 'process',
      },
      {
        label: 'Manuscript',
        title: 'Draft + review comment',
        detail: 'Keep the version and the reason for a correction.',
        icon: 'review',
      },
    ],
    bridge: 'The researcher remains responsible',
    fields: ['Question', 'Method', 'Interpretation', 'Authorship'],
    note: 'Connected records support review; connection itself does not establish scientific validity.',
  },
  {
    id: 'team',
    route: '/research-teams/',
    currentId: 'study-team',
    name: '03 / Research teams',
    title: 'Hand over enough to continue.',
    assessment:
      'The return to the contributor is a useful working loop. But a single missing citation understates team practice, reproducibility and onboarding.',
    proposal:
      'Make the transferable package the centre: material, version, procedure and reviewer. Show the next participant trying a new task; retain the return for correction.',
    nodes: [
      {
        label: 'Contributor',
        title: 'Prepare the package',
        detail: 'Input, version, steps and known limitations travel together.',
        icon: 'source',
      },
      {
        label: 'Reviewer',
        title: 'Check against the criteria',
        detail: 'A specific comment returns to the responsible person.',
        icon: 'review',
      },
      {
        label: 'Next participant',
        title: 'Continue without the initiator',
        detail:
          'Repeat the procedure on new material and record help required.',
        icon: 'process',
      },
    ],
    bridge: 'The handover package',
    fields: [
      'Source / input',
      'Version + steps',
      'Review criteria',
      'Named owner',
    ],
    note: 'A complete package is reviewable; successful independent use still has to be observed.',
  },
] satisfies RefreshCandidate[];
