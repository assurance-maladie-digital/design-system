import { VueConstructor } from 'vue';

import { filterVueInstance } from './filterVueInstance';
import { VueInstance } from './types';

/**
 * Get the custom components from the Vue instance
 *
 * @param {VueConstructor} Vue The Vue instance
 * @returns {string[]} The list of custom components
 */
export function getComponents(Vue: VueConstructor): string[] {
	const instance = Vue as VueInstance;
	const defaults = [
		'KeepAlive',
		'Transition',
		'TransitionGroup'
	];

	const components = filterVueInstance(instance, defaults, 'components');

	return components;
}

/**
 * Get the custom directives from the Vue instance
 *
 * @param {VueConstructor} Vue The Vue instance
 * @returns {string[]} The list of custom directives
 */
export function getDirectives(Vue: VueConstructor): string[] {
	const instance = Vue as VueInstance;
	const defaults = [
		'model',
		'show'
	];

	const directives = filterVueInstance(instance, defaults, 'directives');

	return directives;
}
