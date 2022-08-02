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
					title: 'Mise à jour de la typographie',
					description: 'Mise à jour des règles typographiques et des typographies utilisées.',
					label: LabelMappingEnum.REFACTORING,
					issue: 1794
				},
				{
					title: 'Visualisation de données',
					description: 'Définition des différents types de graphiques.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1863
				},
				{
					title: 'Documentation éco-conception',
					description: 'Définition des principes d’éco-conception.',
					label: LabelMappingEnum.DOCUMENTATION,
					issue: 1862
				},
				{
					title: 'Connexion',
					description: 'Ajout d’un template de connexion.',
					label: LabelMappingEnum.NEW
				},
			]
		}
	],
	next: [
		{
			version: '2.6.0',
			date: 'Août 2022',
			description: 'Ajout de nouveaux composants et mise à jour des Design Tokens.',
			items: [
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
				}
			]
		},
		{
			version: '3.0.0',
			date: 'À partir de septembre 2022',
			description: 'Migration vers Vue.js 3 : réécriture des composants avec l’API de composition, mise à jour du Starter Kit et modifications majeures.',
			items: []
		}
	]
};
