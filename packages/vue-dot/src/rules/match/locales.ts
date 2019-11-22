import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages<string> = {
			default: (regex: string) =>
				`format accepter : ${regex}`
		};
