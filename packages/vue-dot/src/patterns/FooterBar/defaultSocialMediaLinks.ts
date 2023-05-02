import { mdiTwitter, mdiLinkedin } from '@mdi/js';

import { SocialMediaLink } from './SocialMediaLinks/types';

export const defaultSocialMediaLinks: SocialMediaLink[] = [
	{
		icon: mdiLinkedin,
		href: 'https://www.linkedin.com/company/assurance-maladie/'
	},
	{
		icon: mdiTwitter,
		href: 'https://twitter.com/Assur_Maladie'
	}
];
