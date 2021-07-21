import { RoadmapSection } from '~/types/roadmap';

export const roadmap: RoadmapSection[] = [
	{
		label: 'Prochaine mise en production (02/08/2021) - version 2.0.0-beta.12',
		items: [
			{
				title: 'Illustration empty state',
				description: 'Création d\'une série d\'illustration indiquant aux utilisateurs un état vide. Exemple : L\'utilisateur n\'a pas ajouté de données.',
				label: 'newComponent'
			},
			{
				title: 'Couleurs',
				description: 'Définition de la palette de couleurs et des différents thèmes.',
				label: 'refonte'
			},
			{
				title: 'Espaces et dimensions',
				label: 'documentation',
				description: '???'
			}
		]
	},
	{
		label: 'En conception',
		items: [
			{
				title: 'Header',
				description: 'Création d\'un composant header pour mobile et desktop qui prend en compte la nouvelle charte graphique Assurance Maladie.',
				label: 'newComponent',
				issue: '1087'
			}
		]
	},
	{
		label: 'Pour plus tard',
		items: [
			{
				title: 'Chart JS / data viz',
				description: 'Définition des différents types de charts.',
				label: 'documentation'
			},
			{
				title: 'Principes de design',
				description: 'Définition des principes de Design permettant de garantir la meilleure expérience.',
				label: 'documentation'
			},
			{
				title: 'ESLint',
				description: 'package pour la configuration ESLint.',
				label: 'documentation'
			},
			{
				title: 'Test des composants',
				description: 'Refonte des tests des composants',
				label: 'refonte'
			},
			{
				title: 'Consentement cookies',
				description: 'Définition des modalités de recueil du consentement des utilisateurs.',
				label: 'documentation'
			},
			{
				title: 'Guides utilisateur',
				description: 'Ajouter des guides utilisateur (appels API, affichage d\'une table de données, connexion front etc)',
				label: 'documentation'
			},
			{
				title: 'Doc accessibilité',
				description: 'Définition des critères d\'accessibilité et recommandations.',
				label: 'documentation'
			},
			{
				title: 'Principe de Sécurité',
				label: 'documentation'
			},
			{
				title: 'Doc présentation DS, histoire équipe etc.',
				description: 'Présentation de l\'Historique du Design System, compétences et organisation de l\'équipe.',
				label: 'documentation'
			},
			{
				title: 'Doc eco conception',
				description: 'Définition des principes d\'eco conception.',
				label: 'documentation'
			},
			{
				title: 'Rendu côté serveur',
				description: 'Ajouter une option dans le Starter Kit pour utiliser Nuxt (en interne = merger le travail de DDST)',
				label: 'unknown'
			},
			{
				title: 'Vue 3',
				description: 'Passage à Vue 3 (migration à Vuetify 3, Nuxt 3, réécritures des composants)',
				label: 'unknown'
			}
		]
	}
]
