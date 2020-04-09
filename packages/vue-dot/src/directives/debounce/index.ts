import { DirectiveOptions } from 'vue';

import { debounce as debounceFn } from '../../functions/debounce';

/** v-debounce directive */
export const debounce: DirectiveOptions = {
	bind(el, binding) {
		// If the tag the directive is binded to
		// isn't an input, find one in his children elements

		// This is used for custom inputs, eg. VTextField
		if (el.tagName !== 'INPUT') {
			const input = el.querySelector('input');

			if (input) {
				// Update `el` variable to have the right element
				el = input;
			}
		}

		const modifiers = Object.keys(binding.modifiers);

		// The first modifier is the time
		const time = modifiers[0] !== undefined ? parseInt(modifiers[0], 10) : undefined;

		// Change debounce only if interval has changed
		el.oninput = debounceFn(() => {
			// If the value is a function (for usage with custom inputs),
			// call it with the input value
			if (typeof binding.value === 'function') {
				const inputValue = (el as HTMLInputElement).value;

				binding.value(inputValue);
			} else {
				// Else, fire a change event
				el.dispatchEvent(new Event('change'));
			}
		}, time);
	}
};
