import { Form } from '../../types';

const scheduleItems = [
	{
		text: '9h',
		value: null
	},
	{
		text: '9h30',
		value: 0
	},
	{
		text: '10h',
		value: 10
	},
	{
		text: '11h',
		value: 11
	}
];

export const questionForm: Form = {
	section1: {
		title: 'Champs textes',
		description: 'Champs textes, date et périodes et leurs sous-types.',
		questions: {
			questionString: {
				type: 'text',
				value: null,
				fieldOptions: {
					label: 'Votre nom',
					outlined: true
				}
			},
			questionPassword: {
				type: 'text',
				value: null,
				fieldOptions: {
					type: 'password',
					label: 'Votre mot de passe',
					outlined: true
				}
			},
			questionNumber: {
				type: 'number',
				value: null,
				fieldOptions: {
					label: 'Votre âge',
					mask: '###',
					outlined: true
				}
			},
			questionTextarea: {
				type: 'textarea',
				title: 'Vos symptômes',
				tooltip: 'Décrivez vos symptômes sous le format suivant :\nJJ/DD/MM : Description',
				description: 'Décrivez les symptômes qui vous affectent et leur ordre d\'apparition.',
				value: null,
				fieldOptions: {
					label: 'Vos symptômes',
					outlined: true
				}
			},
			questionDate: {
				type: 'date',
				value: null,
				fieldOptions: {
					outlined: true,
					birthdate: true,
					textField: {
						label: 'Votre date de naissance'
					}
				}
			},
			questionPeriod: {
				type: 'period',
				value: null,
				fieldOptions: {
					from: {
						outlined: true,
						textField: {
							label: 'Début'
						}
					},
					to: {
						outlined: true,
						textField: {
							label: 'Fin'
						}
					}
				}
			}
		}
	},
	section2: {
		title: 'Champs de sélection',
		questions: {
			questionSelect: {
				type: 'select',
				value: null,
				items: scheduleItems,
				fieldOptions: {
					label: 'Votre horaire de rendez-vous',
					outlined: true,
					menuProps: {
						offsetY: true
					}
				}
			},
			questionSelectMultiple: {
				type: 'select',
				value: {
					value: null
				},
				multiple: true,
				items: scheduleItems,
				fieldOptions: {
					label: 'Vos horaires de rendez-vous',
					outlined: true
				}
			},
			questionSelectSliderTick: {
				type: 'select',
				title: 'Question select slider',
				value: {
					value: '9.30',
					other: null
				},
				items: scheduleItems,
				fieldOptions: {
					type: 'choiceSlider'
				}
			},
			questionSelectSliderThumb: {
				type: 'select',
				title: 'Question select slider thumb',
				value: null,
				items: scheduleItems,
				fieldOptions: {
					type: 'choiceSlider',
					thumbLabel: true
				}
			},
			questionSelectSliderThumbLabel: {
				type: 'select',
				title: 'Question select slider thumb with custom label',
				value: null,
				items: scheduleItems,
				fieldOptions: {
					labelMin: 'min',
					labelMax: 'max',
					type: 'choiceSlider',
					thumbLabel: true
				}
			},
			questionAutocomplete: {
				type: 'select',
				title: 'Question avec complétion automatique',
				value: null,
				items: scheduleItems,
				fieldOptions: {
					type: 'choiceAutocomplete',
					outlined: true,
					chips: true,
					menuProps: {
						offsetY: true
					},
					label: 'Votre réponse'
				}
			}
		}
	},
	section3: {
		title: 'Section 3',
		questions: {
			questionChoiceButton: {
				type: 'select',
				title: 'Souhaitez-vous être contacté par nos services ?',
				items: [
					{
						text: 'Oui',
						value: 1
					},
					{
						text: 'Non',
						value: 0
					}
				],
				fieldOptions: {
					inline: true,
					type: 'choiceButton',
					hint: 'Vous pourrez choisir le moyen de contact'
				}
			},
			questionChoiceButtonMultiple: {
				type: 'select',
				title: 'Question choix bouton multiple',
				multiple: true,
				items: [
					{
						text: 'Multiple 1',
						value: 'test1'
					},
					{
						text: 'Multiple 2',
						value: 22
					},
					{
						text: 'Seul 1',
						value: 33,
						alone: true
					},
					{
						text: 'Seul 2',
						value: 44,
						alone: true
					},
					{
						text: 'Valeur nulle',
						value: null
					}
				],
				fieldOptions: {
					type: 'choiceButton'
				}
			},
			questionChoiceButtonTextMultiLine: {
				title: 'Question choix bouton plusieurs lignes',
				type: 'select',
				value: {
					value: 1,
					other: null
				},
				items: [
					{
						text: 'Texte qui permet de tester sur plusieurs lignes',
						value: 1
					},
					{
						text: 'Texte 2',
						value: 2
					}
				],
				fieldOptions: {
					type: 'choiceButton'
				}
			},
			questionChoiceOther: {
				title: 'Question choix autre',
				multiple: true,
				type: 'select',
				value: {
					value: [0, 1],
					other: 'Autre valeur'
				},
				items: [
					{
						text: 'S',
						value: 0
					},
					{
						text: 'M',
						value: 1
					},
					{
						text: 'L',
						value: 2,
						alone: true
					},
					{
						text: 'XL',
						value: 3,
						alone: true
					}
				],
				other: {
					fieldOptions: {
						placeholder: 'Autre'
					}
				},
				fieldOptions: {
					type: 'choiceButton',
					label: 'Classic field',
					outlined: true
				}
			},
			questionChoiceOtherSelected: {
				title: 'Question choix autre conditionnel',
				description: 'Visible quand le choix \'Autre\' est sélectionné',
				multiple: true,
				type: 'select',
				value: {
					value: 0,
					other: 'XXL'
				},
				items: [
					{
						text: 'S',
						value: 's'
					},
					{
						text: 'M',
						value: 1
					},
					{
						text: 'L',
						value: 2,
						alone: true
					},
					{
						text: 'XL',
						value: 3,
						alone: true
					},
					{
						text: 'Autre',
						value: 0
					}
				],
				other: {
					selectedChoice: 0,
					label: 'Autre choix',
					fieldOptions: {
						placeholder: 'Entrez votre taille'
					}
				},
				fieldOptions: {
					label: 'Classic field',
					outlined: true
				}
			}
		}
	},
	section4: {
		title: 'Champs personnalisés',
		questions: {
			customQuestion: {
				type: 'custom',
				value: null,
				fieldOptions: {
					label: 'Question personnalisée',
					outlined: true
				}
			}
		}
	}
};
