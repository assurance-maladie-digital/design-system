/*
 Here are a example service to illustrate
 how to do requests with Axios in a service

 - The function getAll shows how to do a GET request
 - The function updateStatus shows how to do a POST request with a parameter
   in the URL and a payload
*/

import { axios } from '@/plugins/axios';

export function getAll(pagination: object) {
	return axios.get('/api/all', {
		params: {
			pagination
		}
	});
}

export function updateStatus(id: string, payload: object) {
	return axios.post(`/api/${id}/status`, payload);
}
