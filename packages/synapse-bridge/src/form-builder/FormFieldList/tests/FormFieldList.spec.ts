import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FormFieldList from "../";

import { addressFields } from "./data/addressFields";

describe("FormFieldList", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FormFieldList, {
			propsData: {
				fields: addressFields,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
