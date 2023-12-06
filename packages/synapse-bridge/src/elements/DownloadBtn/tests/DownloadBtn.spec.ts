import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import DownloadBtn from "../";

import { filePromise } from "./data/filePromise";

interface TestComponent {
	download: () => void;
}

describe("DownloadBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(DownloadBtn, {
			propsData: {
				filePromise,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("calls download function when pressed", async () => {
		const downloadMock = vi.fn();
		const wrapper = shallowMount(DownloadBtn, {
			propsData: {
				filePromise,
			},
			global: {
				mocks: {
					download: downloadMock,
				},
				plugins: [vuetify],
			},
		});

		const download = vi.spyOn(wrapper.vm as TestComponent, "download");
		const actionBtn = wrapper.find("button");

		actionBtn.trigger("click");

		expect(download).toBeCalled();
	});
});
