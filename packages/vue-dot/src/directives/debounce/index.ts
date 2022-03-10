import { DirectiveOptions } from 'vue';

import { getInputElement, getInputHandler, getTimeModifier } from './core';

export const debounce: DirectiveOptions = {
	bind(el, { modifiers, value }) {
		const inputElement = getInputElement(el);
		const time = getTimeModifier(modifiers);

		const inputHandler = getInputHandler(inputElement, value, time);

		inputElement.addEventListener('input', inputHandler);
	}
};
