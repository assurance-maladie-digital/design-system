import { IndexedObject } from '@cnamts/vue-dot/src/types';
import { HeaderList } from '~/types';

import { ApiHeadersEnum } from './ApiHeadersEnum';
import { ApiTableHeadersEnum } from './ApiTableHeadersEnum';

export const API_TABLE_HEADERS: Record<HeaderList, string[]> = {
	options: [
		ApiHeadersEnum.NAME,
		ApiHeadersEnum.TYPE,
		ApiHeadersEnum.DEFAULT,
		ApiHeadersEnum.DESCRIPTION
	],
	slots: [
		ApiHeadersEnum.NAME,
		ApiHeadersEnum.DESCRIPTION
	],
	props: [
		ApiHeadersEnum.NAME,
		ApiHeadersEnum.TYPE,
		ApiHeadersEnum.DEFAULT,
		ApiHeadersEnum.DESCRIPTION
	],
	events: [
		ApiHeadersEnum.NAME,
		ApiHeadersEnum.DESCRIPTION
	],
	functions: [
		ApiHeadersEnum.NAME,
		ApiHeadersEnum.SIGNATURE,
		ApiHeadersEnum.DESCRIPTION
	],
	modifiers: [
		ApiHeadersEnum.NAME,
		ApiHeadersEnum.TYPE,
		ApiHeadersEnum.DESCRIPTION
	],
	typeArguments: [
		ApiHeadersEnum.NAME,
		ApiHeadersEnum.DEFAULT,
		ApiHeadersEnum.DESCRIPTION
	],
	arguments: [
		ApiHeadersEnum.NAME,
		ApiHeadersEnum.TYPE,
		ApiHeadersEnum.DEFAULT,
		ApiHeadersEnum.DESCRIPTION
	],
	errorMessages: [
		ApiHeadersEnum.NAME,
		ApiHeadersEnum.TYPE,
		ApiHeadersEnum.DEFAULT,
		ApiHeadersEnum.DESCRIPTION
	],
	returnValue: [
		ApiHeadersEnum.TYPE
	]
};

export const API_TABLE_HEADER_MAPPING: IndexedObject = {
	[ApiHeadersEnum.NAME]: 'Nom',
	[ApiHeadersEnum.TYPE]: 'Type',
	[ApiHeadersEnum.DEFAULT]: 'Valeur par défaut',
	[ApiHeadersEnum.DESCRIPTION]: 'Description',
	[ApiHeadersEnum.SIGNATURE]: 'Signature'
};

export const API_HEADER_MAPPING: IndexedObject = {
	[ApiTableHeadersEnum.OPTIONS]: 'Options',
	[ApiTableHeadersEnum.SLOTS]: 'Slots',
	[ApiTableHeadersEnum.PROPS]: 'Props',
	[ApiTableHeadersEnum.EVENTS]: 'Événements',
	[ApiTableHeadersEnum.FUNCTIONS]: 'Fonctions',
	[ApiTableHeadersEnum.MODIFIERS]: 'Modificateurs',
	[ApiTableHeadersEnum.TYPE_ARGUMENTS]: 'Arguments typés',
	[ApiTableHeadersEnum.ARGUMENTS]: 'Arguments',
	[ApiTableHeadersEnum.ERROR_MESSAGES]: 'Messages d’erreur',
	[ApiTableHeadersEnum.RETURN_VALUE]: 'Valeur de retour'
};
