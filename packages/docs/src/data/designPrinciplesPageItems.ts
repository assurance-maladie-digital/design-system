import { mdiHeartPulse, mdiAccountGroup, mdiAutoFix } from '@mdi/js';

export const designPrinciplesPageItems = [
	{
		title: 'Être au service des usagers de la santé publique',
		description: 'En tant que Design System pour l’Assurance Maladie, notre devoir est de **répondre avec efficacité et intelligence aux besoins** de nos différents profils d’utilisateur citoyen.',
		icon: mdiHeartPulse,
		content: [
			'<u>Nous recommandons</u> pour chaque utilisation de notre Design System de **favoriser l’écoute et l’empathie auprès des utilisateurs finaux** en récoltant dès que le projet le permet un ou plusieurs retours d’expériences. En suivant ce principe, c’est depuis 2017 plus de 20 produits et services numériques qui ont permis d’affiner et de structurer les choix ergonomiques de notre Design System.',
			'Afin d’accompagner les équipes de l’Assurance Maladie, **nous pouvons aider à la mise en place de tests utilisateurs, au passage et à l’analyse des résultats**. En cohérence avec les besoins ou les contraintes des projets, nous vous conseillerons sur la typologie de test à adopter afin de répondre avec performance à vos besoins.'
		]
	},
	{
		title: 'Assurer l’accessibilité pour tous',
		description: '**L’accès aux produits numériques doit être permis à tous**. Pour cela, nous favorisons dans notre démarche de design le respect des [critères d’accessibilité](/fondamentaux/accessibilite) définis par le Référentiel Général d’Amélioration de l’Accessibilité.',
		icon: mdiAccountGroup,
		content: [
			'<u>Nous recommandons</u> pour chaque utilisation de notre Design System de ne pas transformer les composants. La conception des composants vise à respecter quatre indices de performance. **Nos composants et leurs contenus informationnels sont perceptibles (1), manipulables (2), compréhensibles (3) et robustes (4) dans l’usage**. En complément, nous recommandons de proposer de la redondance informationnelle par un ou plusieurs moyens alternatifs lorsqu’une information est complexe à comprendre ou à atteindre sur l’interface.',
			'Afin d’accompagner les équipes de l’Assurance Maladie, **nous pouvons aider à l’élaboration de vos interfaces pour qu’elles respectent les normes d’accessibilité**. Dans le cas où nos composants ne correspondent pas à vos exigences, nous pouvons collaborer avec vous à leurs adaptations.'
		]
	},
	{
		title: 'Rendre évident ce qui est complexe',
		description: 'Malgré la complexité des projets, notre Design System doit permettre **la construction d’interfaces fluides et simples d’utilisation** pour assurer aux utilisateurs finaux une bonne expérience numérique.',
		icon: mdiAutoFix,
		content: [
			'<u>Nous recommandons</u> pour chaque utilisation de notre Design System de favoriser des **compositions graphiques d’interfaces peu chargées avec des espaces vierges et une hiérarchisation des informations**. Afin de permettre le responsive design, les interfaces doivent être structurées en utilisant des grilles et permettre ainsi l’affichage multi-support. En complément, nous recommandons de favoriser des parcours utilisateurs courts et de les concevoir en respectant pour chaque étape [la théorie de l’action proposée par Don Norman](https://fr.wikipedia.org/wiki/Th%C3%A9orie_de_l%27action_(Norman)).',
			'Afin d’accompagner les équipes de l’Assurance Maladie, nous pouvons aider à structurer les interfaces. En proposant par exemple des ateliers de cadrage participatifs dont l’objectif est de relever auprès de vos besoins et des besoins des utilisateurs finaux les informations pertinentes (insights) à afficher. C’est une étape importante pour l’organisation graphique des interfaces.'
		]
	}
];
