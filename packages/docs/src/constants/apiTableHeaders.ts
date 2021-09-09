import { IndexedObject } from '@cnamts/vue-dot/src/types';
import { HeaderList } from '~/types';

export const API_TABLE_HEADERS: Record<HeaderList, string[]> = {
	options: [
		'name',
		'type',
		'default',
		'description'
	],
	slots: [
		'name',
		'description'
	],
	props: [
		'name',
		'type',
		'default',
		'description'
	],
	events: [
		'name',
		'description'
	],
	functions: [
		'name',
		'signature',
		'description'
	],
	modifiers: [
		'name',
		'type',
		'description'
	],
	arguments: [
		'name',
		'type',
		'default',
		'description'
	],
	errorMessages: [
		'name',
		'type',
		'default',
		'description'
	],
	errorMessages: [
		'name',
		'type',
		'default',
		'description'
	]
};

export const API_TABLE_HEADER_MAPPING: IndexedObject = {
	name: 'Nom',
	type: 'Type',
	default: 'Valeur par défaut',
	description: 'Description',
	signature: 'Signature'
};
