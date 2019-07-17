import tokens from '../helpers/maskTokens';

/**
 * Mask a string,
 * eg. the value '10042019' with the mask '##/##/####'
 * will become '10/04/2019'
 */
export default function maskit(value: string = '', mask: string = '', masked = true) {
	let iMask = 0;
	let iValue = 0;

	let output = '';
	let cMask = '';

	while (iMask < mask.length && iValue < value.length) {
		cMask = mask[iMask];

		const masker = tokens[cMask];
		const cValue = value[iValue];

		if (masker && masker.pattern && !masker.escape) {
			if (masker.pattern.test(cValue)) {
				output += masker.transform ? masker.transform(cValue) : cValue;
				iMask++;
			}

			iValue++;
		} else {
			if (masker && masker.escape) {
				iMask++; // Take the next mask char and treat it as char
				cMask = mask[iMask];
			}

			if (masked) {
				output += cMask;
			}

			if (cValue === cMask) {
				iValue++; // User typed the same char
			}

			iMask++;
		}
	}

	// Fix mask that ends with a char: (#)
	let restOutput = '';

	while (iMask < mask.length && masked) {
		cMask = mask[iMask];

		if (tokens[cMask]) {
			restOutput = '';
			break;
		}

		restOutput += cMask;
		iMask++;
	}

	return output + restOutput;
}
