import { Api } from '~/types';

export const api: Api = {
	CopyBtn: {
		props: [
			{
				name: 'text-to-copy',
				type: [
					'string',
					'function'
				],
				description: 'Le texte à copier ou une **fonction** qui le `retourne`. La fonction sera exécutée lors du clic sur le bouton.',
				required: true
			},
			{
				name: 'hide-tooltip',
				type: 'boolean',
				description: 'Masque le `VTooltip`.',
				default: false
			},
			{
				name: 'tooltip-dution',
				type: 'number',
				description: `La durée d'affichage du tooltip en millisecondes.`,
				default: 'gh:sortItems'
			},
			{
				name: 'tooltip-duration',
				type: 'number',
				description: `La durée d'affichage du tooltip en millisecondes.`,
				default: 2500
			},
			{
				name: 'vuetify-opns',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: undefined
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: null
			}
		],
		slots: [
			{
				name: 'icon',
				description: `Slot pour remplacer l'icône par défaut.`
			},
			{
				name: 'tooltip',
				description: 'Slot pour remplacer le contenu du tooltip.'
			},
			{
				name: 'default',
				description: 'Slot pour remplacer le contenu du tooltip.',
				props: {
					items: 'any[]',
					options: {
						page: 'number',
						itemsPerPage: 'number',
						pageStart: 'number',
						pageStop: 'number',
						pageCount: 'number',
						itemsLength: 'number',
					},
					groupedItems: 'Record<string, any[]>',
					updateOptions: '(obj: any) => void',
					sort: '(value: string) => void',
					group: '(value: string) => void'
				}
			}
		],
		events: [
			{
				name: 'click',
				value: 'Event',
				description: 'Exemple'
			}
		],
		argument: [
			{
				name: 'value',
				description: '',
				type: ['((e: Event) => void)', 'ClickOutsideBindingArgs'],
				default: undefined,
				example: {
					handler: '(e: Event) => void',
					'closeConditional?': '(e: Event) => boolean',
					'include?': '() => HTMLElement[]',
					handler2: '(e: Event) => void',
					'closeCondtional?': '(e: Event) => boolean',
					'include': '() => HTMLElement[]'
				}
			},
			{
				name: 'argument',
				description: '',
				type: ['((e: Event) => void)', 'ClickOutsideBindingArgs'],
				default: undefined,
				example: 'test'
			}
		],
		modifiers: [{
			name: 'ss',
			description: 'aa',
			type: ['((e: Event) => void)', 'ClickOutsideBindingArgs'],
			snippet: `
<template>
<v-card v-intersect="onIntersect">...</v-card>
</template>
<script>
export default {
  methods: {
    // Will be invoked on DOM mount and when the element is intersected
    onIntersect (entries, observer, isIntersecting) {}
  }
}
</script>`
		}
	]
}
};
