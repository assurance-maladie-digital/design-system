import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';

import { isEmailValid } from '../../functions/validation/isEmailValid';

import { defaultErrorMessages } from './locales';

/** Check that the value is a valid email */
export function emailFn(errorMessages: ErrorMessages = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		return isEmailValid(value) || ruleMessage(errorMessages, 'default');
	};
}

export const email = emailFn();
