import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FileList from "../";

describe("FileList", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallowMount(FileList, {
			propsData: {
				files: [
					{
						id: "0",
						title: "test",
						state: "success",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});
	});

	it("renders correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("renders iconColor grey correctly", () => {
		expect(wrapper.vm.iconColor).toBe("grey");
	});

	it("renders iconColor correctly with dark theme", () => {
		wrapper.vm.$vuetify.theme.current.dark = true;

		expect(wrapper.vm.iconColor).toBe("grey-lighten-40");
	});

	it("returns success icon info correctly", () => {
		for (const file of wrapper.vm.files) {
			expect(wrapper.vm.getIconInfo(file)).toEqual({
				icon: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",
				color: "turquoise-darken-60",
			});
		}
	});

	it("returns error icon info correctly", async () => {
		await wrapper.setProps({
			files: [
				{
					id: "1",
					title: "test",
					state: "error",
				},
			]
		});

		for (const file of wrapper.vm.files) {
			expect(wrapper.vm.getIconInfo(file)).toEqual({
				icon: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
				color: "error",
			});
		}
	});

	it("returns default icon info correctly", () => {
		const wrapper = shallowMount(FileList, {
			propsData: {
				files: [
					{
						id: "2",
						title: "test",
					},
				] as any
			},
			global: {
				plugins: [vuetify],
			},
		});

		for (const file of wrapper.vm.files) {
			expect(wrapper.vm.getIconInfo(file)).toEqual({
				icon: "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z",
				color: "grey",
			});
		}
	});

	it("returns success color correctly", () => {
		expect(wrapper.vm.getItemColor("success")).toBe(undefined);
	});

	it("returns other color correctly", () => {
		expect(wrapper.vm.getItemColor("error")).toBe("text-grey");
	});

	it("returns showDivider correctly", () => {
		expect(wrapper.vm.showDivider(0)).toBe(true);
	});

	it("returns showDivider correctly with hideLastDivider", async () => {
		await wrapper.setProps({hideLastDivider: true});

		expect(wrapper.vm.showDivider(0)).toBe(false);
	});

	it("returns true if the item is a file", () => {
		expect(wrapper.vm.isFileItem({id: "1", title: "test"})).toBe(true);
	});

	it("returns true if the item is a file", () => {
		expect(wrapper.vm.shouldDisplayDeleteBtn({id: "1", title: "test", state: "error"})).toBe(true);
	});

	it("returns false if the item is a file and hideDeleteBtn is true", async () => {
		await wrapper.setProps({hideDeleteBtn: true});

		expect(wrapper.vm.shouldDisplayDeleteBtn({id: "1", title: "test"})).toBe(false);
	});
});
