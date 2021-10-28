import { IndexedObject } from '@cnamts/vue-dot/src/types';
import { DataOptions } from 'vuetify';

interface EventQueryStringParameters {
	[name: string]: string | undefined;
}

type ParsedValue = string | boolean | number;
type Params = ParsedValue[] | string | boolean | number;

function parseValue(value: string): ParsedValue {
	try {
		return JSON.parse(value);
	} catch (error) {
		return value;
	}
}

export function getDataOptionsFromQueryString(queryString: EventQueryStringParameters | null): DataOptions {
	const params: IndexedObject<Params> = {};

	if (queryString === null) {
		return params as unknown as DataOptions;
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

	return params as unknown as DataOptions;
}
