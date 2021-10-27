import { Handler, HandlerEvent } from '@netlify/functions';

import { wait } from '~/functions/wait';
import { getUsers } from '~/functions/getUsers';

import { User, UsersResult } from '~/types/api';
import { getUsersPaginated } from '~/functions/getUsersPaginated';
import { DataOptions } from 'vuetify';
import { IndexedObject } from '@cnamts/vue-dot/src/types';

type Filters = IndexedObject<string>;

interface Params {
	options: DataOptions,
	filters: Filters;
}

function filterItemsByField(items: User[], field: string, value: string): User[] {
	return items
		.filter(item => {
			return item[field]
				.toLowerCase()
				.match(value.toLowerCase());
		});
}

function getData(params: Params): UsersResult {
	let items: User[] = getUsers();

	if (params.filters) {
		Object.entries(params.filters).forEach(([key, value]) => {
			if (value) {
				items = filterItemsByField(items, key, value);
			}
		});
	}

	return getUsersPaginated(items, params.options)
}

const handler: Handler = async (event: HandlerEvent) => {
	await wait();

	const params = JSON.parse(event.body as string) as unknown as Params;
	const datas = getData(params);

	return {
		headers: {
			'Access-Control-Allow-Origin': process.env.API_HEADERS_ACCESS_CONTROL_ALLOW_ORIGIN as string
		},
		statusCode: 200,
		body: JSON.stringify(datas)
	};
};

export { handler };
