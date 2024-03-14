import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import NumberPicker from "../";

describe("NumberPicker", () => {
	it("renders correctly", () => {
		const wrapper = mount(NumberPicker, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: "Pourriez-vous donner une note ?",
			},

		});

		const btns = wrapper.findAll("button");

		expect(btns).toHaveLength(10);
		btns.forEach((btn, i) => {
			expect(btn.text()).toBe((i + 1).toString());
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("emits an event when a number is selected", async () => {
		const wrapper = mount(NumberPicker, {
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.findAll("button")!.at(3)!.trigger("click");

		expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
		expect(wrapper.emitted("update:modelValue")![0]).toEqual([4]);
	});

	it("change the displayed value when the modelValue is updated", async () => {
		const wrapper = mount(NumberPicker, {
			global: {
				plugins: [vuetify],
			},
			props: {
				modelValue: 3,
			},
		});

		const btn = wrapper.findAll("button")[0];

		await wrapper.setProps({ modelValue: 4 });
		expect(btn.text()).toBe("4");

		await wrapper.setProps({ modelValue: 5 });
		expect(btn.text()).toBe("5");
	});

	it("renders correctly in xs window", async() => {
		const wrapper = mount(NumberPicker, {
			global: {
				plugins: [vuetify]
			},
		});
		wrapper.vm.$vuetify.display.xs = true;
		await wrapper.vm.$nextTick();

		const select = wrapper.find(".v-select");

		expect(select.exists()).toBe(true);
		expect(select.text()).toBe("");

		await wrapper.setProps({ modelValue: 5 });
		expect(select.text()).toBe("5");

		expect(wrapper.html()).toMatchSnapshot();
	});
});
