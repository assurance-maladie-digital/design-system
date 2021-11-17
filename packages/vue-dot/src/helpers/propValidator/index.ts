/** Validate a prop against a set of values */
export function propValidator(propName: string, acceptedValues: string[], value: string): boolean {
	const stringValues = acceptedValues.join('|');
	const formattedValues = `(${stringValues})`;
	const valuesRegexp = new RegExp(`^${formattedValues}$`);

	const isValid = value.match(valuesRegexp) !== null;

	if (!isValid) {
		// eslint-disable-next-line no-console
		console.error(`Wrong value for the \`${propName}\` prop. Given: "${value}", expected "${formattedValues}".`);
	}

	return true;
}
