import { CookiesPageItems } from '../../types';
import { TypeEnum } from '../../CookiesInformation/TypeEnum';

export const cookies = [
	{
		name: 'lorem-ipsum',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		conservation: 'XX mois'
	},
	{
		name: 'lorem-ipsum',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		conservation: 'XX mois'
	}
];

export const cookiesList: CookiesPageItems = {
	[TypeEnum.ESSENTIALS]: cookies,
	[TypeEnum.FUNCTIONAL]: cookies,
	[TypeEnum.ANALYTICS]: cookies
};
