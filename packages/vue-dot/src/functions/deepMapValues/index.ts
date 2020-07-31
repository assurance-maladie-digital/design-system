/* eslint-disable @typescript-eslint/no-explicit-any */
type UnknownValue = any;

export interface MappedValues {
	[key: string]: UnknownValue
}

/**
 * Return the mapped values for each first deep finded key of each sub collection
 *
 * @param {any} collection The collection to inspect deeply
 * @param {string| number} key The key/index to assign the value for the parent key
 * @param {any} mappedValues The new collection of mapped values
 * @returns {any} The new collection
 */
export function deepMapValues<T = any>(
	collection: UnknownValue,
	key: string | number,
	mappedValues: MappedValues = {}
): MappedValues {
	if (typeof collection === 'object' && !(Array.isArray(collection))) {
		Object.getOwnPropertyNames(collection).forEach(collectionKey => {
			// Check if the collectionKey equal the desired key
			// else, continue deep find
			if (
				typeof collection[collectionKey] === 'object' &&
				collection[collectionKey].hasOwnProperty(key)
			) {
				// Assign the desired value to the current collectionKey if it's not null
				if (collection[collectionKey][key]) {
					mappedValues[collectionKey] = collection[collectionKey][key];
				}
			} else {
				deepMapValues(
					collection[collectionKey],
					key,
					mappedValues
				);
			}
		});
	}

	return mappedValues;
}
