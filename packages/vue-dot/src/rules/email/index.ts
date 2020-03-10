import { ruleMessage } from '../../helpers/ruleMessage';

import { isEmailValid } from '../../functions/validation/isEmailValid';

import { defaultErrorMessages } from './locales';

/** Check that the email is valid */
export function emailFn(errorMessages = defaultErrorMessages) {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return isEmailValid(value) || ruleMessage(errorMessages, 'default');
	};
}

export const email = emailFn();
