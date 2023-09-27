import { VueWrapper, shallowMount } from "@vue/test-utils";

import FranceConnectBtn from "../";

let wrapper: VueWrapper<any>;

describe("FranceConnectBtn", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(FranceConnectBtn, {
			propsData: {
				href: "https://app.franceconnect.gouv.fr/",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with connect-plus", () => {
		wrapper = shallowMount(FranceConnectBtn, {
			propsData: {
				href: "https://app.franceconnect.gouv.fr/",
				connectPlus: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
