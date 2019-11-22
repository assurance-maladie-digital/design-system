import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages<string> = {
			default: (accepted: string) =>
				`Ne doit pas contenir => ${accepted}`
		};
