export type CallToAction = {
  label: string;
  href: string;
};

export type NavigationItem = CallToAction;

export type NavigationGroup = {
  label: string;
  items: readonly NavigationItem[];
};

export type PageIntroduction = {
  eyebrow: string;
  title: string;
  description: string;
};

export type PageDefinition = {
  path: string;
  meta: { title: string; description: string };
  introduction: PageIntroduction;
};

export type NumberedItem = {
  number: string;
  title: string;
  description: string;
  reference?: CallToAction;
};

export type LinkItem = NumberedItem & CallToAction;

export type SectionContent = PageIntroduction & {
  items: readonly NumberedItem[];
  supporting?: { title: string; startAt: number };
};

export type CallToActionSection = PageIntroduction &
  CallToAction & {
    secondary?: CallToAction;
  };

export type SiteChrome = {
  locale: 'en' | 'ru';
  skipLinkLabel: string;
  brand: string;
  endorsement: string;
  homeLabel: string;
  navigationLabel: string;
  peopleSpecialisationLabel: string;
  peopleNavigation: {
    label: string;
    expand: string;
    collapse: string;
    previous: string;
    next: string;
    hint: string;
  };
  navigation: readonly (NavigationItem | NavigationGroup)[];
  menuLabel: string;
  menuText: string;
  languageLabel: string;
  languageLinkLabel: string;
  footerTagline: string;
  footerContactsLabel: string;
  footerContacts: readonly CallToAction[];
  copyright: string;
  domain: string;
};
