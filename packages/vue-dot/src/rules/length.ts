const defaultErrorMessages = {
	default: (max: number) => `La longeur maximale du champ est ${max} caractères.`
};

/** Check that the field does not exceeds the max length */
export function length(max: number, errorMessages = defaultErrorMessages) {
	// Return the validation function
	return function(value: string) {
		return !!value && value.length < max || errorMessages.default(max);
	};
}

export default length;
