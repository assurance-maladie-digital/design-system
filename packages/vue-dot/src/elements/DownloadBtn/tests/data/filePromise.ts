import { AxiosResponse } from 'axios';

export const filePromise: Promise<AxiosResponse<string>> = new Promise((resolve) => {
	resolve({
		data: 'test',
		status: 200,
		statusText: 'OK',
		headers: {
			'Content-Disposition': 'attachment; filename="attestation.txt"',
			'Content-Type': 'text/plain'
		},
		config: {}
	});
});
