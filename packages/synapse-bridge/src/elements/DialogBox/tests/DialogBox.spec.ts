import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import DialogBox from "../";

describe("DialogBox", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(DialogBox);

		expect(wrapper).toMatchSnapshot();
	});
});
