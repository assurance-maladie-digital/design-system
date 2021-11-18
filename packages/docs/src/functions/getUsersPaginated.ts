import { DataOptions } from 'vuetify';
import { User, UsersResult } from '~/types/api';

export function getUsersPaginated(users: User[], { sortBy, sortDesc, page, itemsPerPage }: DataOptions): UsersResult {
	let items = users;
	const total = items.length;

	// Sorting algorithm
	if (sortBy?.length > 0) {
		items = items.sort((a, b) => {
			const sortA = a[sortBy[0]];
			const sortB = b[sortBy[0]];

			if (sortDesc[0]) {
				return -sortA.localeCompare(sortB);
			}

			return sortA.localeCompare(sortB);
		});
	}

	// Pagination
	if (itemsPerPage > 0) {
		items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
	}

	return {
		items,
		total
	} as UsersResult;
}
