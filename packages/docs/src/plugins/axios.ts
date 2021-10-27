import axios from 'axios';

/** Axios instance to request our APIs */
const instance = axios.create({
	withCredentials: false,
	baseURL: process.env.API_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export {
	instance as axios
};
