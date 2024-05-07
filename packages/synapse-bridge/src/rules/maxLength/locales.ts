import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages<number> = {
	default: (max: number) => `La longueur maximale du champ doit être de ${max} caractères.`
};
