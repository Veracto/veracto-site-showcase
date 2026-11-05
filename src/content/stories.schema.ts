export type StoryId =
  'research' | 'team' | 'organisation' | 'home' | 'method' | 'handover';
export type StoryContent = {
  id: StoryId;
  placement: string;
  title: string;
  description: string;
  objects: readonly string[];
  beats: readonly { title: string; description: string }[];
};
export type StoryLabels = {
  disclosure: string;
  reduced: string;
};
