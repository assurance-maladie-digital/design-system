/** Validate a prop against a set of values */
export function propValidator(propName: string, acceptedValues: string[], value: string): boolean {
	const stringValues = acceptedValues.join('|')
	const formattedValues = `(${stringValues})`
	const valuesRegexp = new RegExp(`^${formattedValues}$`)

	const isValid = value.match(valuesRegexp) !== null

	if (!isValid) {
		const error = `Wrong value for the \`${propName}\` prop.`
		const explanation = `Given: "${value}", expected "${formattedValues}".`

		console.error(error, explanation)
	}

	return true
}
