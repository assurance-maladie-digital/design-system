import { describe, it, expect, vi, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";

import consola from "consola";

import FooterBtn from "../";

describe("FooterBtn", () => {
	const spy = vi.fn();

	beforeEach(() => {
		consola.mockTypes(() => spy);
	});

	it("renders correctly", () => {
		const wrapper = shallowMount(FooterBtn);

		expect(wrapper).toMatchSnapshot();
		expect(spy).toHaveBeenCalledWith(
			"FooterBtn is deprecated since v2.2.0, use FooterBar instead."
		);
	});
});
