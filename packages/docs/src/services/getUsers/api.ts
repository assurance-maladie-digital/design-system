import { DataOptions } from 'vuetify';

import { UsersResult } from './types';

import { AxiosResponse } from 'axios';
import { axios } from '~/plugins/axios';

export function getUsersFromApi(options: DataOptions | null = null): Promise<AxiosResponse<UsersResult>> {
	return axios.get('/users', {
		params: {
			...options
		}
	});
}
