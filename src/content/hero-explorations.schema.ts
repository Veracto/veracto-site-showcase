export type HeroExplorationsCopy = {
  navigation: string;
  galleryLink: string;
  title: string;
  description: string;
  openImage: string;
  openLayout: string;
  concepts: {
    image: { title: string; description: string; alt: string };
    researchers: { title: string; description: string; alt: string };
    teams: { title: string; description: string; alt: string };
    organisations: { title: string; description: string; alt: string };
  };
};
