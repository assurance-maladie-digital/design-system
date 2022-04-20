import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';
import { RoadmapSection } from '~/types/roadmap';

export const roadmap: IndexedObject<RoadmapSection[]> = {
	current: [
		{
			version: '2.4.0',
			date: 'Avril 2022',
			description: 'Ajout de nouveaux composants et complétion de la documentation.',
			items: [
				{
					title: 'Consentement cookies',
					description: 'Intégration du composant pour le recueil du consentement des utilisateurs.',
					label: LabelMappingEnum.NEW,
					issue: 1417
				},
				{
					title: 'Upload de plusieurs fichiers',
					description: 'Ajout ou modification d’un composant existant afin de permettre la sélection libre de plusieurs fichiers.',
					label: LabelMappingEnum.NEW,
					issue: 1738
				},
				{
					title: 'Guide sur les appels API',
					description: 'Ajout d’un guide expliquant comment appeler une API avec axios.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1278
				},
				{
					title: 'Documentation des fonctions',
					description: 'Documentation des fonctions utilitaires.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1275
				},
				{
					title: 'Documentation éco-conception',
					description: 'Définition des principes d’éco-conception.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1862
				},
				{
					title: 'Visualisation de données',
					description: 'Définition des différents types de graphiques.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1863
				}
			]
		}
	],
	next: [
		{
			version: '2.5.0',
			date: 'Mai 2022',
			description: 'Expérience développeur : configuration des outils de qualité de code, prise en compte des retours des équipes et complétion de la documentation.',
			items: [
				{
					title: 'Ajout de la recherche',
					description: 'Ajout de la recherche à la documentation.',
					label: LabelMappingEnum.NEW,
					issue: 1278
				},
				{
					title: 'Présentation du Design System',
					description: 'Présentation de l’historique du Design System, des compétences et de l’organisation de l’équipe.',
					label: LabelMappingEnum.DOCUMENTATION
				},
				{
					title: 'Rendu côté serveur',
					description: 'Ajout du rendu côté serveur au Starter Kit.',
					label: LabelMappingEnum.NEW
				},
				{
					title: 'Découpage du Starter Kit',
					description: 'Découpage du Starter Kit par fonctionnalités.',
					label: LabelMappingEnum.REFACTORING
				}
			]
		},
		{
			version: '3.0.0',
			date: 'À partir de juin 2022',
			description: 'Migration vers Vue.js 3 : réécriture des composants avec l’API de composition, mise à jour du Starter Kit et modifications majeures.',
			items: []
		}
	]
};
