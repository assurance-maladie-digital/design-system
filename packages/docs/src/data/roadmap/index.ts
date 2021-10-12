import { IndexedObject } from '@cnamts/vue-dot/src/types';
import { RoadmapSection } from '~/types/roadmap';

export const roadmap: IndexedObject<RoadmapSection[]> = {
	current: [
		{
			version: '2.1.0',
			date: 'Octobre 2021',
			description: 'Éléments génériques : header, footer et consentement utilisateur.',
			items: [
				{
					title: 'Guide sur la gestion des variables d’environnement',
					description: 'Ajout d’un guide expliquant la gestion des variables d’environnement et leurs spécificités.',
					label: 'documentation',
					issue: '1279'
				},
				{
					title: 'Guide sur la création d’un v-model personnalisé',
					description: 'Ajout d’un guide expliquant la création d’un v-model personnalisé.',
					label: 'documentation',
					issue: '1272'
				},
				{
					title: 'Guide sur l’utilisation du store',
					description: 'Ajout d’un guide expliquant quand et comment utiliser le store.',
					label: 'documentation',
					issue: '1273'
				},
				{
					title: 'Guide sur la gestion des événements',
					description: 'Ajout d’un guide expliquant comment gérer les événements parent/enfant avec les props pour transmettre des données entre ces composants.',
					label: 'documentation',
					issue: '1282'
				},
				{
					title: 'Guide sur la récupération et l’utilisation d’un token',
					description: 'Ajout d’un guide expliquant comment récupérer un token JWT et comment l’utiliser.',
					label: 'documentation',
					issue: '1281'
				},
				{
					title: 'Principes de design',
					description: 'Définition des principes de design permettant de garantir la meilleure expérience utilisateur.',
					label: 'documentation',
					issue: '1321'
				},
				{
					title: 'Refonte de la page d’accueil',
					description: 'Suppression de l’ancienne page d’accueil et refonte de la page d’introduction.',
					label: 'refactoring',
					issue: '1319'
				}
			]
		}
	],
	next: [
		{
			version: '2.2.0',
			date: 'Novembre 2021',
			description: 'Accessibilité : documentation des bonnes pratiques et passage en revue des composants.',
			items: []
		},
		{
			version: '2.3.0',
			date: 'Décembre 2021',
			description: 'Expérience développeur : configuration des outils de qualité de code et prise en compte des retours des équipes.',
			items: []
		}
	]
	// },
	// {
	// 	label: 'En conception',
	// 	items: [
	// 		{
	// 			title: 'Header',
	// 			description: 'Ajout d’un composant header qui prend en compte la nouvelle charte graphique de l’Assurance Maladie.',
	// 			label: 'new',
	// 			issue: '1087'
	// 		},
	// 		{
	// 			title: 'Documentation des fonctions',
	// 			description: 'Documentation des fonctions utilitaires.',
	// 			label: 'documentation',
	// 			issue: '1275'
	// 		},
	// 		{
	// 			title: 'Documentation des fonctions de validation',
	// 			description: 'Documentation des fonctions de validation de champs de formulaires.',
	// 			label: 'documentation',
	// 			issue: '1276'
	// 		}
	// 	]
	// },
	// {
	// 	label: 'Pour plus tard',
	// 	items: [
	// 		{
	// 			title: 'Guide sur les appels API',
	// 			description: 'Ajout d’un guide expliquant comment appeler une API avec axios.',
	// 			label: 'documentation',
	// 			issue: '1278'
	// 		},
	// 		{
	// 			title: 'Guide sur l’affichage d’un tableau avec une pagination',
	// 			description: 'Ajout d’un guide expliquant comment afficher dans un tableau paginé des données récupérées via une API.',
	// 			label: 'documentation',
	// 			issue: '1280'
	// 		},
	// 		{
	// 			title: 'Tests unitaires des composants',
	// 			description: 'Utiliser Cypress à la place de Vue Test Utils pour les tests unitaires des composants.',
	// 			label: 'refactoring',
	// 			issue: '1283'
	// 		},
	// 		{
	// 			title: 'ESLint',
	// 			description: 'Ajout d’un package pour partager la configuration d’ESLint.',
	// 			label: 'new'
	// 		},
	// 		{
	// 			title: 'Consentement cookies',
	// 			description: 'Définition des modalités de recueil du consentement des utilisateurs.',
	// 			label: 'documentation'
	// 		},
	// 		{
	// 			title: 'Visualisation de données',
	// 			description: 'Définition des différents types de charts.',
	// 			label: 'documentation'
	// 		},
	// 		{
	// 			title: 'Documentation accessibilité',
	// 			description: 'Définition des critères d’accessibilité et des recommandations.',
	// 			label: 'documentation'
	// 		},
	// 		{
	// 			title: 'Présentation du Design System',
	// 			description: 'Présentation de l’historique du Design System, des compétences et de l’organisation de l’équipe.',
	// 			label: 'documentation'
	// 		},
	// 		{
	// 			title: 'Documentation éco-conception',
	// 			description: 'Définition des principes d’éco-conception.',
	// 			label: 'documentation'
	// 		},
	// 		{
	// 			title: 'Rendu côté serveur',
	// 			description: 'Ajouter une option dans le Starter Kit pour utiliser Nuxt.',
	// 			label: 'new'
	// 		},
	// 		{
	// 			title: 'Vue.js 3',
	// 			description: 'Passage à Vue.js 3 (migration à Vuetify 3, Nuxt 3 et réécriture des composants).',
	// 			label: 'refactoring'
	// 		}
	// 	]
	// }
};
