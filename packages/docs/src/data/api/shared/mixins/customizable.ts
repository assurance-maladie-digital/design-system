import { Props } from "~/types";

export function customizable(example: string, otherComponents?: string): Props {
	const descriptionComplement = otherComponents ? ` ${otherComponents}` : '';

	return [
		{
			name: 'vuetify-options',
			type: 'Options',
			default: 'undefined',
			description: `Personnalisation des composants Vuetify${descriptionComplement} en utilisant la directive \`customizable\`.`,
			example
		}
	];
}
