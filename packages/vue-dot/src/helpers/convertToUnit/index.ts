/**
 * Convert value to CSS unit
 *
 * @param {string|number|null|undefined} str The value to convert
 * @param {string} [unit=px] The CSS unit
 * @returns {string|undefined} The converted value
 */
export function convertToUnit(str: string | number | null | undefined, unit = 'px'): string | undefined {
	if (str === undefined || str === null || str === '') {
		return undefined;
	// Convert to number, if NaN it's a string with
	// unit, use as is. Else it's a number
	} else if (isNaN(+str)) {
		return String(str);
	} else {
		return `${Number(str)}${unit}`;
	}
}
