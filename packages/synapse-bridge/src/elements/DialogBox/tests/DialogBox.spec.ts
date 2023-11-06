import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import DialogBox from "../";

describe("DialogBox", () => {
	it("renders correctly with props", () => {
		const wrapper = shallowMount(DialogBox, {
			props: {
				value: true,
				title: "Test title",
				width: "600px",
				cancelBtnText: "Cancel",
				confirmBtnText: "Confirm",
				hideActions: false,
				persistent: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
