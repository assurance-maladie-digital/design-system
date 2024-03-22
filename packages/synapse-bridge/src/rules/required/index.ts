import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages } from '../types';

import { defaultErrorMessages } from './locales';

export type Value = string | string[] | null;

export function requiredFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule<Value> {
	return (value: Value): ValidationResult => {
		const valid = Array.isArray(value) ?
			value.length > 0 :
			Boolean(typeof value === 'string' ? value.trim() : value);

		return valid || ruleMessage(errorMessages, 'default');
	};
}

export const required = requiredFn();
