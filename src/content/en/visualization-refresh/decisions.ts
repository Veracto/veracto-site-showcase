import type { RefreshCandidate } from '@/content/visualization-refresh.schema';
export const decisionsCandidates = [
  {
    id: 'organisation',
    route: '/organisations/',
    currentId: 'study-organisation',
    name: '04 / Organisations',
    title: 'Three options. One fair comparison.',
    assessment:
      'Separating a forecast from observations is still right. The three alternatives are buried in prose while the graphic presents one generic pilot.',
    proposal:
      'Give all three options equal visual weight. Compare the complete work, including review, correction and tool costs; never animate an AI “winner”.',
    nodes: [
      {
        label: 'A / Baseline',
        title: 'Current process',
        detail: 'Record how the work reaches an accepted output today.',
        icon: 'source',
      },
      {
        label: 'B / Improvement',
        title: 'Better process, without AI',
        detail:
          'Change the template, access, roles or conventional automation.',
        icon: 'process',
      },
      {
        label: 'C / Added contribution',
        title: 'The same improvement + AI',
        detail: 'Test a bounded AI function on comparable tasks.',
        icon: 'ai',
      },
    ],
    bridge: 'Same tasks · same quality requirements',
    fields: [
      'Preparation',
      'Review + correction',
      'Tool cost',
      'Failures + help',
    ],
    note: 'Record observations first. Choose adoption, revision, further testing or stopping afterwards.',
  },
  {
    id: 'method',
    route: '/approach/',
    currentId: 'study-method',
    name: '05 / Approach',
    title: 'A next decision at every stage.',
    assessment:
      'The no-AI branch protects the offer boundary, but repeats the comparison and competes with the six stages on the updated Approach page.',
    proposal:
      'Turn the six actual stages into one compact decision trail. A stage yields an artifact, not an automatic pass. Diagnosis can end without a pilot.',
    nodes: [
      {
        label: '01 / Diagnose',
        title: 'Process map',
        detail: 'Scope, input, ownership and baseline.',
        icon: 'source',
      },
      {
        label: '02 / Select',
        title: 'Acceptable options',
        detail: 'Current work, improvement, added AI function.',
        icon: 'process',
      },
      {
        label: '03 / Plan',
        title: 'Comparison plan',
        detail: 'Quality criteria and stop conditions.',
        icon: 'review',
      },
      {
        label: '04 / Compare',
        title: 'Observations',
        detail: 'All attempts, costs, errors and limitations.',
        icon: 'review',
      },
      {
        label: '05 / Transfer',
        title: 'Independent-use record',
        detail: 'A new task and an exception without guidance.',
        icon: 'manual',
      },
      {
        label: '06 / Decide',
        title: 'Decision + revisit condition',
        detail: 'Adopt, revise, test further or stop.',
        icon: 'stop',
      },
    ],
    bridge: 'Continue only when the next step is justified',
    fields: [
      'A change without AI may be enough',
      'Stopping is a valid decision',
    ],
    note: 'The line connects the questions; it does not represent completed gates or guaranteed progress.',
  },
  {
    id: 'handover',
    route: '/approach/',
    currentId: 'study-handover',
    name: '06 / Handover',
    title: 'Useful instructions include the exception.',
    assessment:
      'The unavailable-source scenario is useful, but reads as a research-only access policy. The updated offer hands over a whole process across three routes.',
    proposal:
      'Show a compact runbook with the routine path and a separate exception path. Keep a concrete stop rule and a responsible person; test both on new material.',
    nodes: [
      {
        label: 'New task',
        title: 'Start with the instructions',
        detail: 'Input, expected output and quality criteria.',
        icon: 'manual',
      },
      {
        label: 'Routine path',
        title: 'Do the work and review',
        detail: 'Follow the steps; check the result against the criteria.',
        icon: 'process',
      },
      {
        label: 'Exception path',
        title: 'Stop the affected step',
        detail:
          'Record what is missing and refer it to the responsible person.',
        icon: 'stop',
      },
    ],
    bridge: 'The runbook answers three questions',
    fields: ['What to do', 'When to stop', 'Who reviews'],
    note: 'For a missing source: leave the claim unverified, request the material, then repeat the review.',
  },
] satisfies RefreshCandidate[];
