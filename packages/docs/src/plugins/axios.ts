import axios from 'axios';

/** Axios instance to request our APIs */
const instance = axios.create({
	withCredentials: false,
	//TODO change to env var
	baseURL: 'http://localhost:9999/.netlify/functions',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export {
	instance as axios
};
