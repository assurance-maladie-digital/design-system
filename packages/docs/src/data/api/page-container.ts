import { Api } from '~/types';

export const api: Api = {
	PageContainer: {
		props: [
			{
				name: 'size',
				type: 'string',
				default: `'xl'`,
				description: 'La largeur du composant.',
				example: `'xl' | 'l' | 'm' | 's'`
			},
			{
				name: 'spacing',
				type: 'string',
				default: 'undefined',
				description: 'L’espacement externe du conteneur.<br>Par défaut :\n- `40px` verticalement\n- `32px` horizontalement, `16px` en `sm` et `0` en `xs`.'
			},
			{
				name: 'color',
				type: 'string',
				default: `'transparent'`,
				description: 'La couleur de fond du composant.'
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour afficher du contenu.'
			}
		]
	}
};
