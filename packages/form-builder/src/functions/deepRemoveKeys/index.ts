/**
 * Deep remove a list of keys in object or array
 *
 * @param {any} collection The collection to inspect deeply
 * @param {string|string[]} keys The keys to delete
 * @returns {any} The new collection
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
