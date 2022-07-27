export const ecoConception = [
	{
		title: 'Catégorie 1 : Un design épuré',
		description: 'Privilégier un deisgn épuré. Un bon design n\'a pas besoin d\'être chargé pour être agréable, au contraire. <br/><br/>' +
		'Certains composants ne sont souvent pas utiles, et ne servent qu\'à habiller une page. <br/>' +
		'Le carrousel est un bon exemple : C\'est un composant, lourd, comportant à la fois du Javascript et des images de grandes tailles' +
		'Il est pourtant rarement indispensable à la navagation et fait souvent doublons avec le menu.'
	},
	{
		title: 'Catégorie 2 : Les couleurs',
		description: 'Le fond d’écran noir permet d’économiser de l’énergie sur les écrans OLED. Il est donc important de prévoir le dark mode sur les nouveaux composants.'
	},
	{
		title: 'Catégorie 3 : Les images',
		description: 'Le choix des images est important. <br/>' +
		'Pour les formats standards JPEG et PNG, il faudra trouver le bon taux de compression pour ne pas dégrader l\'expérience de l\'utilisateur.' +
		'Une bonne alternative peut être de les remplacer par des images au format WEBP malgrès le fait que ce format n\'est pas encore supporté par tout les navigateurs. <br/><br/>' +
		'La taille est également importante, pour économiser encore plus d\'espace, les images doivent être rognées aux bonnes dimensions <br/>' +
		'Le format vectoriel SVG sont nettement plus légères, elles doivent être privilégié pour chaque image graphique compatible avec ce format.'
	},
	{
		title: 'Catégorie 4 : Les vidéos',
		description: 'La première chose à faire avant d\'ajouter une vidéo est de se demander si elle est vraiment necessaire. ' + 
		'En effet, les videos demandent beaucoup de ressources, elles ne doivent donc pas ête ajoutées juste pour illustrer ou pour remplir de l\'espace. ' +
		'Dans le cas ou elles sont necessaires, l’autoplay doit être désactivé, surtout s’il y a du son dans la vidéo. <br/>' +
		'Vous devez également mettre en place le chargement différé sur chaque vidéo. <br/><br/>' +
		'Google recommande l’utilisation de vidéos plutôt que de GIF.'
	},
	{
		title: 'Catégorie 5 : Les animations',
		description: 'Comme pour les vidéo, la première chose concernant les animations est de se demander elles sont vraiment necesaires. Si elles servent le design, ou si elles ne sont que décoratives. <br/>' +
		'Si elles n\'ont pas de réel interet, il vaut mieux ne pas les ajouter. <br/>' +
		'Le javaScript est une technologie énergievore, il est donc important de la réserver aux taches qui necessitent vraiment de la logique. <br/><br/>' + 
		'Autant que possible, il vaudra mieux privilégier les effets en SCSS plutôt qu\'en JS.'
	},
	{
		title: 'Catégorie 6 : Les librairies',
		description: 'L\'accumulation de librairie est une cause récurente de ralentissement des applications web, et donc de consommation excessive d\'énergie. <br/>' +
		'Le design system est basé sur le framework Vuetify, il embarque donc la plus part des outils qui seront necessaires au developpement des composants. <br/>' +
		'Si toutefois vous ne trouvez pas dans les libraries présentes dans le projet ce dont vous avez besoin, l\'installation d\'une nouvelle librairie doit se faire avec beaucoup de prudence. <br/>' +
		'Il faudra trouver une librarie la plus légère et adapté possible.'
	},
	{
		title: 'Catégorie 7 : Les fonctionnalités',
		description: 'Comme toujours, la première question à se poser est : est ce que ma fonction est vraiment necessaire ? <br/>' + 
		'Ne fait-elle pas doublon avec une deja existante ? <br/>' +
		'Dans le cas ou elle est bien nécessaire, votre nouvelle fonctionnalité doit faire une chose précise. Moins elle enclanchera d\'action, moins elle réclamera d\énergie.' +
		'Il faudra aussi faire attention à la facon de développer la fonction : les boucles inutiles ou les requètes intenmpestives réclament la encore de mobiliser beaucoup de ressource. Il faut donc veiller à le faire à bon escient.'
	}
]