import ruleMessage from '../../helpers/ruleMessage';
import { ErrorMessages } from '../types';

const defaultErrorMessages: ErrorMessages = {
	default: 'L\'email saisi est invalide'
};

/** Check that the email is valid */
export function email(errorMessages = defaultErrorMessages) {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		return emailRegex.test(value) || ruleMessage(errorMessages, 'default');
	};
}

export default email();
