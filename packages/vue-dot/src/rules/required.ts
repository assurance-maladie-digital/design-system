import ruleMessage from '../helpers/ruleMessage';
import { ErrorMessages } from './types';

const defaultErrorMessages: ErrorMessages = {
	default: 'Le champ est requis.'
};

/** Check that the field is non-empty */
export function required(errorMessages = defaultErrorMessages) {
	return (value: string) => {
		// If the value is falsy (empty string),
		// it will return the error message

		// If the value is evaluated to true (non-empty string),
		// it will return true (success)
		return Boolean(value) || ruleMessage(errorMessages, 'default');
	};
}

export default required();
