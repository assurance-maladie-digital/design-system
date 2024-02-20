import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import SubHeader from "../";

import { dataListGroupItems } from "./data/subHeader";

describe("SubHeader", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(SubHeader, {
			propsData: {
				titleText: "Test",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders loading state correctly", async () => {
		const wrapper = shallowMount(
			SubHeader,
			{
				propsData: {
					titleText: "Test",
					loading: true,
					dataListGroupItems,
				},
			}
		);

		expect(wrapper).toMatchSnapshot();
	});

	it("returns true when the header is not fixed", () => {
		const wrapper = shallowMount(SubHeader, {
			propsData: {
				titleText: "Test",
			},
		});

		expect(wrapper.vm.fadeWhite).toBe('rgba(255, 255, 255, .7)');
	});

	it("emits itemAction event when called", () => {
		const wrapper = shallowMount(SubHeader, {
			propsData: {
				titleText: "Test",
			},
		});

		wrapper.vm.emitItemAction({
			dataListIndex: 0,
			itemIndex: 0
		});

		expect(wrapper.emitted('click:list-item')).toBeTruthy();
	});
});
