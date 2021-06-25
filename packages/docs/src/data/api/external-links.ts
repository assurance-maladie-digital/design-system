import { Api } from '~/types';

export const api: Api = {
    EternalLinks: {
        props: [
            {
				name: 'position',
				type: 'string',
                required: true,
				default: true,
				description: 'Definir le mode de positionnement du défilement du bouton-menu dans la page. Choix possible: `top left` ,  `top right` , `bottom left` ou `bottom right`',
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
               name: 'nudgeTop',
			   type: '[string, number]',
			   default: '0',
			   description: 'Décaler le bouton-menu un peu plus vers le haut.'
			},
			{
				name: 'nudgeBottom',
				type: '[string, number]',
				default: '0',
				description: 'Décaler le bouton-menu un peu plus vers le bas.'
			 },
            {
				name: 'fixed',
				type: 'boolean',
                default:false,
				description: 'Postionnement en mode fixe ou absolute.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: 'undefined',
				example: `{
	menu: 'VMenu',
	btn: 'VBtn',
	btnIcon: 'VIcon'
}`
			}
        ]
    }
}
