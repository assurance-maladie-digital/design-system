import { IndexedObject } from '@cnamts/vue-dot/src/types';

import { LabelMappingEnum } from '~/constants/RoadmapLabelEnum';
import { RoadmapSection } from '~/types/roadmap';

export const roadmap: IndexedObject<RoadmapSection[]> = {
	current: [
		{
			version: '2.5.0',
			date: 'Mai 2022',
			description: 'Mise à jour de composants et complétion de la documentation.',
			items: [
				{
					title: 'Upload de plusieurs fichiers',
					description: 'Ajout ou modification d’un composant existant afin de permettre la sélection libre de plusieurs fichiers.',
					label: LabelMappingEnum.NEW,
					issue: 1738
				},
				{
					title: 'Ajout de la recherche',
					description: 'Ajout de la recherche à la documentation.',
					label: LabelMappingEnum.NEW,
					issue: 1278
				},
				{
					title: 'Mise à jour de la typographie',
					description: 'Mise à jour des règles typographiques et des typographies utilisées.',
					label: LabelMappingEnum.REFACTORING,
					issue: 1794
				},
				{
					title: 'Utilisation des icônes',
					description: 'Documentation de l’utilisation des icônes.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1367
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
			version: '2.6.0',
			date: 'Juin 2022',
			description: 'Ajout de nouveaux composants et mise à jour des Design Tokens.',
			items: [
				{
					title: 'Footer version complexe',
					description: 'Ajout de la version complexe du footer.',
					label: LabelMappingEnum.NEW,
					issue: 1624
				},
				{
					title: 'Connexion',
					description: 'Ajout d’un template de connexion.',
					label: LabelMappingEnum.NEW
				},
				{
					title: 'Mot de passe oublié',
					description: 'Ajout d’un template de réinitialisation de mot de passe.',
					label: LabelMappingEnum.NEW
				},
				{
					title: 'Nouveau mot de passe',
					description: 'Ajout d’un template pour définir un nouveau mot de passe.',
					label: LabelMappingEnum.NEW,
					issue: 1608
				},
				{
					title: 'Design Tokens',
					description: 'Intégration de la nouvelle palette de couleurs aux Design Tokens.',
					label: LabelMappingEnum.NEW,
					issue: 1397
				},
				{
					title: 'Présentation du Design System',
					description: 'Présentation de l’historique du Design System, des compétences et de l’organisation de l’équipe.',
					label: LabelMappingEnum.DOCUMENTATION
				}
			]
		},
		{
			version: '3.0.0',
			date: 'À partir de juillet 2022',
			description: 'Migration vers Vue.js 3 : réécriture des composants avec l’API de composition, mise à jour du Starter Kit et modifications majeures.',
			items: []
		}
	]
};
