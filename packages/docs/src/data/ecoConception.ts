export const ecoConception = [
	{
		title: 'Catégorie 1 : Un design épuré',
		description: 'Privilégier un design épuré. Un bon design n\'a pas besoin d\'être chargé pour être agréable, au contraire. <br/><br/>' +
		'Certains composants ne sont souvent pas utiles, et ne servent qu\'à habiller une page. <br/>' +
		'Le carrousel est un bon exemple : c\'est un composant lourd, comportant à la fois du Javascript et des images de grandes tailles.' +
		'Il est pourtant rarement indispensable à la navigation et fait souvent doublon avec le menu.'
	},
	{
		title: 'Catégorie 2 : Les couleurs',
		description: 'Le fond d’écran noir permet d’économiser de l’énergie sur les écrans OLED. Il est donc important de prévoir le mode sombre sur les nouveaux composants.'
	},
	{
		title: 'Catégorie 3 : Les images',
		description: 'Le choix des images est important. <br/>' +
		'Pour les formats standards JPEG et PNG, il faudra trouver le bon taux de compression pour ne pas dégrader l\'expérience de l\'utilisateur.' +
		'Une bonne alternative peut être de les remplacer par des images au format WEBP malgré le fait que ce format ne soit pas encore supporté par tout les navigateurs. <br/><br/>' +
		'La taille est également importante. Pour économiser encore plus d\'espace, les images doivent être rognées aux bonnes dimensions <br/>' +
		'Le format vectoriel SVG est nettement plus léger : il doit être privilégié pour chaque image graphique compatible avec ce format.'
	},
	{
		title: 'Catégorie 4 : Les vidéos',
		description: 'La première chose à faire avant d\'ajouter une vidéo est de se demander si elle est vraiment nécessaire. ' + 
		'En effet, les videos demandent beaucoup de ressources : elles ne doivent donc pas être ajoutées juste pour illustrer ou pour remplir de l\'espace. ' +
		'Dans le cas où elles sont nécessaires, l’autoplay doit être désactivé, surtout s’il y a du son dans la vidéo. <br/>' +
		'Vous devez également mettre en place le chargement différé sur chaque vidéo. <br/><br/>' +
		'Google recommande l’utilisation de vidéos plutôt que de GIF.'
	},
	{
		title: 'Catégorie 5 : Les animations',
		description: 'Comme pour les vidéos, la première chose concernant les animations est de se demander elles sont vraiment nécessaires : servent-elles le design ou sont-elles seulement décoratives ? <br/>' +
		'Si elles n\'ont pas de réel intérêt, il vaut mieux ne pas les ajouter. <br/>' +
		'Le JavaScript est une technologie énergivore, il est donc important de la réserver aux tâches qui nécessitent vraiment de la logique. <br/><br/>' + 
		'Autant que possible, il vaudra mieux privilégier les effets en SCSS plutôt qu\'en JS.'
	},
	{
		title: 'Catégorie 6 : Les librairies',
		description: 'L\'accumulation de librairies est une cause récurrente de ralentissement des applications web, et donc de consommation excessive d\'énergie. <br/>' +
		'Le design system est basé sur le framework Vuetify : il embarque donc la plupart des outils qui seront nécessaires au developpement des composants. <br/>' +
		'Si toutefois vous ne trouvez pas ce dont vous avez besoin dans les librairies présentes dans le projet, l\'installation d\'une nouvelle librairie doit se faire avec beaucoup de prudence. <br/>' +
		'Il faudra trouver la librairie la plus légère et adaptée possible.'
	},
	{
		title: 'Catégorie 7 : Les fonctionnalités',
		description: 'Comme toujours, la première question à se poser est : est-ce que ma fonction est vraiment nécessaire ? <br/>' + 
		'Ne fait-elle pas doublon avec une fonction déjà existante ? <br/>' +
		'Dans le cas où elle est bien nécessaire, votre nouvelle fonctionnalité doit faire une chose précise. Moins elle enclanchera d\'action, moins elle réclamera d\énergie.' +
		'Il faudra aussi faire attention à la façon de développer la fonction : les boucles inutiles ou les requêtes intempestives réclament là encore de mobiliser beaucoup de ressources. Il faut donc veiller à le faire à bon escient.'
	}
]