/**
 * Deep remove a list of keys in object or array
 *
 * @param {any} collection The parent object to inspect deeply
 * @returns {string | string[]} keys to be deleted
 */
export function deepRemoveKeys<T = any>(collection: any, keys: string | string[]): T {
	if (collection instanceof Array) {
		collection.forEach((item) => {
			deepRemoveKeys(item, keys);
		});
	} else if (typeof collection === 'object') {
		Object.getOwnPropertyNames(collection).forEach((key) => {
			if (keys.indexOf(key) !== -1) {
				delete collection[key];
			} else {
				deepRemoveKeys(collection[key], keys);
			}
		});
	}

	return collection;
}
