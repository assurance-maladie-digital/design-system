import ruleMessage from '../../helpers/ruleMessage';
import { ErrorMessages } from '../types';

const defaultErrorMessages: ErrorMessages<number> = {
	default: (max: number) => `La longeur maximale du champ est ${max} caractères`
};

/** Check that the field does not exceeds the max length */
export function maxLength(max: number, errorMessages = defaultErrorMessages) {
	// Return the validation function
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return value.length < max || ruleMessage(errorMessages, 'default', [max]);
	};
}

export default maxLength;
