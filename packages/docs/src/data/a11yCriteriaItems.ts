import { ExpertiseLevelEnum } from '~/constants/ExpertiseLevelEnum';
import { RGAALevelEnum } from '~/constants/RGAALevelEnum';

export const a11yCriteriaItems = [
	{
		title: 'Catégorie 1 : Images',
		items: [
			{
				id: '1.1',
				description: 'Chaque image porteuse d’information a-t-elle une alternative textuelle ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '1.2',
				description: 'Chaque image de décoration est-elle correctement ignorée par les technologies d’assistance ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '1.3',
				description: 'Pour chaque image porteuse d’information ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '1.4',
				description: 'Pour chaque image utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative permet-elle d’identifier la nature et la fonction de l’image ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '1.5',
				description: 'Pour chaque image utilisée comme CAPTCHA, une solution d’accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '1.6',
				description: 'Chaque image porteuse d’information a-t-elle, si nécessaire, une description détaillée ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '1.7',
				description: 'Pour chaque image porteuse d’information ayant une description détaillée, cette description est-elle pertinente ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '1.8',
				description: 'Chaque image texte porteuse d’information, en l’absence d’un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '1.9',
				description: 'Chaque légende d’image est-elle, si nécessaire, correctement reliée à l’image correspondante ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 2 : Cadres',
		items: [
			{
				id: '2.1',
				description: 'Chaque cadre a-t-il un titre de cadre ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '2.2',
				description: 'Pour chaque cadre ayant un titre de cadre, ce titre de cadre est-il pertinent ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 3 : Couleurs',
		items: [
			{
				id: '3.1',
				description: 'Dans chaque page Web, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '3.2',
				description: 'Dans chaque page Web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '3.3',
				description: 'Dans chaque page Web, les couleurs utilisées dans les composants d’interface ou les éléments graphiques porteurs d’informations sont-elles suffisamment contrastées (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DESIGN
			}
		]
	},
	{
		title: 'Catégorie 4 : Multimédia',
		items: [
			{
				id: '4.1',
				description: 'Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '4.2',
				description: 'Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '4.3',
				description: 'Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '4.4',
				description: 'Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '4.5',
				description: 'Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '4.6',
				description: 'Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '4.7',
				description: 'Chaque média temporel est-il clairement identifiable (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '4.8',
				description: 'Chaque média non temporel a-t-il, si nécessaire, une alternative (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '4.9',
				description: 'Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '4.10',
				description: 'Chaque son déclenché automatiquement est-il contrôlable par l’utilisateur ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '4.11',
				description: 'La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '4.12',
				description: 'La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '4.13',
				description: 'Chaque média temporel et non temporel est-il compatible avec les technologies d’assistance (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			}
		]
	},
	{
		title: 'Catégorie 5 : Tableaux',
		items: [
			{
				id: '5.1',
				description: 'Chaque tableau de données complexe a-t-il un résumé ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '5.2',
				description: 'Pour chaque tableau de données complexe ayant un résumé, celui-ci est-il pertinent ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '5.3',
				description: 'Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '5.4',
				description: 'Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '5.5',
				description: 'Pour chaque tableau de données ayant un titre, celui-ci est-il pertinent ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '5.6',
				description: 'Pour chaque tableau de données, chaque en-tête de colonne et chaque en-tête de ligne sont-ils correctement déclarés ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '5.7',
				description: 'Pour chaque tableau de données, la technique appropriée permettant d’associer chaque cellule avec ses en-têtes est-elle utilisée (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '5.8',
				description: 'Chaque tableau de mise en forme ne doit pas utiliser d’éléments propres aux tableaux de données. Cette règle est-elle respectée ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 6 : Liens',
		items: [
			{
				id: '6.1',
				description: 'Chaque lien est-il explicite (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '6.2',
				description: 'Dans chaque page Web, chaque lien a-t-il un intitulé ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 7 : Scripts',
		items: [
			{
				id: '7.1',
				description: 'Chaque script est-il, si nécessaire, compatible avec les technologies d’assistance ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '7.2',
				description: 'Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '7.3',
				description: 'Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '7.4',
				description: 'Pour chaque script qui initie un changement de contexte, l’utilisateur est-il averti ou en a-t-il le contrôle ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '7.5',
				description: 'Dans chaque page Web, les messages de statut sont-ils correctement restitués par les technologies d’assistance ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 8 : Éléments obligatoires',
		items: [
			{
				id: '8.1',
				description: 'Chaque page Web est-elle définie par un type de document ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '8.2',
				description: 'Pour chaque page Web, le code source généré est-il valide selon le type de document spécifié ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '8.3',
				description: 'Dans chaque page Web, la langue par défaut est-elle présente ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '8.4',
				description: 'Pour chaque page Web ayant une langue par défaut, le code de langue est-il pertinent ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '8.5',
				description: 'Chaque page Web a-t-elle un titre de page ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '8.6',
				description: 'Pour chaque page Web ayant un titre de page, ce titre est-il pertinent ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '8.7',
				description: 'Dans chaque page Web, chaque changement de langue est-il indiqué dans le code source (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '8.8',
				description: 'Dans chaque page Web, le code de langue de chaque changement de langue est-il valide et pertinent ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '8.9',
				description: 'Dans chaque page Web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '8.10',
				description: 'Dans chaque page Web, les changements du sens de lecture sont-ils signalés ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 9 : Structuration de l’information',
		items: [
			{
				id: '9.1',
				description: 'Dans chaque page Web, l’information est-elle structurée par l’utilisation appropriée de titres ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '9.2',
				description: 'Dans chaque page Web, la structure du document est-elle cohérente (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '9.3',
				description: 'Dans chaque page Web, chaque liste est-elle correctement structurée ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '9.4',
				description: 'Dans chaque page Web, chaque citation est-elle correctement indiquée ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 10 : Présentation de l’information',
		items: [
			{
				id: '10.1',
				description: 'Dans le site Web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l’information ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '10.2',
				description: 'Dans chaque page Web, le contenu visible porteur d’information reste-t-il présent lorsque les feuilles de styles sont désactivées ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '10.3',
				description: 'Dans chaque page Web, l’information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '10.4',
				description: 'Dans chaque page Web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu’à 200%, au moins (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '10.5',
				description: 'Dans chaque page Web, les déclarations CSS de couleurs de fond d’élément et de police sont-elles correctement utilisées ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '10.6',
				description: 'Dans chaque page Web, chaque lien dont la nature n’est pas évidente est-il visible par rapport au texte environnant ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '10.7',
				description: 'Dans chaque page Web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '10.8',
				description: 'Pour chaque page Web, les contenus cachés ont-ils vocation à être ignorés par les technologies d’assistance ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '10.9',
				description: 'Dans chaque page Web, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '10.10',
				description: 'Dans chaque page Web, l’information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '10.11',
				description: 'Pour chaque page Web, les contenus peuvent-ils être présentés sans avoir recours à un défilement vertical pour une fenêtre ayant H : 256px ou à un défilement horizontal pour une fenêtre ayant une L : 320px (hors cas part.)',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '10.12',
				description: 'Dans chaque page Web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '10.13',
				description: 'Dans chaque page Web, les contenus additionnels apparaissant à la prise de focus ou au survol d’un composant d’interface sont-ils contrôlables par l’utilisateur (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '10.14',
				description: 'Dans chaque page Web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 11 : Formulaires',
		items: [
			{
				id: '11.1',
				description: 'Chaque champ de formulaire a-t-il une étiquette ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '11.2',
				description: 'Chaque étiquette associée à un champ de formulaire est-elle pertinente (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '11.3',
				description: 'Dans chaque formulaire, chaque étiquette associée à un champ de formulaire ayant la même fonction et répétée plusieurs fois dans une même page ou dans un ensemble de pages est-elle cohérente ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '11.4',
				description: 'Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '11.5',
				description: 'Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '11.6',
				description: 'Dans chaque formulaire, chaque regroupement de champs de même nature a-t-il une légende ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '11.7',
				description: 'Dans chaque formulaire, chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '11.8',
				description: 'Dans chaque formulaire, les items de même nature d’une liste de choix sont-ils regroupés de manière pertinente ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '11.9',
				description: 'Dans chaque formulaire, l’intitulé de chaque bouton est-il pertinent (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '11.10',
				description: 'Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '11.11',
				description: 'Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '11.12',
				description: 'Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l’utilisateur ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '11.13',
				description: 'La finalité d’un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l’utilisateur ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 12 : Navigation',
		items: [
			{
				id: '12.1',
				description: 'Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '12.2',
				description: 'Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '12.3',
				description: 'La page « plan du site » est-elle pertinente ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '12.4',
				description: 'Dans chaque ensemble de pages, la page « plan du site » est-elle atteignable de manière identique ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '12.5',
				description: 'Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '12.6',
				description: 'Les zones de regroupement de contenus présentes dans plusieurs pages Web (zones d’en-tête, de navig. principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DESIGN
			},
			{
				id: '12.7',
				description: 'Dans chaque page Web, un lien d’évitement ou d’accès rapide à la zone de contenu principal est-il présent (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '12.8',
				description: 'Dans chaque page Web, l’ordre de tabulation est-il cohérent ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '12.9',
				description: 'Dans chaque page Web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '12.10',
				description: 'Dans chaque page Web, les raccourcis clavier n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '12.11',
				description: 'Dans chaque page Web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un composant d’interface sont-ils si nécessaire atteignables au clavier ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	},
	{
		title: 'Catégorie 13 : Consultation',
		items: [
			{
				id: '13.1',
				description: 'Pour chaque page Web, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '13.2',
				description: 'Dans chaque page Web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '13.3',
				description: 'Dans chaque page Web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '13.4',
				description: 'Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '13.5',
				description: 'Dans chaque page Web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '13.6',
				description: 'Dans chaque page Web, pour chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '13.7',
				description: 'Dans chaque page Web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '13.8',
				description: 'Dans chaque page Web, chaque contenu en mouvement ou clignotant est-il contrôlable par l’utilisateur ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '13.9',
				description: 'Dans chaque page Web, le contenu proposé est-il consultable quelle que soit l’orientation de l’écran (portrait ou paysage) (hors cas particuliers) ?',
				level: RGAALevelEnum.AA,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '13.10',
				description: 'Dans chaque page Web, les fonctionnalités utilisables ou disponibles au moyen d’un geste complexe peuvent-elles être également disponibles au moyen d’un geste simple (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV_DESIGN
			},
			{
				id: '13.11',
				description: 'Dans chaque page Web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran peuvent-elles faire l’objet d’une annulation (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			},
			{
				id: '13.12',
				description: 'Dans chaque page Web, les fonctionnalités qui impliquent un mouvement de l’appareil ou vers l’appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ?',
				level: RGAALevelEnum.A,
				expertise: ExpertiseLevelEnum.DEV
			}
		]
	}
];
