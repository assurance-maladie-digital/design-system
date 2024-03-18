/* eslint-disable @typescript-eslint/no-explicit-any */
type UnknownValue = any;

/** Deep copy an object or an array without reference */
export function deepCopy<T = any>(o: UnknownValue): T {
	let copy = o;
	let k;

	if (o && typeof o === 'object') {
		copy = Object.prototype.toString.call(o) === '[object Array]' ? [] : {};

		for (k in o) {
			if (o[k] !== undefined) {
				copy[k] = deepCopy(o[k]);
			}
		}
	}

	return copy;
}
