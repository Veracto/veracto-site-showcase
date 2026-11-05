import type { CallToAction, PageIntroduction } from '@/content/site.schema';

export type WorkingExample = PageIntroduction & {
  disclosure: string;
  documentTitle: string;
  fields: readonly { label: string; value: string }[];
  next: CallToAction;
};
