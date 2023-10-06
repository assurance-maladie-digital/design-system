import { AxiosResponse } from 'axios';
import { ContentHeadersEnum } from '../../ContentHeadersEnum';

/** Returns a promise that returns a file */
export function filePromise(): Promise<AxiosResponse<Blob>> {
	return new Promise((resolve) => {
		resolve({
			data: new File(['test'], 'attestation.txt', { type: 'text/plain' }),
			status: 200,
			statusText: 'OK',
			headers: {
				[ContentHeadersEnum.TYPE]: 'text/plain',
				[ContentHeadersEnum.DISPOSITION]: 'attachment; filename="attestation.txt"'
			},
			config: {
				headers: {
					'Accept': 'application/json, text/plain, */*'
				} as any
			}
		});
	});
}

export function filePromiseError(): Promise<AxiosResponse<Blob>> {
	return new Promise((_, reject) => {
		reject({
			response: {
				data: 'error',
				status: 500,
				statusText: 'Internal Server Error',
				headers: {},
				config: {}
			}
		});
	});
}

export function filePromiseNoHeaders(): Promise<AxiosResponse<Blob>> {
	return new Promise((resolve) => {
		resolve({
			data: new File(['test'], 'attestation.txt', { type: 'text/plain' }),
			status: 200,
			statusText: 'OK',
			headers: {},
			config: {
				headers: {
					'Accept': 'application/json, text/plain, */*'
				} as any
			}
		});
	});
}
