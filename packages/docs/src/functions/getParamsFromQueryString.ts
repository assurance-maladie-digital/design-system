import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { EventQueryStringParameters } from '@netlify/functions/src/function/event';

type ParsedValue = string | boolean | number;
type Params = ParsedValue[] | string | boolean | number;

function parseValue(value: string): ParsedValue {
	try {
		return JSON.parse(value);
	} catch (error) {
		return value;
	}
}

export function getParamsFromQueryString(queryString: EventQueryStringParameters): IndexedObject<Params> {
	const params: IndexedObject<Params> = {};

	if (queryString === null) {
		return params;
	}

	Object.entries(queryString).map(([key, value]) => {
		if (key.match(/\[\]/)) {
			params[key.replace('[]', '')] = (value as string)
				.split(', ')
				.map(value => parseValue(value));
		} else {
			params[key] = parseValue(value as string);
		}
	});

	return params;
}
