import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
	withCredentials: false,
	baseURL: process.env.API_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export {
	instance as axios,
	AxiosResponse
};
