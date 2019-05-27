const errorMessages = {
	default: (max: number) => `La longeur maximale du champ est ${max} caractères.`
};

/** Check that the field does not exceeds the max length */
function length(max: number) {
	// Return the validation function
	return function(value: string) {
		value.length < max || errorMessages.default(max);
	}
}

export default length;
