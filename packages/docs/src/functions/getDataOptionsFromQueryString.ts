import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { EventQueryStringParameters } from '@netlify/functions/src/function/event';
import { DataOptions } from 'vuetify';

function parseValue(value: string): string | boolean | number {
	try {
		return JSON.parse(value);
	} catch (error) {
		return value;
	}
}

export function getDataOptionsFromQueryString(queryString: EventQueryStringParameters): DataOptions {
	const params: any = {};

	Object.entries(queryString).map(([key, value]) => {
		if (key.match(/\[\]/)) {
			params[key.replace('[]', '')] = (value as string)
				.split(', ')
				.map(value => parseValue(value));
		} else {
			params[key] = parseValue(value as string);
		}
	});

	return params as DataOptions;
}
