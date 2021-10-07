import { Form } from '../../types';

const defaultItems = [
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
		title: 'Section 1',
		description: 'Description de la section 1',
		questions: {
			questionString: {
				type: 'text',
				title: 'Question ?',
				description: 'Informations supplémentaires',
				tooltip: 'Texte d’aide\nSecond texte d’aide',
				value: null,
				fieldOptions: {
					label: 'Label du champ',
					outlined: true
				}
			},
			questionPassword: {
				type: 'text',
				title: 'Question mot de passe ?',
				value: null,
				fieldOptions: {
					type: 'password',
					label: 'Mot de passe',
					outlined: true
				}
			},
			questionNumber: {
				type: 'number',
				title: 'Question nombre ?',
				value: null,
				fieldOptions: {
					mask: '###-###',
					outlined: true
				}
			},
			questionTextarea: {
				type: 'textarea',
				title: 'Question longue type textarea',
				value: null,
				fieldOptions: {
					outlined: true
				}
			},
			questionDate: {
				type: 'date',
				title: 'Question',
				value: null,
				fieldOptions: {
					outlined: true,
					textField: {
						hint: 'Texte informatif'
					}
				}
			},
			questionPeriod: {
				type: 'period',
				title: 'Question période',
				value: null,
				fieldOptions: {
					from: {
						outlined: true,
						textField: {
							label: 'Du'
						}
					},
					to: {
						outlined: true,
						textField: {
							label: 'Au'
						}
					}
				}
			},
			questionSelect: {
				type: 'select',
				title: 'Question select',
				value: null,
				items: defaultItems,
				fieldOptions: {
					outlined: true,
					chips: true,
					menuProps: {
						offsetY: true
					},
					label: 'Votre réponse'
				}
			},
			questionSelectMultiple: {
				type: 'select',
				title: 'Question select multiple',
				value: null,
				multiple: true,
				items: defaultItems,
				fieldOptions: {
					outlined: true
				}
			}
		}
	},
	section2: {
		title: 'Section 2',
		questions: {
			questionSelectSliderTick: {
				type: 'select',
				title: 'Question select slider',
				description: 'Informations supplémentaires',
				tooltip: 'Texte d’aide',
				value: {
					value: '9.30',
					other: null
				},
				items: defaultItems,
				fieldOptions: {
					type: 'choiceSlider'
				}
			},
			questionSelectSliderThumb: {
				type: 'select',
				title: 'Question select slider thumb',
				description: 'Informations supplémentaires',
				tooltip: 'Texte d’aide',
				value: null,
				items: defaultItems,
				fieldOptions: {
					type: 'choiceSlider',
					thumbLabel: true
				}
			},
			questionSelectSliderThumbLabel: {
				type: 'select',
				title: 'Question select slider thumb with custom label',
				description: 'Informations supplémentaires',
				tooltip: 'Texte d’aide',
				value: null,
				items: defaultItems,
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
				description: 'Informations supplémentaires',
				value: null,
				items: defaultItems,
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
				title: 'Question choix bouton inline',
				description: 'Informations supplémentaires',
				items: defaultItems,
				fieldOptions: {
					inline: true,
					type: 'choiceButton',
					hint: 'Texte informatif'
				}
			},
			questionChoiceButtonMultiple: {
				type: 'select',
				title: 'Question choix bouton multiple',
				description: 'Informations supplémentaires',
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
				description: 'Informations supplémentaires',
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
				description: 'Visible quand le choix « Autre » est sélectionné',
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
