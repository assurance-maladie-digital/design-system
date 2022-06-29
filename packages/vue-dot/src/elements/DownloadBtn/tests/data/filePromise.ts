import { AxiosResponse } from 'axios';
import { ContentHeadersEnum } from '../../ContentHeadersEnum';

/** Returns a promise that returns a file */
export function filePromise(): Promise<AxiosResponse<string>> {
	return new Promise((resolve) => {
		resolve({
			data: 'test',
			status: 200,
			statusText: 'OK',
			headers: {
				[ContentHeadersEnum.TYPE]: 'text/plain',
				[ContentHeadersEnum.DISPOSITION]: 'attachment; filename="attestation.txt"'
			},
			config: {}
		});
	});
}
