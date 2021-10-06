import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { EventQueryStringParameters } from '@netlify/functions/src/function/event';
import { DataOptions } from 'vuetify';

type ParsedValue = string | boolean | number;
type Params = ParsedValue[] | string | boolean | number;

function parseValue(value: string): ParsedValue {
	try {
		return JSON.parse(value);
	} catch (error) {
		return value;
	}
}

export function getDataOptionsFromQueryString(queryString: EventQueryStringParameters): DataOptions {
	const params: IndexedObject<Params> = {};

	Object.entries(queryString).map(([key, value]) => {
		if (key.match(/\[\]/)) {
			params[key.replace('[]', '')] = (value as string)
				.split(', ')
				.map(value => parseValue(value));
		} else {
			params[key] = parseValue(value as string);
		}
	});

	return params as unknown as DataOptions;
}
