const defaultErrorMessages = {
	default: 'L\'email saisi est invalide.'
};

/** Check that the email is valid */
export function email(errorMessages = defaultErrorMessages) {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		return emailRegex.test(value) || errorMessages.default;
	};
}

export default email();
