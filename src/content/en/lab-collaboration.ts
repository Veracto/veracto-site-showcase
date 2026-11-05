import type {
  TeamStudy,
  OrganisationStudy,
} from '@/content/lab-studies.schema';
export const studyDisclosure =
  'Illustrative workflows, not client cases or measured results. No pilot outcome is invented or selected.';

export const teamStudy = {
  eyebrow: '02 / TEAM · HANDOFF & RETURN',
  title: 'Hand over the result with its supporting evidence.',
  intro:
    'The next participant must understand the entry and check the source. A specific review comment goes back to its author and improves the shared instructions.',
  roles: [
    {
      label: 'Contributor',
      title: 'Prepared the entry',
      body: 'The claim is present; the source and passage are missing.',
    },
    {
      label: 'Reviewer',
      title: 'Returned it for revision',
      body: 'Add the source, passage and limitation of the claim.',
    },
    {
      label: 'Next participant',
      title: 'Uses the updated rule',
      body: 'The new entry includes its basis; the result still requires review.',
    },
  ],
  exchange: [
    'Entry → reviewer',
    'Comment → contributor',
    'New entry → reviewer',
  ],
  protocol: 'What the next entry must include',
  fields: ['Claim', 'Source and passage', 'Limitation', 'Reviewer'],
  next: 'The entry can be reviewed. Acceptance remains a separate decision.',
} satisfies TeamStudy;

export const organisationStudy = {
  eyebrow: '03 / ORGANISATION · TWO SEPARATE REGISTERS',
  title: 'Base the decision on observations.',
  intro:
    'Potential savings remain a hypothesis until tested. Record actual effort, errors and limitations.',
  forecast: {
    label: 'Before testing',
    title: 'Hypothesis',
    body: 'AI may reduce the total effort of preparing a summary without reducing quality.',
  },
  assumptions: 'Materials are available, approved for use and comparable.',
  pilot: {
    label: 'Test',
    title: 'One summary workflow',
    body: 'The current process, an improvement without AI and an AI-assisted option. The same quality requirements.',
  },
  boundary: 'Keep the workflow scope fixed during the test.',
  observations: {
    label: 'Observations',
    title: 'Findings from every attempt',
    body: 'Include accepted, corrected and unsuccessful outputs.',
  },
  rows: [
    'Total human effort',
    'Errors and corrections',
    'Help and unresolved issues',
  ],
  unknown: 'Retain uncertainty in the final decision.',
  decision: 'Next step · no option selected before testing',
  options: ['Adopt', 'Revise', 'Test further', 'Stop'],
} satisfies OrganisationStudy;
