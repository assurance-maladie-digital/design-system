import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import UploadWorkflow from "../";

import FileUpload from "../../FileUpload";
import DialogBox from "../../../elements/DialogBox";
import FileList from "../../../elements/FileList";

const files = [
	{
		id: "1",
		title: "test",
	},
	{
		id: "2",
		title: "test",
	},
];

describe("UploadWorkflow", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(UploadWorkflow, {
			stubs: {
				FileUpload,
				DialogBox,
				FileList,
			},
			propsData: {
				value: files,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a single file", () => {
		const wrapper = shallowMount(UploadWorkflow, {
			stubs: {
				FileUpload,
				DialogBox,
				FileList,
			},
			propsData: {
				value: [files[0]],
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
