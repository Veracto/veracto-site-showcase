import type { PersonProfile } from '@/content/people.schema';
import type {
  CallToAction,
  CallToActionSection,
  LinkItem,
  NumberedItem,
  PageDefinition,
  PageIntroduction,
  SectionContent,
} from '@/content/site.schema';

export type HomePageDefinition = {
  meta: PageDefinition['meta'];
  hero: PageIntroduction & {
    badge: string;
    titleLead: string;
    titleAccent: string;
    primaryCta: CallToAction;
    secondaryCta: CallToAction;
    note: string;
    modelTitle: string;
    modelReference: string;
    modelGate: string;
    model: readonly NumberedItem[];
  };
  audiences: PageIntroduction & {
    items: readonly (LinkItem & {
      tone: 'research' | 'research-team' | 'organisation';
      artifact: readonly [string, string, string];
    })[];
  };
  transformation: SectionContent;
  approach: PageIntroduction & {
    steps: readonly NumberedItem[];
    cta: CallToAction;
  };
  trust: PageIntroduction & {
    supportTitle: string;
    items: readonly LinkItem[];
  };
  callToAction: CallToActionSection;
};

export type ResearchersPageDefinition = PageDefinition & {
  documentation: CallToAction;
  tone: 'research';
  fit: SectionContent;
  work: SectionContent;
  engagement: SectionContent;
  result: SectionContent;
  callToAction: CallToActionSection;
};

export type ResearchTeamsPageDefinition = PageDefinition & {
  documentation: CallToAction;
  tone: 'research-team';
  fit: SectionContent;
  operatingModel: SectionContent;
  engagement: SectionContent;
  result: SectionContent;
  callToAction: CallToActionSection;
};

export type OrganisationsPageDefinition = PageDefinition & {
  documentation: CallToAction;
  tone: 'organisation';
  fit: SectionContent;
  formats: SectionContent;
  decisionPath: SectionContent;
  result: SectionContent;
  callToAction: CallToActionSection;
};

export type ApproachDecision = NumberedItem & {
  question: string;
  artifact: string;
  gate: string;
};

export type ApproachPageDefinition = PageDefinition & {
  navigation: { label: string; items: readonly CallToAction[] };
  stepsHeading: PageIntroduction;
  stepLabels: {
    question: string;
    artifact: string;
    gate: string;
    details: string;
  };
  steps: readonly ApproachDecision[];
  anatomy: SectionContent;
  principles: SectionContent;
  callToAction: CallToActionSection;
};

export type EvidencePageDefinition = PageDefinition & {
  status: PageIntroduction;
  standard: SectionContent;
  publicity: SectionContent;
  callToAction: CallToActionSection;
};

export type AboutPageDefinition = PageDefinition & {
  architecture: SectionContent;
  scope: SectionContent;
  people: PageIntroduction & CallToAction;
  reason: PageIntroduction;
  callToAction: CallToActionSection;
};

export type TeamGroup = PageIntroduction & {
  kind: 'founder' | 'delivery' | 'supporters';
  items: readonly PersonProfile[];
};

export type TeamPageDefinition = PageDefinition & {
  principle: PageIntroduction;
  expertise: SectionContent;
  groups: readonly TeamGroup[];
  note: string;
  callToAction: CallToActionSection;
};

export type ContactPageDefinition = PageDefinition & {
  brief: PageIntroduction;
  steps: readonly [string, string, string];
  email: {
    eyebrow: string;
    title: string;
    description: string;
    address: string;
    actionLabel: string;
    safetyNote: string;
  };
  telegram: CallToAction;
  privacyLink: CallToAction;
  alternative: CallToAction;
};

export type PrivacyPageDefinition = PageDefinition & {
  detailsLabel: string;
  sections: readonly NumberedItem[];
};
