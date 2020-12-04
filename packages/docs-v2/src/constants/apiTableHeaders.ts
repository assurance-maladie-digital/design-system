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
	argument: [
		'type',
		'description'
	]
};
