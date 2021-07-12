import { Props } from "~/types";

export function customizable(example: string): Props {
	return [
		{
			name: 'vuetify-options',
			type: 'Options',
			default: 'undefined',
			description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
			example
		}
	];
}
