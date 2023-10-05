type AcceptedFormats = string | number | null | undefined

/** Convert a value to CSS unit */
export function convertToUnit(str: AcceptedFormats, unit = 'px'): string | undefined {
	if (str === undefined || str === null || str === '') {
		return undefined
	} else if (isNaN(+str)) { // If NaN, it's a string with unit, use as is
		return String(str)
	} else {
		return `${Number(str)}${unit}`
	}
}
