import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages<number> = {
	default: (min: number) => `La longueur minimale du champ doit être de ${min} caractères.`
};
