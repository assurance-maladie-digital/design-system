import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages<number> = {
	default: (max: number) => `La longueur maximale du champ est ${max} caractères.`
};
