type UnknownValue = any;

/** Deep remove a list of keys in an object or an array */
export function deepRemoveKeys<T = any>(
  collection: UnknownValue,
  keys: string | string[],
): T {
  if (Array.isArray(collection)) {
    collection.forEach((item) => {
      deepRemoveKeys(item, keys);
    });
  }
 else if (typeof collection === 'object') {
    Object.getOwnPropertyNames(collection).forEach((key) => {
      if (keys.includes(key)) {
        delete collection[key];
      }
 else {
        deepRemoveKeys(collection[key], keys);
      }
    });
  }

  return collection;
}
