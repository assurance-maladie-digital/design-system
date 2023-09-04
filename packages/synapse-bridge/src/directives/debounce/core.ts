import { debounce } from '../../functions/debounce';

import { DirectiveValue, Modifiers } from './types';

/**
 * Ensure that the element we're attaching to is an input element
 * If not try to find an input element in this children
 */
export function getInputElement(el: HTMLElement): HTMLInputElement {
	const inputElement = el instanceof HTMLInputElement ? el : el.querySelector('input');

	/* istanbul ignore next */
	if (!inputElement) {
		throw new Error('The debounce directive requires an input element');
	}

	return inputElement;
}

/** Get the time modifier from the modifiers object */
export function getTimeModifier(modifiers: Modifiers): number | undefined {
	const MODIFIER_INDEX = 0;
	const modifiersArray = Object.keys(modifiers);

	return parseInt(modifiersArray[MODIFIER_INDEX], 10) || undefined;
}

/** Get the input event handler */
export function getInputHandler(inputElement: HTMLInputElement, value: DirectiveValue, time?: number): () => void {
	return debounce(() => {
		// When used with custom inputs, the value is a function
		if (typeof value === 'function') {
			value(inputElement.value);

			return;
		}

		inputElement.dispatchEvent(new Event('change'));
	}, time);
}
