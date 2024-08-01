import { ruleMessage } from '../../helpers/ruleMessage';
import { isDateAfter } from '../../functions/validation/isDateAfter/index.ts';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';
import { defaultErrorMessages } from './locales';
import { TODAY } from '../../constants';

function formatDateToDDMMYYYY(date: Date): string {
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}

/** Vérifie que la valeur n'est pas après aujourd'hui (format DD/MM/YYYY) */
export function notAfterTodayFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}
		const formattedValue = typeof value === 'object' ? formatDateToDDMMYYYY(value) : value;
		if (isDateAfter(TODAY, formattedValue)) {
			return ruleMessage(errorMessages, 'default');
		}
		return true;
	};
}

export const notAfterToday = notAfterTodayFn();
