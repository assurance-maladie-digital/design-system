import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { vuetify } from "@tests/unit/setup";

import type { Field } from "./../../types";

import ChoiceField from "../ChoiceField.vue";
import { VSelect, VTextarea } from "vuetify/lib/components/index.mjs";

const testField: Field = {
	type: "select",
	title: "Votre taille",
	items: [
		{
			text: "S",
			value: 0,
		},
		{
			text: "M",
			value: 1,
		},
		{
			text: "Autre",
			value: "autre",
		},
	],
	fieldOptions: {
		label: "Classic field",
		variant: 'outlined',
	},
};

describe("ChoiceField", () => {
	it("renders correctly", () => {
		const testComponent = defineComponent({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						...testField,
						value: {
							value: "0",
						},
					},
				};
			},
		});
		const wrapper = mount(
			testComponent,{
				global: {
					plugins: [vuetify],
				},
			}

		);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders the other field", () => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						...testField,
						value: {
							value: "autre",
						},
						other: {
							label: "Autre taille",
							fieldOptions: {
								hint: "Veuillez entrez votre taille",
							},
						},
					},
				};
			},
		}, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders the other field when the corresponding choice is selected", () => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						...testField,
						value: {
							value: "autre",
						},
						other: {
							label: "Autre taille",
							selectedChoice: "autre",
							fieldOptions: {
								hint: "Veuillez entrez votre taille",
							},
						},
					},
				};
			},
		}, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders with single error message", () => {
		const wrapper = mount(
			{
				components: { ChoiceField },
				template: `<VApp><ChoiceField :field="field" /></VApp>`,
				data() {
					return {
						field: {
							...testField,
							fieldOptions: {
								type: "choiceButton",
								errorMessages: "Erreur",
							},
						},
					};
				}
			}, {
				global: {
					plugins: [vuetify],
				},
			}
		);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders with multiple error messages", () => {
		const wrapper = mount(
			{
				components: { ChoiceField },
				template: `<VApp><ChoiceField :field="field" /></VApp>`,
				data() {
					return {
						field: {
							...testField,
							fieldOptions: {
								type: "choiceButton",
								errorMessages: ["Erreur 1", "Erreur 2"],
							},
						},
					};
				},
			},
			{
				global: {
					plugins: [vuetify],
				},
			}
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders the text area when the "other" choice is selected', async() => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						...testField,

						other: {
							label: "Autre taille",
							selectedChoice: "autre",
							fieldOptions: {
								hint: "Veuillez entrez votre taille",
							},
						},
					},
				};
			},
		}, {
			global: {
				plugins: [vuetify],
			},
		});

		const vSelect = wrapper.findComponent(VSelect);

		await vSelect.setValue("autre");

		const textArea = wrapper.find("textarea");

		expect(textArea.exists()).toBe(true);
	});

	it('emit an updateValue event when the text area is used', async() => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						...testField,

						other: {
							label: "Autre taille",
							selectedChoice: "autre",
							fieldOptions: {
								hint: "Veuillez entrez votre taille",
							},
						},
					},
				};
			},
		}, {
			global: {
				plugins: [vuetify],
			},
		});

		const choiceField = wrapper.findComponent(ChoiceField);
		const vSelect = wrapper.findComponent(VSelect);

		await vSelect.setValue("autre");

		const textArea = wrapper.find("textarea");

		await textArea.setValue("test");

		expect(choiceField.emitted()).toHaveProperty("update:modelValue");

		expect((choiceField.emitted("update:modelValue")?.[0]?.[0] as any)?.value?.other).toBe("test");
	});

	it('Updates the other field value when the "other" choice is updated in the props', async() => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						...testField,
						value: {
							value: "123",
						},
						other: {
							label: "Autre taille",
							selectedChoice: "autre",
							fieldOptions: {
								hint: "Veuillez entrez votre taille",
							},
						},
					},
				};
			},
		}, {
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.setData({
			field: Object.assign(testField, {
				value: {
					value: "autre",
					other: "l",
				},
			}),
		});

		const textArea = wrapper.findComponent(VTextarea);
		expect(textArea).toBeDefined();
		expect(wrapper.find("textarea").element.value).toBe("l");
	});

	it('do not show the other field when the "selectedChoice" param is not set', async() => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						...testField,
						other: {
							selectedChoice: null,
						},
					},
				};
			},
		}, {
			global: {
				plugins: [vuetify],
			},
		});

		const vSelect = wrapper.findComponent(VSelect);

		await vSelect.setValue("autre");

		const textArea = wrapper.find("textarea");

		expect(textArea.exists()).toBe(false);
	});

	it('show the other field when the field is in multiple mode', async() => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						...testField,
						multiple: true,
						other: {
							selectedChoice: "autre",
						},
					},
				};
			},
		}, {
			global: {
				plugins: [vuetify],
			},
		});

		const vSelect = wrapper.findComponent(VSelect);

		await vSelect.setValue([1, 2]);

		expect(wrapper.find("textarea").exists()).toBe(false);

		await vSelect.setValue([1, "autre"]);

		expect(wrapper.find('textarea').exists()).toBe(true);
	});

	it('displays error messages when an object is passed', async() => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						type: "select",
						title: "Votre taille",
						items: [
							{
								text: "S",
								value: 0,
							},
							{
								text: "M",
								value: 1,
							},
							{
								text: "Autre",
								value: "autre",
							},
						],
						value: {
							value: "autre",
							other: "toto",
						},
						fieldOptions: {
							type: 'choiceButton',
							label: "Classic field",
							variant: 'outlined',
							errorMessages: {
								value: ["Erreur 1"],
								other: ["Erreur 2"],
							},
						},
						other: {
							label: "Autre taille",
							selectedChoice: "autre",
							fieldOptions: {
								hint: "Veuillez entrez votre taille",
							},
						},
					},
				};
			},
		}, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.find(".vd-select-btn-field .v-messages").text()).toBe("Erreur 1");
		expect(wrapper.find(".vd-other-field .v-messages__message").text()).toBe("Erreur 2");
	});

	it('renders the other field when the corresponding choice is selected and type of other is array', () => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						type: 'select',
						title: 'Question choix multiple conditionnel',
						items: [
							{
								text: 'Oui',
								value: 'oui'
							},
							{
								text: 'Non',
								value: 'non'
							}
						],
						fieldOptions: {
							variant: 'outlined',
							type: 'choiceButton',
							inline: true
						},
						value: {
							value: 'oui',
							other: 'justification'
						},
						other: [
							{
								label: 'Merci d\'expliquer les raisons de votre réponse affirmative ?',
								selectedChoice: 'oui',
								fieldOptions: {
									hint: 'Veuillez entrez votre réponse'
								}
							},
							{
								label: 'Merci de clarifier les raisons de votre réponse négative ?',
								selectedChoice: 'non',
								fieldOptions: {
									hint: 'Veuillez entrez votre réponse'
								}
							}
						]
					},
				};
			}
		}, {
			global: {
				plugins: [vuetify],
		}});

		expect(wrapper.text()).contain('Merci d\'expliquer les raisons de votre réponse affirmative ?');
	});



	it('renders the other field when the select is of type multiple and there is many other field', () => {
		const wrapper = mount({
			components: { ChoiceField },
			template: `<VApp><ChoiceField :field="field" /></VApp>`,
			data() {
				return {
					field: {
						type: 'select',
						multiple: true,
						title: 'Question choix multiple conditionnel',
						items: [
							{
								text: 'pomme',
								value: 'pomme'
							},
							{
								text: 'poire',
								value: 'poire'
							},
							{
								text: 'banane',
								value: 'banane'
							},
							{
								text: 'orange',
								value: 'orange'
							}
						],
						fieldOptions: {
							variant: 'outlined',
							type: 'choiceButton',
							inline: true,
						},
						value: {
							value: ['pomme', 'poire'],
							other: 'justification'
						},
						other: [
							{
								label: 'Merci d\'expliquer les raisons de votre réponse ?',
								selectedChoice: 'pomme',
								fieldOptions: {
									hint: 'Veuillez entrez votre réponse'
								}
							},
							{
								label: 'Merci de clarifier les raisons de votre réponse ?',
								selectedChoice: 'poire',
								fieldOptions: {
									hint: 'Veuillez entrez votre réponse'
								}
							}
						]
					},
				};
			}
		}, {
			global: {
				plugins: [vuetify],
		}});

		expect(wrapper.html()).toContain('Merci d\'expliquer les raisons de votre réponse ?');
	});
});
