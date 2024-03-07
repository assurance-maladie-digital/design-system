import { TeamMember, OldTeamMember } from '../services/github/types';

export const REPO = 'assurance-maladie-digital/design-system';
export const DEFAULT_BRANCH = 'v2';
export const DEFAULT_DIR = 'packages/docs/src';

export const TEAM_MEMBERS: TeamMember[] = [
	{
		gitHubId: 152852697,
		name: 'Dr Valentin Becquet',
		role: 'Lead Designer et PO',
		img: 'valentin_b.jpg',
		url: 'https://www.linkedin.com/in/valentin-becquet-807a9b147'
	},
	{
		gitHubId: 15378125,
		name: 'Christophe Gaon',
		role: 'Tech Lead',
		img: 'person.svg',
		url: 'https://www.linkedin.com/in/christophe-gaon-b1a645'
	},
	{
		gitHubId: 1822420,
		name: 'David Fyon',
		role: 'Développeur Front et Designer UX/UI',
		img: 'person.svg',
		url: 'https://davidfyon.com/'
	},
	{
		gitHubId: 119520187,
		name: 'Edouard Le Gall',
		role: 'Designer UX/UI',
		img: 'person.svg',
		url: 'https://www.linkedin.com/in/edouard-le-gall'
	},
	{
		gitHubId: 152988107,
		name: 'Jade Janiw',
		role : 'Designer UX',
		img: 'person.svg',
		url: 'https://www.linkedin.com/in/jade-janiw-98564b12b'
	},
	{
		gitHubId: 152988729,
		name: 'Romain Quesnel',
		role: 'Designer UX',
		img: 'person.svg',
		url: 'https://www.linkedin.com/in/romain-quesnel-6568418b'
	},
	{
		gitHubId: 26382911,
		name: 'Virginie Vachet',
		role: 'Développeuse Front',
		img: 'person.svg',
		url: 'https://www.vachetvirginie.fr/'
	},
	{
		gitHubId: 65124433,
		name: 'Adrien Charrier',
		role: 'Développeur Front',
		img: 'person.svg',
		url: 'https://github.com/4dr1en'
	}
];

export const OLD_TEAM_MEMBERS: OldTeamMember[] = [
	{
		gitHubId: 6760432,
		name: 'Baptiste Coulon',
		url: 'https://github.com/BaptisteCool'
	},
	{
		gitHubId: 44802047,
		name: 'Yvon Michel',
		url: 'https://github.com/mmi16389'
	},
	{
		gitHubId: 46431396,
		name: 'Kevin Petitnicolas-Yoeusley',
		url: 'https://github.com/PYKEngine'
	},
	{
		gitHubId: 56488255,
		name: 'Kelhel',
		url: 'https://github.com/Kelhel'
	},
	{
		gitHubId: 64596909,
		name: 'François Coué',
		url: 'https://www.linkedin.com/in/fran%C3%A7ois-cou%C3%A9-20269337/'
	},
	{
		gitHubId: 43619846,
		name: 'Julien Baylac',
		url: 'https://github.com/Julien-Baylac'
	},
	{
		gitHubId: null,
		name: 'Melissa Rolas',
		url: 'https://www.linkedin.com/in/melissarolas/'
	},
	{
		gitHubId: 10298932,
		name: 'Dylan Broussard',
		url: 'https://github.com/deraw'
	}
];
