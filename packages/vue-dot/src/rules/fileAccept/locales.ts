import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages<string> = {
			default: (accepted: string) =>
				`Format de fichier incorrect, les formats acceptés sont ${accepted}`
		};
