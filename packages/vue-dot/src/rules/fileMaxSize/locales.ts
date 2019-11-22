import { ErrorMessages } from '../types';

import calcHumanFileSize from '../../functions/calcHumanFileSize';

const fileSizeUnits = ['o', 'Ko', 'Mo', 'Go', 'To'];

export const defaultErrorMessages: ErrorMessages<number> = {
			default: (max: number) =>
				`La taille maximum est ${calcHumanFileSize(max, fileSizeUnits)}`
		};
