const defaultErrorMessages = {
	default: (min: number) => `La longeur minimale du champ est ${min} caractères.`
};

/** Check that the field exceeds the min length */
export function minLength(min: number, errorMessages = defaultErrorMessages) {
	// Return the validation function
	return function(value: string) {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		return value.length > min || errorMessages.default(min);
	};
}

export default minLength;
