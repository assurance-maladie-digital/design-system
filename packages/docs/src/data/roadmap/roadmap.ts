import { RoadmapSection } from '~/types/roadmap';

export const roadmap: RoadmapSection[] = [
	{
		label: 'Prochaine mise en production (xx/xx/xxxx) - version x.xx',
		items: [
			{
				title: 'Illustration empty state',
				description: 'Création d\'une série d\'illustration indiquant aux utilisateurs un état vide. Exemple : L`\'utilisateur n\'a pas ajouté de données.',
				label: 'newComponent'
			},
			{
				title: 'Couleurs',
				description: 'Définition de la palette de couleurs et des différents thèmes.',
				label: 'refonte'
			},
			{
				title: 'Espaces et dimensions',
				label: 'documentation'
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
				description: 'Création d\'un composant header pour mobile et desktop qui prenne en compte la nouvelle charte graphique Assurance Maladie.',
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
				description: 'Définition des principes de Design permettant de garantir la meilleur des expériences.',
				label: 'documentation'
			},
			{
				title: 'ESLint',
				description: 'package pour la configuration ESLint.',
				label: 'documentation'
			}
		]
	}
]
