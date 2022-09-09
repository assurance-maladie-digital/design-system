import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';
import { RoadmapSection } from '~/types/roadmap';

export const roadmap: IndexedObject<RoadmapSection[]> = {
	current: [
		{
			version: '2.7.0',
			date: 'Septembre 2022',
			description: 'Mise à jour de composants et complétion de la documentation.',
			items: [
				{
					title: 'Mise à jour de la typographie',
					description: 'Mise à jour des règles typographiques et des typographies utilisées.',
					label: LabelMappingEnum.REFACTORING,
					issue: 1794
				},
				{
					title: 'Guide sur Vue i18n',
					description: 'Ajout d’un guide sur la gestion des textes avec Vue i18n.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 2209
				},
				{
					title: 'Guide sur la gestion des droits',
					description: 'Ajout d’un guide sur la gestion des droits avec Vue Browser Acl.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1690
				},
				{
					title: 'Guide sur les tests unitaires',
					description: 'Ajout d’un guide sur la rédaction des tests unitaires.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 2136
				},
				{
					title: 'Documentation du module de notification',
					description: 'Documentation du module Vuex de notification.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 2052
				}
			]
		}
	],
	next: [
		{
			version: '3.0.0',
			date: 'À partir de septembre 2022',
			description: 'Migration vers Vue.js 3 : réécriture des composants avec l’API de composition, mise à jour du Starter Kit et modifications majeures.',
			items: [
				{
					title: 'Étude sur le nouveau Starter Kit',
					description: 'Étude sur les nouveautés et modifications comprises dans le nouveau Starter Kit.',
					label: LabelMappingEnum.NEW
				},
				{
					title: 'Nouveau Starter Kit',
					description: 'Création du nouveau Starter Kit.',
					label: LabelMappingEnum.NEW
				}
			]
		}
	]
};
