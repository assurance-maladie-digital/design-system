import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';
import { RoadmapSection } from '~/types/roadmap';

export const roadmap: IndexedObject<RoadmapSection[]> = {
	current: [
		{
			version: '2.8.0',
			date: 'Novembre 2022',
			description: 'Mise à jour de composants et complétion de la documentation.',
			items: [
				{
					title: 'Mise à jour de la typographie',
					description: 'Intégration des nouveaux styles typographiques.',
					label: LabelMappingEnum.NEW,
					issue: 2125
				},
				{
					title: 'Nouveau composant filtre',
					description: 'Ajout du nouveau composant filtre.',
					label: LabelMappingEnum.NEW,
					issue: 2287
				},
				{
					title: 'Classes de couleur',
					description: 'Documentation de l’utilisation des classes de couleur.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 2261
				}
			]
		},
		{
			version: '3.0.0',
			date: 'À partir de novembre 2022',
			description: 'Migration vers Vue.js 3 : réécriture des composants avec l’API de composition, mise à jour du Starter Kit et modifications majeures.',
			items: [
				{
					title: 'RFC Nuxt',
					description: 'Étude sur l’utilisation de Nuxt pour le Starter Kit.',
					label: LabelMappingEnum.NEW,
					issue: 2269
				},
				{
					title: 'RFC sur la syntaxe des composants',
					description: 'Étude sur la nouvelle syntaxe des composants.',
					label: LabelMappingEnum.NEW,
					issue: 2270
				},
				{
					title: 'RFC sur Vue i18n',
					description: 'Étude sur l’utilisation de Vue i18n.',
					label: LabelMappingEnum.NEW,
					issue: 2271
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
