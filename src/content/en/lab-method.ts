import type {
  HomeStudy,
  MethodStudy,
  HandoverStudy,
} from '@/content/lab-studies.schema';

export const homeStudy = {
  eyebrow: '04 / HOME · ASSEMBLING A WORKING PROCESS',
  title: 'How an output becomes usable',
  intro:
    'Agree the required output and review before starting. Document the accepted way of working in an instruction.',
  parts: [
    {
      label: 'Input',
      title: 'Source material',
      body: 'An article, dataset, report or request with known provenance.',
    },
    {
      label: 'Task',
      title: 'Required output',
      body: 'A summary, table, calculation or draft with defined requirements.',
    },
    {
      label: 'Review',
      title: 'Check the basis',
      body: 'A person checks sources, calculations and the agreed requirements.',
    },
    {
      label: 'Instruction',
      title: 'Record how to do it',
      body: 'Steps, checks, exceptions and responsibilities.',
    },
  ],
  change: 'An unsupported claim goes back for review',
  rule: 'Find its basis, correct it or remove it. Keep the rule for the next task.',
} satisfies HomeStudy;

export const methodStudy = {
  eyebrow: '05 / METHOD · A GENUINE BRANCH',
  title: 'AI must justify its place in the workflow.',
  intro:
    'Consider an improvement without AI first. Test an AI-assisted option when its contribution can be measured and the risks and data permit testing.',
  diagnosis: {
    label: 'Current work',
    title: 'Map the workflow',
    body: 'Inputs, participants, accepted output, difficulties and constraints.',
  },
  question: 'Is there a reason to test AI?',
  alternative: {
    label: 'A change without AI is sufficient',
    title: 'Improve the way the work is done',
    body: 'Inputs, template, access, responsibility or conventional automation.',
  },
  condition: 'If testing is appropriate',
  steps: [
    {
      label: 'Design',
      title: 'Agree the comparison',
      body: 'options, criteria, tasks and a cost limit.',
    },
    {
      label: 'Try',
      title: 'Test on real work',
      body: 'include quality, total effort, expenditure and errors.',
    },
    {
      label: 'Verify',
      title: 'Verify independent use',
      body: 'new tasks, a changed input and an exception without guidance.',
    },
  ],
  decision: 'Adopt the chosen approach, revise it, test further or stop.',
} satisfies MethodStudy;

export const handoverStudy = {
  eyebrow: '06 / HANDOVER · OPEN THE RELEVANT RULE',
  title: 'Instructions must help when something goes wrong.',
  intro:
    'Include routine steps, a stop condition and the person responsible for exceptions.',
  exception: {
    label: 'Exception in the task',
    title: 'The source is unavailable',
    body: 'The claim remains unverified.',
  },
  manual: 'Source verification',
  rules: [
    {
      label: '01 / Action',
      title: 'Request the source material',
      body: 'Do not use the claim as a supported conclusion before review.',
    },
    {
      label: '02 / Boundary',
      title: 'Do not bypass access restrictions',
      body: 'Pause the part of the work that lacks supporting evidence.',
    },
    {
      label: '03 / Responsibility',
      title: 'Responsibility',
      body: 'The material owner clarifies access; the reviewer checks the claim once the source is available.',
    },
  ],
  attempt: 'Material obtained → repeat the check',
  open: 'The outcome depends on what the source contains.',
} satisfies HandoverStudy;
