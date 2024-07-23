import { mdiLinkedin, mdiTwitter } from '@mdi/js';

import type { SocialMediaLink } from './SocialMediaLinks/types';

export const defaultSocialMediaLinks: SocialMediaLink[] = [
  {
    icon: mdiLinkedin,
    href: 'https://www.linkedin.com/company/assurance-maladie/',
  },
  {
    icon: mdiTwitter,
    href: 'https://twitter.com/Assur_Maladie',
  },
];
