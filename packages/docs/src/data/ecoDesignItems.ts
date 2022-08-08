export const ecoDesignItems = [
	{
		title: 'Catégorie 1\xa0: Design',
		description: `Privilégier un design épuré. Un bon design n’a pas besoin d’être chargé pour être agréable, au contraire.

Certains composants ne sont souvent pas utiles, et ne servent qu’à habiller une page.<br>
Le carrousel est un bon exemple\xa0: c’est un composant lourd, comportant à la fois du JavaScript et des images de grandes tailles.
Il est pourtant rarement indispensable à la navigation et fait souvent doublon avec le menu.`
	},
	{
		title: 'Catégorie 2\xa0: Couleurs',
		description: 'Le fond d’écran noir permet d’économiser de l’énergie sur les écrans OLED. Il est donc important de prévoir le mode sombre sur les nouveaux composants.'
	},
	{
		title: 'Catégorie 3\xa0: Images',
		description: `Le choix des images est important.
Pour les formats standards JPEG et PNG, il faudra trouver le bon taux de compression pour ne pas dégrader l’expérience utilisateur.
Une bonne alternative est de les remplacer par des images au format WEBP, en gardant les autres formats pour les navigateurs ne supportant pas ce format.

La taille est également importante. Pour économiser encore plus d’espace, les images doivent être rognées aux bonnes dimensions.
Le format vectoriel SVG est nettement plus léger\xa0: il doit être privilégié pour chaque image graphique compatible avec ce format.`
	},
	{
		title: 'Catégorie 4\xa0: Vidéos',
		description: `La première chose à faire avant d’ajouter une vidéo est de se demander si elle est vraiment nécessaire.
En effet, les vidéos demandent beaucoup de ressources\xa0: elles ne doivent donc pas être ajoutées juste pour illustrer ou pour remplir de l’espace.

Dans le cas où elles sont nécessaires, la lecture automatique doit être désactivée, surtout s’il y a du son dans la vidéo, et vous devez également mettre en place le chargement différé sur chaque vidéo.

L’utilisation de vidéos doit être privilégiée à la place des GIF.`
	},
	{
		title: 'Catégorie 5\xa0: Animations',
		description: `Comme pour les vidéos, la première chose concernant les animations est de se demander si elles sont vraiment nécessaires\xa0: servent-elles le design ou sont-elles seulement décoratives\xa0?
Si elles n’ont pas de réel intérêt, il vaut mieux ne pas les ajouter.
Le JavaScript est une technologie énergivore, il est donc important de le réserver aux tâches qui nécessitent vraiment de la logique.

Autant que possible, il vaut mieux privilégier les effets en CSS plutôt qu’en JavaScript.`
	},
	{
		title: 'Catégorie 6\xa0: Librairies',
		description: `L’accumulation de librairies est une cause récurrente de ralentissement des applications Web, et donc de consommation excessive d’énergie.
Le Design System est basé sur le framework Vuetify\xa0: il embarque donc la plupart des outils qui seront nécessaires au développement des applications.

Si toutefois vous ne trouvez pas ce dont vous avez besoin dans les librairies présentes dans le projet, l’installation d’une nouvelle librairie doit se faire avec beaucoup de prudence.
Il faudra trouver la librairie la plus légère et adaptée possible, l’outil [Bundlephobia](https://bundlephobia.com) permet d’évaluer rapidement la taille d’une librairie.`
	},
	{
		title: 'Catégorie 7\xa0: Fonctionnalités',
		description: `Comme toujours, la première question à se poser est\xa0: est-ce que ma fonctionnalité est vraiment nécessaire\xa0? Ne fait-elle pas doublon avec une déjà existante\xa0?

Dans le cas où elle est bien nécessaire, votre nouvelle fonctionnalité doit faire une chose précise. Moins elle enclenchera d’action, moins elle nécessitera d’énergie.
Il faut aussi faire attention à la façon de développer la fonctionnalité\xa0: les boucles inutiles ou les requêtes intempestives nécessitent là encore beaucoup de ressources, il faut donc veiller à le faire à bon escient.`
	}
];
