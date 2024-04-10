import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import RatingPicker from "../";
import { RatingEnum } from "../RatingMixin";
import NumberPicker from "../NumberPicker/NumberPicker.vue";
import EmotionPicker from "../EmotionPicker/EmotionPicker.vue";
import { locales as emotionPickerlocales } from "../EmotionPicker/locales";
import { locales } from "../locales";
import StarsPicker from '../StarsPicker/index';

describe("RatingPicker", () => {
	it("renders correctly", () => {
		const wrapper = mount(RatingPicker, {
			global: {
				plugins: [vuetify],
			},
			stubs: {
				NumberPicker: {
					template: "<div />",
				}
			},
			propsData: {
				type: RatingEnum.NUMBER,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders with additional content with the NumberPicker", async () => {
		const wrapper = mount(RatingPicker, {
			global: {
				plugins: [vuetify],
			},
			stubs: {
				NumberPicker: {
					template: "<div />",
				},
			},
			propsData: {
				type: RatingEnum.NUMBER,
			},
			slots: {
				default: "<div>Additional content</div>",
			},
		});

		wrapper.findComponent(NumberPicker).vm.$emit("update:modelValue", 5);
		await wrapper.setProps({ modelValue: 5 });

		expect(wrapper.text()).toContain(locales.thanks);
		expect(wrapper.text()).toContain("Additional content");
	});

	it("renders with additional content with the StarsPicker", async () => {
		const wrapper = mount(RatingPicker, {
			global: {
				plugins: [vuetify],
			},
			stubs: {
				StarsPicker: {
					template: "<div />",
				}
			},
			propsData: {
				type: RatingEnum.STARS,
			},
			slots: {
				default: "<div>Additional content</div>",
			},
		});

		wrapper.findComponent(StarsPicker).vm.$emit("update:modelValue", 3);
		await wrapper.setProps({ modelValue: 3 });

		expect(wrapper.text()).toContain(locales.thanks);
		expect(wrapper.text()).toContain("Additional content");
	});

	it("renders with additional content with the EmotionPicker", async () => {
		const wrapper = mount(RatingPicker, {
			global: {
				plugins: [vuetify],
			},
			stubs: {
				EmotionPicker: {
					template: "<div />",
				}
			},
			propsData: {
				type: RatingEnum.EMOTION,
			},
			slots: {
				default: "<div>Additional content</div>",
			},
		});

		wrapper.findComponent(EmotionPicker).vm.$emit("update:modelValue", 2);
		await wrapper.setProps({ modelValue: 2 });

		expect(wrapper.text()).toContain(locales.thanks);
		expect(wrapper.text()).toContain("Additional content");
	});

	it("renders with additional content with the EmotionPicker when twoEmotions is true", async () => {
		const wrapper = mount(RatingPicker, {
			global: {
				plugins: [vuetify],
			},
			stubs: {
				EmotionPicker: {
					template: "<div />",
				}
			},
			propsData: {
				type: RatingEnum.EMOTION,
				twoEmotions: true,
			},
			slots: {
				default: "<div>Additional content</div>",
			},
		});

		wrapper.findComponent(EmotionPicker).vm.$emit("update:modelValue", 1);
		await wrapper.setProps({ modelValue: 1 });

		expect(wrapper.text()).toContain(locales.thanks);
		expect(wrapper.text()).toContain("Additional content");
	});

	it("do not render the additional content when the rating is good", async () => {
		const wrapper = mount(RatingPicker, {
			global: {
				plugins: [vuetify],
			},
			stubs: {
				NumberPicker: {
					template: "<div />",
				},
			},
			propsData: {
				type: RatingEnum.NUMBER,
			},
			slots: {
				default: "<div>Additional content</div>",
			},
		});

		wrapper.findComponent(NumberPicker).vm.$emit("update:modelValue", 8);
		await wrapper.setProps({ modelValue: 8 });
		expect(wrapper.text()).toContain(locales.thanks);
		expect(wrapper.text()).not.toContain("Additional content");
	});

	it("sends the correct values to the EmotionPicker", async () => {
		const wrapper = mount(RatingPicker, {
			global: {
				plugins: [vuetify],
			},
			stubs: {
				EmotionPicker: {
					template: "<div />",
				}
			},
			propsData: {
				type: RatingEnum.EMOTION,
				itemLabels: ["label1", "label3"],
				twoEmotions: true,
			},
		});

		expect(wrapper.findComponent(EmotionPicker).props("length")).toBe(2);
		expect(wrapper.findComponent(EmotionPicker).props("itemLabels")).toEqual(["label1", "label3"]);

		await wrapper.setProps({ twoEmotions: false });
		await wrapper.setProps({ itemLabels: undefined });
		expect(wrapper.findComponent(EmotionPicker).props("length")).toBe(3);
		expect(wrapper.findComponent(EmotionPicker).props("itemLabels")).toEqual(emotionPickerlocales.defaultEmotionLabels);
	});
});
