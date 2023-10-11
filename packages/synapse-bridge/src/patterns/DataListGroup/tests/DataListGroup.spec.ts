import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import DataListGroup from "../";

import { dataListGroupItems } from "./data/dataListGroupItems";

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
});
