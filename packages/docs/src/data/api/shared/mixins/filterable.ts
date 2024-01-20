import { ItemEvent, Props } from '~/types';

export const filterableProps: Props = [
	{
		name: 'value',
		type: 'FilterItem[]',
		default: '[]',
		description: 'La liste des filtres.',
		example: `{
	title?: string;
	name: string;
	value: unknown;
	formatChip?: (value: unknown) => ChipItem[];
	chipOverflowLimit?: number;
}[]`
	}
];

export const filterableEvents: ItemEvent[] = [
	{
		name: 'update:value',
		description: 'Émit lorsque la liste des filtres est mise à jour.',
		value: 'FilterItem[]'
	}
];
