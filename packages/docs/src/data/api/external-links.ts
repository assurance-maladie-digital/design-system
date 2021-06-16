import { Api } from '~/types';

export const api: Api = {
    EternalLinks: {
        props: [
            {
				name: 'position',
				type: 'string',
                required: true,
				default: true,
				description: 'Contrôler le positionnement du bouton. Choix possible: `top left` ,  `top right` , `bottom left` ou `bottom right`',
                example: `position="top left"`
			},
            {
				name: 'items',
				type: [
					'ExternalLink',
					'ExternalLink[]'
				],
				default: '[]',
				description: 'La liste des liens externes à afficher.'
			},
            {
				name: 'btnText',
				type: 'string',
                default:'Consulter les données externes',
				description: 'Attribuer une etiquette au bouton.'
			},
            {
				name: 'fixed',
				type: 'boolean',
                default:false,
				description: 'Postionnement en fixe ou absolute.'
			},
        ]
    }
}