import axios from 'axios';

/** Axios instance to request our APIs */
const instance = axios.create({
	withCredentials: false,
	baseURL: 'digital-design-system.netlify.app/.netlify/functions',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export {
	instance as axios
};
