import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";

import LangBtn from "../";
import { vuetify } from "@tests/unit/setup";
import { VList } from "vuetify/components";

describe("LangBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(LangBtn, {
			propsData: {
				availableLanguages: ["fr", "en"],
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("open the menu when clicked", async () => {
		const wrapper = mount(LangBtn, {
			propsData: {
				availableLanguages: ["fr", "en"],
			},
			global: {
				plugins: [vuetify],
			},
		});

		const button = wrapper.find("button");
		await button.trigger("click");
		expect(wrapper).toMatchSnapshot();
	});

	it('emit an event when the langage is updated', async () => {
		const wrapper = mount(LangBtn, {
			global: {
				plugins: [vuetify],
			},
		});

		const button = wrapper.find("button");
		await button.trigger("click");
		const vList = wrapper.findComponent(VList);
		const menuItem = vList.find('[aria-label="English"]');
		await menuItem.trigger("click");
		expect(wrapper.emitted()).toHaveProperty("update:modelValue");
		expect(wrapper.emitted("update:modelValue")).toEqual([["en"]]);
	});

	it('renders properly when all the languages are displayed', async () => {
		const wrapper = mount(LangBtn, {
			propsData: {
				availableLanguages: '*',
				hideDownArrow: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const button = wrapper.find("button");
		await button.trigger("click");
		expect(wrapper).toMatchSnapshot();
	});

	it('update the current lang to a valid value', async () => {
		const wrapper: any = mount(LangBtn, {
			propsData: {
				availableLanguages: ["fr", "en"],
				modelValue: "fr",
				// https://test-utils.vuejs.org/fr/guide/advanced/v-model.html#Un-Exemple-Simple
				'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
			},
			global: {
				plugins: [vuetify],
			},
		});

		// Update modelValue to a non valid value
		await wrapper.setValue("es");

		expect(wrapper.emitted()).toHaveProperty("update:modelValue");
		expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["fr"]);
	});
});
