import { Handler, HandlerEvent } from '@netlify/functions';

import { DataOptions } from 'vuetify';

import { User } from '~/services/getUsers/types';
import { getUsers } from '~/functions/getUsers';
import { getUsersPaginated } from '~/functions/getUsersPaginated';

import { getParamsFromQueryString } from '~/functions/getParamsFromQueryString';
import { sleep } from '~/functions/sleep';

const handler: Handler = async (event: HandlerEvent) => {
	const options = getParamsFromQueryString(event.queryStringParameters) as unknown as DataOptions;

	const users: User[] = getUsers();
	const items = getUsersPaginated(users, options);

	await sleep(1000);

	return {
		headers: {
			'Access-Control-Allow-Origin': process.env.API_HEADERS_ACCESS_CONTROL_ALLOW_ORIGIN as string
		},
		statusCode: 200,
		body: JSON.stringify(items)
	};
};

export { handler };
