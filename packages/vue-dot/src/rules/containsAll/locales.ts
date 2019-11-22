import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages<string> = {
			default: (accepted: string) =>
				`Doit contenir => ${accepted}`
		};
