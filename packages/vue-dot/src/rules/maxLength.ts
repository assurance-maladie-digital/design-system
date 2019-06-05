const defaultErrorMessages = {
	default: (max: number) => `La longeur maximale du champ est ${max} caractères.`
};

/** Check that the field does not exceeds the max length */
export function maxLength(max: number, errorMessages = defaultErrorMessages) {
	// Return the validation function
	return function(value: string) {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return value.length < max || errorMessages.default(max);
	};
}

export default maxLength;
