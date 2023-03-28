import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';
import { RoadmapSection } from '~/types/roadmap';

export const roadmap: IndexedObject<RoadmapSection[]> = {
	current: [
		{
			version: '2.9.0',
			date: 'Janvier 2022',
			description: 'Mise à jour de composants et complétion de la documentation.',
			items: [
				{
					title: 'Nouveau composant filtre',
					description: 'Ajout du nouveau composant filtre.',
					label: LabelMappingEnum.NEW,
					issue: 2287
				},
				{
					title: 'Nouveau composant BackToTopBtn',
					description: 'Ajout du nouveau composant BackToTopBtn.',
					label: LabelMappingEnum.NEW,
					issue: 2425
				},
				{
					title: 'Nouveaux templates d’erreur',
					description: 'Ajout des templates MaintenancePage et NotFoundPage.',
					label: LabelMappingEnum.NEW,
					issue: 2384
				},
				{
					title: 'Nouveau composant lien d’évitement',
					description: 'Ajout du nouveau composant A11yBanner.',
					label: LabelMappingEnum.NEW,
					issue: 2267
				},
				{
					title: 'Nouveau composant liste réductible',
					description: 'Ajout du nouveau composant CollapsibleList.',
					label: LabelMappingEnum.NEW,
					issue: 2454
				},
				{
					title: 'Nouveau composant logo et identité de marque',
					description: 'Ajout du nouveau composant LogoBrandSection.',
					label: LabelMappingEnum.NEW,
					issue: 2455
				}
			]
		},
		{
			version: '3.0.0',
			date: 'Depuis fin 2022',
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
