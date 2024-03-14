import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";

import DataListGroup from "../";

import { dataListGroupItems } from "./data/dataListGroupItems";
import { vuetify } from "@tests/unit/setup";

describe("DataListGroup", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(DataListGroup, {
			propsData: {
				items: dataListGroupItems,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders loading state correctly", async () => {
		const wrapper = shallowMount(
			DataListGroup,
			{
				propsData: {
					loading: true,
					items: dataListGroupItems,
				},
			},
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('emit the right event when clicking on a item button', async () => {
		const wrapper = mount(
			DataListGroup,
			{
				propsData: {
					items: dataListGroupItems,
				},
				global: {
					plugins: [vuetify],
				},
			},
		);

		const button = wrapper.find('button');
		await button.trigger('click');

		expect(wrapper.emitted('click:list-item')).toEqual(
			[[{dataListIndex: 1, itemIndex: 0}]]
		);
	});
});
