import { ruleMessage } from '../../helpers/ruleMessage';
import { ValidationRule, ValidationResult, ErrorMessages, Value } from '../types';

import { defaultErrorMessages } from './locales';

/** Check that the value match the specified pattern */
export function matchPatternFn(pattern: RegExp, errorMessages: ErrorMessages<number> = defaultErrorMessages): ValidationRule {
	return (value: Value): ValidationResult => {
		if (!value) {
			return true;
		}

		const matches = value.match(pattern);

		return matches && matches.length > 0 || ruleMessage(errorMessages, 'default');
	};
}

export const matchPattern = matchPatternFn;
