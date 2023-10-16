import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import SubHeader from "../";

import HeaderLoading from "../../../elements/HeaderLoading";
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
});
