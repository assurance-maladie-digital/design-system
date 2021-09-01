import { Handler, HandlerEvent } from '@netlify/functions';
import { DataOptions } from 'vuetify';
import { User, UsersResult } from '~/services/getUsers/types';

function getUsers(): User[] {
	return [
		{
			firstname: 'Virginie',
			lastname: 'Beauchesne',
			email: 'virginie.beauchesne@example.com'
		},
		{
			firstname: 'Simone',
			lastname: 'Bellefeuille',
			email: 'simone.bellefeuille@example.com'
		},
		{
			firstname: 'Étienne',
			lastname: 'Salois',
			email: 'etienne.salois@example.com'
		},
		{
			firstname: 'Bernadette',
			lastname: 'Langelier',
			email: 'bernadette.langelier@example.com'
		},
		{
			firstname: 'Agate',
			lastname: 'Roy',
			email: 'agate.roy@example.com'
		},
		{
			firstname: 'Louis',
			lastname: 'Denis',
			email: 'louis.denis@example.com'
		},
		{
			firstname: 'Édith',
			lastname: 'Cartier',
			email: 'edith.cartier@example.com'
		},
		{
			firstname: 'Alphonse',
			lastname: 'Bouvier',
			email: 'alphonse.bouvier@example.com'
		},
		{
			firstname: 'Eustache',
			lastname: 'Dubois',
			email: 'eustache.dubois@example.com'
		},
		{
			firstname: 'Rosemarie',
			lastname: 'Quessy',
			email: 'rosemarie.quessy@example.com'
		},
		{
			firstname: 'Serge',
			lastname: 'Rivard',
			email: 'serge.rivard@example.com'
		},
		{
			firstname: 'Jacques',
			lastname: 'Demers',
			email: 'jacques.demers@example.com'
		},
		{
			firstname: 'Aimée',
			lastname: 'Josseaume',
			email: 'aimee.josseaume@example.com'
		},
		{
			firstname: 'Delphine',
			lastname: 'Robillard',
			email: 'delphine.robillard@example.com'
		},
		{
			firstname: 'Alexandre',
			lastname: 'Lazure',
			email: 'alexandre.lazure@example.com'
		}
	];
}

async function getData({ sortBy, sortDesc, page, itemsPerPage }: DataOptions): Promise<UsersResult> {
	return new Promise((resolve) => {
		let items: User[] = getUsers();
		const total = items.length;

		// Sorting algorithm
		if (sortBy) {
			items = items.sort((a, b) => {
				const sortA = a[sortBy[0]];
				const sortB = b[sortBy[0]];

				if (sortDesc) {
					if (sortA < sortB) {
						return 1;
					}

					if (sortA > sortB) {
						return -1;
					}

					return 0;
				} else {
					if (sortA < sortB) {
						return -1;
					}

					if (sortA > sortB) {
						return 1;
					}

					return 0;
				}
			});
		}

		// Pagination
		if (itemsPerPage > 0) {
			items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
		}

		resolve({
			items,
			total
		});
	});
}

const handler: Handler = async (event: HandlerEvent) => {
	const options = event.queryStringParameters as unknown as DataOptions;
	const datas = await getData(options);

	return {
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		statusCode: 200,
		body: JSON.stringify(datas),
	};
};

export { handler };
