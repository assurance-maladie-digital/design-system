const errorMessages = {
	default: 'Le champ est requis.'
};

/** Check that the field is non-empty */
function required(value: string) {
	// If the value is falsy (empty string),
	// it will return the error message

	// If the value is evaluated to true (non-empty string),
	// it will return true (success)
	return Boolean(value) || errorMessages.default;
}

export default required;
