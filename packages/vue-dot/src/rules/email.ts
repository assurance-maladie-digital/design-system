const defaultErrorMessages = {
	default: 'L\'email saisi est invalide.'
};

/** Check that the email is valid */
export function email(errorMessages = defaultErrorMessages) {
	return function(value: string) {
		const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		return emailRegex.test(value) || errorMessages.default;
	};
}

export default email();
