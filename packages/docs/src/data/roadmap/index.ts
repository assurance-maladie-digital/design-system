import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';
import { RoadmapSection } from '~/types/roadmap';

export const roadmap: IndexedObject<RoadmapSection[]> = {
	current: [
		{
			version: '2.2.0',
			date: 'Novembre 2021',
			description: 'Accessibilité : documentation des bonnes pratiques et passage en revue des composants.',
			items: [
				{
					title: 'Documentation accessibilité',
					description: 'Documentation des bonnes pratique et des critères d’accessibilité pour les développeurs.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1625
				},
				{
					title: 'Fichier Figma v1.0',
					description: 'Faire l’inventaire des composants manquants ainsi que ceux à nettoyer ou à mettre à jour.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1627
				},
				{
					title: 'Composant Captcha',
					description: 'Intégration et test du composant captcha.',
					label: LabelMappingEnum.NEW,
					issue: 1495
				},
				{
					title: 'Footer',
					description: 'Refonte graphique du footer en prenant en compte les retours d’accessibilité.',
					label: LabelMappingEnum.REFACTORING,
					issue: 1597
				},
				{
					title: 'Guide sur les appels API',
					description: 'Ajout d’un guide expliquant comment appeler une API avec axios.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1278
				},
				{
					title: 'Documentation des classes utilitaires',
					description: 'Documentation des classes utilitaires CSS.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1523
				},
				{
					title: 'Revue des composants',
					description: 'Passage en revue des composants pour vérifier l’accessibilité de ceux-ci.',
					label: LabelMappingEnum.REFACTORING
				}
			]
		}
	],
	next: [
		{
			version: '2.3.0',
			date: 'Décembre 2021',
			description: 'Expérience développeur : configuration des outils de qualité de code, prise en compte des retours des équipes et complétion de la documentation.',
			items: [
				{
					title: 'Consentement cookies',
					description: 'Intégration du composant pour le recueil du consentement des utilisateurs.',
					label: LabelMappingEnum.NEW,
					issue: 1417
				},
				{
					title: 'Ajout de la recherche',
					description: 'Ajout de la recherche à la documentation.',
					label: LabelMappingEnum.NEW,
					issue: 1278
				},
				{
					title: 'Documentation des fonctions',
					description: 'Documentation des fonctions utilitaires.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1275
				},
				{
					title: 'ESLint',
					description: 'Ajout d’un package pour partager la configuration d’ESLint.',
					label: LabelMappingEnum.NEW,
					issue: 980
				},
				{
					title: 'Présentation du Design System',
					description: 'Présentation de l’historique du Design System, des compétences et de l’organisation de l’équipe.',
					label: LabelMappingEnum.DOCUMENTATION
				}
			]
		},
		{
			version: '2.4.0',
			date: 'Janvier 2022',
			description: 'Starter Kit : découpage des fonctionnalités, ajout du rendu côté serveur et d’un template pour la création de librairies.',
			items: [
				{
					title: 'Découpage du Starter Kit',
					description: 'Découpage du Starter Kit par fonctionnalités',
					label: LabelMappingEnum.REFACTORING
				},
				{
					title: 'Rendu côté serveur',
					description: 'Ajout d’une option dans le Starter Kit pour utiliser Nuxt.js.',
					label: LabelMappingEnum.NEW
				},
				{
					title: 'Template de librairie',
					description: 'Ajout d’un template pour la création de librairies.',
					label: LabelMappingEnum.NEW
				}
			]
		},
		{
			version: '2.5.0',
			date: 'Février 2022',
			description: 'Ajout de nouveaux composants selon les besoins projets.',
			items: [
				{
					title: 'Visualisation de données',
					description: 'Définition des différents types de graphiques.',
					label: LabelMappingEnum.DOCUMENTATION
				},
				{
					title: 'Documentation éco-conception',
					description: 'Définition des principes d’éco-conception.',
					label: LabelMappingEnum.DOCUMENTATION
				}
			]
		},
		{
			version: '3.0.0',
			date: 'Avril/Mai 2022',
			description: 'Migration vers Vue.js 3 : réécriture des composants avec l’API de composition, mise à jour du Starter Kit et modifications majeures.',
			items: []
		}
	]
};
