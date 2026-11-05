import type { NumberedItem } from '@/content/site.schema';

export type PersonProfile = NumberedItem & {
  id: string;
  role: string;
  expertise: string;
  source?: { label: string; href: string };
  portrait?:
    'artem' | 'timofey' | 'ratner' | 'romanenko' | 'shimanskaya' | 'paiva';
};
