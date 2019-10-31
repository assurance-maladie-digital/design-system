// Exemple service
import axios from '@/plugins/axios';

const folders = {
	getAll(pagination: object) {
		return axios.get('/api/all', {
			params: {
				pagination
			}
		});
	},
	updateStatus(id: string, payload: object) {
		return axios.post(`/api/${id}/status`, payload);
	}
};

export default folders;
