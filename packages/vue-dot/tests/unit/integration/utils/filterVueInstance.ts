import { VueInstance } from './types';

/**
 * Filter out globally registered elements from a Vue instance property
 *
 * @param {VueInstance} instance The Vue instance
 * @param {string[]} defaults The elements to filter out
 * @param {string} property The property to filter (eg. components or directives)
 */
export function filterVueInstance(instance: VueInstance, defaults: string[], property: string): string[] {
	const instanceElements = Object.keys(instance.options[property]);

	// Remove default elements
	const elements = instanceElements.filter((element) => {
		return !defaults.includes(element);
	});

	return elements.sort();
}
