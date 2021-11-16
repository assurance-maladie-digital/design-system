import { Handler, HandlerEvent } from '@netlify/functions';

import { DataOptions } from 'vuetify';

import { User, UsersResult } from '~/services/getUsers/types';
import { getUsers } from '~/functions/getUsers';
import { getUsersPaginated } from '~/functions/getUsersPaginated';

import { getParamsFromQueryString } from '~/functions/getParamsFromQueryString';
import { QueryStringParameters } from '~/types/api';

function getData(options: DataOptions): UsersResult {
	let items: User[] = getUsers();
	let result = getUsersPaginated(items, options);

	return result
}

const handler: Handler = async (event: HandlerEvent) => {
	const options = getParamsFromQueryString(event.queryStringParameters as QueryStringParameters) as unknown  as DataOptions;
	const datas = getData(options);

	return {
		headers: {
			'Access-Control-Allow-Origin': process.env.API_HEADERS_ACCESS_CONTROL_ALLOW_ORIGIN as string
		},
		statusCode: 200,
		body: JSON.stringify(datas)
	};
};

export { handler };
