import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';
import { RoadmapSection } from '~/types/roadmap';

export const roadmap: IndexedObject<RoadmapSection[]> = {
	current: [
		{
			version: '2.6.0',
			date: 'Août 2022',
			description: 'Mise à jour de composants et complétion de la documentation.',
			items: [
				{
					title: 'Ajout du composant PhoneField',
					description: 'Ajout d’un composant permettant la saisie d’un numéro de téléphone.',
					label: LabelMappingEnum.NEW,
					issue: 2178
				},
				{
					title: 'Mise à jour de la typographie',
					description: 'Mise à jour des règles typographiques et des typographies utilisées.',
					label: LabelMappingEnum.REFACTORING,
					issue: 1794
				},
				{
					title: 'Guide sur les tests unitaires',
					description: 'Ajour d’un guide sur la rédaction des tests unitaires.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 2136
				},
				{
					title: 'Guide sur les tests e2e',
					description: 'Ajour d’un guide sur la rédaction des tests d’interface.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 2137
				},
				{
					title: 'Documentation du module de notification',
					description: 'Documentation du module Vuex de notification.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 2052
				},
				{
					title: 'Visualisation de données',
					description: 'Définition des différents types de graphiques.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1863
				},
				{
					title: 'Connexion',
					description: 'Ajout d’un template de connexion.',
					label: LabelMappingEnum.NEW,
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
