import { VueWrapper, shallowMount } from "@vue/test-utils";

import DataListLoading from "../";
import HeaderLoading from "../../../HeaderLoading";

Vue.component("HeaderLoading", HeaderLoading);

let wrapper: VueWrapper<any>;

describe("DataListLoading", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(DataListLoading, {
			propsData: {
				label: "Test",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a header", () => {
		wrapper = shallowMount(DataListLoading, {
			propsData: {
				heading: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with more items", () => {
		wrapper = shallowMount(DataListLoading, {
			propsData: {
				itemsNumber: 3,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly in row mode", () => {
		wrapper = shallowMount(DataListLoading, {
			propsData: {
				itemsNumber: 3,
				row: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
