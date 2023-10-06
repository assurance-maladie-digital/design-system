import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";

import DownloadBtn from "../";

import { filePromise } from "./data/filePromise";

interface TestComponent {
	download: () => void;
}

describe("DownloadBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(
			DownloadBtn,
			{
				propsData: {
					filePromise,
				},
				slots: {
					default: "justificatif.pdf",
				},
			}
		);

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
			},
			slots: {
				default: "justificatif.pdf",
			},
		});

		const download = vi.spyOn(wrapper.vm as TestComponent, "download");
		const actionBtn = wrapper.find("button");

		actionBtn.trigger("click");

		expect(download).toBeCalled();
	});
});
