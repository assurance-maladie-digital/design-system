import { VueWrapper, shallowMount } from "@vue/test-utils";

import DownloadBtn from "../";

import { filePromise } from "./data/filePromise";

interface TestComponent {
	download: () => void;
}

let wrapper: VueWrapper<any>;

describe("DownloadBtn", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(
			DownloadBtn,
			{
				propsData: {
					filePromise,
				},
				slots: {
					default: "justificatif.pdf",
				},
			},
			true
		);

		expect(wrapper).toMatchSnapshot();
	});

	it("calls download function when pressed", async () => {
		wrapper = shallowMount(
			DownloadBtn,
			{
				propsData: {
					filePromise,
				},
				slots: {
					default: "justificatif.pdf",
				},
				mocks: {
					download: jest.fn(),
				},
			},
			true
		) as Wrapper<TestComponent>;

		const download = jest.spyOn(wrapper.vm as TestComponent, "download");
		const actionBtn = wrapper.find("button");

		actionBtn.trigger("click");

		expect(download).toBeCalled();
	});
});
