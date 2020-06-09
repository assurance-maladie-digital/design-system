import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { ItemHeader } from '../types';

const propProps: ItemHeader[] = [
	{
		label: 'Nom',
		value: 'name',
		class: 'xs6 md3'
	},
	{
		label: 'Type',
		value: 'type',
		class: 'xs6 md2 text-xs-right'
	},
	{
		label: 'Valeur',
		value: 'value',
		class: 'xs12 md7 text-md-right'
	},
	{
		label: 'Obligatoire',
		value: 'required',
		class: 'xs12 md7 text-md-right'
	},
	{
		label: 'Description',
		value: 'description',
		class: 'xs12 mt-2'
	},
	{
		label: 'Exemple',
		value: 'example',
		class: 'xs12 mt-2'
	},
	{
		label: 'Options',
		value: 'options',
		class: 'xs12 mt-2'
	}
];

export const apiHeaders: IndexedObject<ItemHeader[]> = {
	api: [...propProps],
	props: [...propProps],
	slots: [
		{
			label: 'Nom',
			value: 'name',
			class: 'xs12'
		},
		{
			label: 'Description',
			value: 'description',
			class: 'xs12 mt-2'
		},
		{
			label: 'Props',
			value: 'props',
			class: 'xs12 mt-2'
		}
	],
	events: [
		{
			label: 'Nom',
			value: 'name',
			class: 'xs12'
		},
		{
			label: 'Description',
			value: 'description',
			class: 'xs12 mt-2'
		},
		{
			label: 'Valeur',
			value: 'value',
			class: 'xs12 mt-2'
		}
	],
	functions: [
		{
			label: 'Nom',
			value: 'name',
			class: 'xs12'
		},
		{
			label: 'Description',
			value: 'description',
			class: 'xs12 mt-2'
		},
		{
			label: 'Signature',
			value: 'signature',
			class: 'xs12 mt-2'
		}
	],
	options: [...propProps]
};
