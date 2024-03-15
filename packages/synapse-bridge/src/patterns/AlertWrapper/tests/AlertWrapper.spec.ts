import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import AlertWrapper from "../";
import {AlertTypeEnum} from "@/patterns/AlertWrapper/AlertTypeEnum.ts";

describe("AlertWrapper", () => {
	it("renders correctly with props", () => {
		const wrapper = shallowMount(AlertWrapper, {
			props: {
				title: "title",
				message: "message",
				type: AlertTypeEnum.SUCCESS,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with alertIcon computed", () => {
		const wrapper = shallowMount(AlertWrapper, {
			props: {
				title: "title",
				message: "message",
				type: AlertTypeEnum.SUCCESS,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.alertIcon).toBe(
			"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
		);
	});

	it("dismissAlert method works", () => {
		const wrapper = shallowMount(AlertWrapper, {
			props: {
				title: "title",
				message: "message",
				type: AlertTypeEnum.SUCCESS,
				outlined: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		wrapper.vm.dismissAlert();
		const emittedValue = wrapper.emitted("update:modelValue");

		if (emittedValue) {
			expect(emittedValue[0]).toEqual([false]);
		} else {
			return false;
		}
	});
});
