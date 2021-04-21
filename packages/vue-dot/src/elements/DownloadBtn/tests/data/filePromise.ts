import { AxiosResponse } from 'axios';

/** Returns a promise that returns a file */
export function filePromise(): Promise<AxiosResponse<string>> {
	return new Promise((resolve) => {
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
}
