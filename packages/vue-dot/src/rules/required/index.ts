import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages } from '../types';

import { defaultErrorMessages } from './locales';

export type Value = string | string[] | null;

/** Check that the value is not empty */
export function requiredFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule<Value> {
	return (value: Value): ValidationResult => {
		let valid: boolean;

		if (Array.isArray(value)) {
			valid = value.length !== 0;
		} else {
			// If the value is falsy (empty string),
			// it will return the error message

			// If the value is evaluated to true (non-empty string),
			// it will return true (success)
			if (typeof value === 'string') {
				valid = Boolean(value.trim());
			} else {
				valid = Boolean(value);
			}
		}

		return valid || ruleMessage(errorMessages, 'default');
	};
}

export const required = requiredFn();
