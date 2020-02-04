/**
 * Deep remove a list of keys in object or array
 *
 * @param {any} obj The parent object to inspect deeply
 * @returns {string | string[]} keys to be deleted
 */
function deepRemoveKeys<T = any>(obj: any, keys: string | string[]): T {
	if (obj instanceof Array) {
		obj.forEach((item) => {
			deepRemoveKeys(item, keys);
		});
	} else if (typeof obj === 'object') {
		Object.getOwnPropertyNames(obj).forEach((key) => {
			if (keys.indexOf(key) !== -1) {
				delete obj[key];
			} else {
				deepRemoveKeys(obj[key], keys);
			}
		});
	}

	return obj;
}

export { deepRemoveKeys };
