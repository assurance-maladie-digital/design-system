import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages<number> = {
			default: (length: number) =>
				`La longeur du champ doit être de ${length} caractères`
		};
