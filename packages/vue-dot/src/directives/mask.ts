import { DirectiveOptions } from 'vue';

import maskit from '../functions/mask';
import tokens from '../helpers/maskTokens';

const mask: DirectiveOptions = {
	inserted(el, binding) {
		const input = el as HTMLInputElement;

		let config = binding.value;
		const oldValue = '';

		if (Array.isArray(config) || typeof config === 'string') {
			config = {
				mask: config,
				tokens
			};
		}

		if (input.tagName.toLocaleUpperCase() !== 'INPUT') {
			const els = input.getElementsByTagName('input');

			if (els.length !== 1) {
				throw new Error('v-mask directive requires 1 input, found ' + els.length);
			} else {
				el = els[0];
			}
		}

		input.oninput = (evt) => {
			// Avoid infinite loop
			if (!evt.isTrusted) {
				return;
			}

			// By default, keep cursor at same position as before the mask
			let position = input.selectionEnd;

			if (!position) {
				return;
			}

			// Save the character just inserted
			const digit = input.value[position - 1];

			input.value = maskit(input.value, config.mask, true, config.tokens);

			// If the digit was changed, increment position until find the digit again
			while (position < input.value.length && input.value.charAt(position - 1) !== digit) {
				position++;
			}

			if (input === document.activeElement) {
				input.setSelectionRange(position, position);

				setTimeout(() => {
					// Account for the caret jumping backwards, see issue #49
					// by substracting Math.sign, we decrement the absolute value by 1
					let lengthDiff = input.value.length - oldValue.length;

					lengthDiff = lengthDiff - Math.sign(lengthDiff);
					position = (position || 0) + lengthDiff;
					input.setSelectionRange(position, position);
				}, 0);
			}

			input.dispatchEvent(new Event('input'));
		};

		const newDisplay = maskit(input.value, config.mask, true, config.tokens);

		if (newDisplay !== input.value) {
			input.value = newDisplay;
			input.dispatchEvent(new Event('input'));
		}
	}
};

export default mask;
