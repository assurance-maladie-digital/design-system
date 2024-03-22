import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import EmotionPicker from "../";

describe("EmotionPicker", () => {
	it("renders correctly", () => {
		const wrapper = mount(EmotionPicker, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: "Pourriez-vous donner une note ?",
				itemLabels: ["Pas du tout", "Peut-être", "Oui super"],
			},
		});

		expect(wrapper.html()).toContain("Pourriez-vous donner une note ?");
		expect(wrapper.html()).toContain("Pas du tout");
		expect(wrapper.html()).toContain("Peut-être");
		expect(wrapper.html()).toContain("Oui super");
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with only 2 items", () => {
		const wrapper = mount(EmotionPicker, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: "Pourriez-vous donner une note ?",
				itemLabels: ["Pas du tout", "Not used", "Oui super"],
				length: 2,
			},
		});

		expect(wrapper.html()).toContain("Pourriez-vous donner une note ?");
		expect(wrapper.html()).toContain("Pas du tout");
		expect(wrapper.html()).toContain("Oui super");
		expect(wrapper.html()).not.toContain("Not used");
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders in mobile mode", async () => {
		const wrapper = mount(EmotionPicker, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: "Pourriez-vous donner une note ?",
				itemLabels: ["Pas du tout", "Peut-être", "Oui super"],
			},
		});

		wrapper.vm.$vuetify.display.name = 'xs';
		await wrapper.vm.$nextTick();

		expect(wrapper.html()).toContain("70px");
	});

	it("emit the right value when an item is clicked", async () => {
		const wrapper = mount(EmotionPicker, {
			global: {
				plugins: [vuetify],
			},
		});

		const items = wrapper.findAll("button");
		await items[0].trigger("click");
		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
		expect(wrapper.emitted("update:modelValue")?.[0]?.[0]).toBe(1);
	});

	it("have no labels when no labels are provided", () => {
		const wrapper = mount(EmotionPicker, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				itemLabels: [],
			},
		});

		wrapper.findAll("button").forEach((button) => {
			expect(button.text()).toBe("");
		});
	});

	it("change the style of the buttons when an item is clicked", async () => {
		const wrapper = mount(EmotionPicker, {
			global: {
				plugins: [vuetify],
			},
		});

		const items = wrapper.findAll("button");
		const classBtn = items.map((item) => item.classes());
		await wrapper.setProps({ modelValue: 1 });
		expect(items[0].classes()).toContain("v-btn--active");
		const classBtnClicked = wrapper.findAll("button").map((item) => item.classes());

		for(let i = 0; i < classBtn.length; i++) {
			expect(classBtn[i]).not.toEqual(classBtnClicked[i]);
		}
	});
});
