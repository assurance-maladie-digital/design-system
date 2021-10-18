import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';
import { RoadmapSection } from '~/types/roadmap';

export const roadmap: IndexedObject<RoadmapSection[]> = {
	current: [
		{
			version: '2.1.0',
			date: 'Octobre 2021',
			description: 'Éléments génériques : header, footer et consentement utilisateur.',
			items: [
				{
					title: 'Header',
					description: 'Ajout d’un composant header qui prend en compte la nouvelle charte graphique de l’Assurance Maladie.',
					label: LabelMappingEnum.NEW,
					issue: 1087
				},
				{
					title: 'Footer',
					description: 'Refonte graphique du footer en prenant en compte les retours d’accessibilité.',
					label: LabelMappingEnum.REFACTORING,
					issue: 1398
				},
				{
					title: 'Composant Captcha',
					description: 'Intégration et test du composant captcha.',
					label: LabelMappingEnum.NEW,
					issue: 1495
				},
				{
					title: 'Consentement cookies',
					description: 'Définition des modalités de recueil du consentement des utilisateurs.',
					label: LabelMappingEnum.NEW,
					issue: 1416
				},
				{
					title: 'Fichier Figma v1.0',
					description: 'Migration des composants stables dans un fichier Figma en vue d’une version 1.0.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1494
				},
				{
					title: 'Guide sur les appels API',
					description: 'Ajout d’un guide expliquant comment appeler une API avec axios.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1278
				},
				{
					title: 'Ajout de la recherche',
					description: 'Ajout de la recherche à la documentation.',
					label: LabelMappingEnum.NEW,
					issue: 1278
				},
				{
					title: 'Tests unitaires des composants',
					description: 'Utiliser Cypress à la place de Vue Test Utils pour les tests unitaires des composants.',
					label: LabelMappingEnum.REFACTORING,
					issue: 1283
				}
			]
		}
	],
	next: [
		{
			version: '2.2.0',
			date: 'Novembre 2021',
			description: 'Accessibilité : documentation des bonnes pratiques et passage en revue des composants.',
			items: [
				{
					title: 'Documentation accessibilité',
					description: 'Documentation des recommandations et des critères d’accessibilité.',
					label: LabelMappingEnum.DOCUMENTATION
				},
				{
					title: 'Revue des composants',
					description: 'Passage en revue des composants pour assurer l’accessibilité.',
					label: LabelMappingEnum.REFACTORING
				}
			]
		},
		{
			version: '2.3.0',
			date: 'Décembre 2021',
			description: 'Expérience développeur : configuration des outils de qualité de code, prise en compte des retours des équipes et complétion de la documentation.',
			items: [
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
			date: 'Mars 2022',
			description: 'Migration vers Vue.js 3 : réécriture des composants avec l’API de composition et mise à jour du Starter Kit.',
			items: []
		}
	]
};
