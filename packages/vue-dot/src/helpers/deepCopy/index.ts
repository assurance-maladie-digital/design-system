/**
 * Deep copy an object or an array without reference
 *
 * @param {any} o The value to copy
 * @returns {any} The copied value (can be typed if needed)
 */
export function deepCopy<T = any>(o: any): T {
	let copy = o;
	let k;

	if (o && typeof o === 'object') {
		copy = Object.prototype.toString.call(o) === '[object Array]' ? [] : {};

		for (k in o) {
			if (o[k]) {
				copy[k] = deepCopy(o[k]);
			}
		}
	}

	return copy;
}
