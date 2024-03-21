import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';

import { defaultErrorMessages } from './locales';

/** Check that the value does not exceeds the specified length */
export function exactLengthFn(lengthValue: number, ignoreSpaces = false, errorMessages: ErrorMessages<number> = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		if (ignoreSpaces) {
			value = value.replace(/\s/g, '');
		}

		return value.length === lengthValue || ruleMessage(errorMessages, 'default', [lengthValue]);
	};
}

export const exactLength = exactLengthFn;
