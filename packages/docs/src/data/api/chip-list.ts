import { Api } from '~/types';

export const api: Api = {
	ChipList: {
		props: [
			{
				name: 'value',
				type: 'ChipItem[]',
				default: '[]',
				description: 'La liste des puces.',
				example: `{
	text: string;
	value: unknown;
}[]`
			},
			{
				name: 'overflow-limit',
				type: 'number',
				default: '4',
				description: 'Le nombre maximum de puces affichées.',
			}
		],
		events: [
			{
				name: 'remove',
				description: 'Émit lorsque qu’une puce est supprimée.',
				value: 'ChipItem'
			},
			{
				name: 'reset',
				description: 'Émit lorsque la liste des puces est réinitialisée.',
				value: undefined
			}
		]
	}
};
