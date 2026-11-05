import type { WorkingExample } from '@/content/examples.schema';

const disclosure =
  'An illustration of the document structure. No client project data is used.';

export const researcherExample = {
  eyebrow: 'Example material',
  title: 'Example: extracting data from articles',
  description:
    'A table links each value to its source, page, comment and review status.',
  disclosure,
  documentTitle: 'Data extraction · one research task',
  fields: [
    {
      label: 'Input',
      value: 'Selected articles, the question and table fields.',
    },
    {
      label: 'Instructions',
      value:
        'Keep the source and page. Mark missing or unclear information; separate reported data from your interpretation.',
    },
    {
      label: 'Review',
      value:
        'Check material values and claims against the full text. Return unsupported entries for revision.',
    },
    {
      label: 'New task',
      value:
        'Process another article without guidance. Explain the entry, identify a contradiction and record any help required.',
    },
  ],
  next: {
    label: 'Materials to continue',
    href: '/approach/#working-materials',
  },
} satisfies WorkingExample;

export const teamExample = {
  eyebrow: 'Example material',
  title: 'Example: collaborative data extraction',
  description: 'Shared instructions for extraction and review.',
  disclosure,
  documentTitle: 'Extraction and review · shared instructions',
  fields: [
    {
      label: 'Shared input',
      value: 'Articles, selection criteria, table fields and access rules.',
    },
    {
      label: 'Contributor',
      value: 'Records the value, source, page, version and uncertainties.',
    },
    {
      label: 'Reviewer',
      value:
        'Checks the entry against the source; the scientific lead resolves disputes about the method or criteria.',
    },
    {
      label: 'Handover test',
      value:
        'Another participant continues without the author, records discrepancies and returns errors to the responsible person.',
    },
  ],
  next: {
    label: 'Materials to continue',
    href: '/approach/#working-materials',
  },
} satisfies WorkingExample;

export const organisationExample = {
  eyebrow: 'Example material',
  title: 'Example: internal reporting',
  description: 'One report preparation workflow.',
  disclosure,
  documentTitle: 'Comparison plan · report preparation',
  fields: [
    {
      label: 'Diagnosis',
      value:
        'Who prepares and accepts the report, where the numbers come from and where rework occurs.',
    },
    {
      label: 'Options',
      value:
        'The current process; a shared template and conventional automation without AI; the same improved process with an AI draft.',
    },
    {
      label: 'Test',
      value:
        'Comparable new reports, shared criteria and total effort through acceptance. Errors and unsuccessful attempts remain in the record.',
    },
    {
      label: 'Decision',
      value:
        'Choose an acceptable approach based on quality, cost and the ability to continue. Separate forecasts from observations.',
    },
  ],
  next: {
    label: 'Materials to continue',
    href: '/approach/#working-materials',
  },
} satisfies WorkingExample;

export const methodExample = {
  eyebrow: 'Working materials',
  title: 'What we provide at the end',
  description:
    'The set depends on scope. If adoption is not justified, provide the diagnostic or comparison findings and the reason for the decision.',
  disclosure:
    'An illustration of the document structure. No client project data is used.',
  documentTitle: 'Materials · one workflow',
  fields: [
    {
      label: 'Process map',
      value: 'task, inputs, participants, steps and baseline measures.',
    },
    {
      label: 'Instructions',
      value: 'actions, tools, versions and recovery from failure.',
    },
    {
      label: 'Quality criteria',
      value: 'what to check, unacceptable errors and how to correct outputs.',
    },
    {
      label: 'Limits',
      value: 'permitted tasks, unknowns and stop conditions.',
    },
    {
      label: 'Responsibilities',
      value: 'operation, review, access, updates and support.',
    },
    {
      label: 'Final decision',
      value: 'findings, costs, help required, limits and a review trigger.',
    },
  ],
  next: {
    href: 'https://docs.veracto.ai/en/handover/package/',
    label: 'Materials for continuing the work',
  },
} satisfies WorkingExample;
