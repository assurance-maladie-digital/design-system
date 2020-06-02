/*
 Here are a example service to illustrate
 how to do requests with Axios in a service

 - The function getAll shows how to do a GET request
 - The function updateStatus shows how to do a POST request with a parameter
   in the URL and a payload
*/

import { axios, AxiosResponse } from '@/plugins/axios';

import { DataPagination } from 'vuetify';

interface Payload {
	example: string;
}

export function getAll(pagination: DataPagination): Promise<AxiosResponse> {
	return axios.get('/api/all', {
		params: {
			pagination
		}
	});
}

export function updateStatus(id: string, payload: Payload): Promise<AxiosResponse> {
	return axios.post(`/api/${id}/status`, payload);
}
