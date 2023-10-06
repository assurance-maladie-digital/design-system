import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FranceConnectBtn from "../";

describe("FranceConnectBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FranceConnectBtn, {
			propsData: {
				href: "https://app.franceconnect.gouv.fr/",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with connect-plus", () => {
		const wrapper = shallowMount(FranceConnectBtn, {
			propsData: {
				href: "https://app.franceconnect.gouv.fr/",
				connectPlus: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
