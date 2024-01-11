import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import DialogBox from "../";
import { VCard } from "vuetify/components";

describe("DialogBox", () => {
	it("renders correctly with props", () => {
		const wrapper = mount(DialogBox, {
			props: {
				modelValue: true,
				title: "Test title",
				width: "600px",
				cancelBtnText: "Cancel",
				confirmBtnText: "Confirm",
				hideActions: false,
				persistent: false,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("it closed when model value is false", async () => {
		const wrapper = mount(DialogBox, {
			props: {
				modelValue: false,
			},
			global: {
				plugins: [vuetify],
			},
		});

		// Snapshot
		expect(wrapper).toMatchSnapshot();
	});

	it("Become visible when the model value is modified", async () => {
		const wrapper = mount(DialogBox, {
			props: {
				modelValue: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const card = wrapper.getComponent(VCard);
		expect(card.isVisible()).toBe(true);

		await wrapper.setProps({ modelValue: false });
		expect(card.isVisible()).toBe(false);

		await wrapper.setProps({ modelValue: true });
		expect(card.isVisible()).toBe(true);
	});

	it("Get the correct focusable elements", async () => {
		const wrapper = mount(DialogBox, {
			slots: {
				default: `
					<button id="first">First</button>
					<button id="second" disabled>Second</button>
					<button id="third">third</button>
					<a href="https://google.com" id="the-link">Google</a>
				`,
			},
			props: {
				modelValue: true,
				hideActions: true,
				persistent: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const modal = wrapper.getComponent(VCard);

		const firstBtn = modal.find<HTMLElement>("#first");
		const thirdBtn = modal.find<HTMLElement>("#third");
		const theLink = modal.find<HTMLElement>("#the-link");
		await modal.vm.$nextTick();

		expect(await wrapper.vm.getSelectableElements()).toEqual([
			firstBtn.element,
			thirdBtn.element,
			theLink.element,
		]);
	});

	it("Handle the internal tab navigation", async () => {
		const wrapper = mount(DialogBox, {
			slots: {
				default: `
					<button id="first">First</button>
					<button id="second" disabled>Second</button>
					<button id="third">third</button>
					<a href="https://google.com" id="the-link">Google</a>
				`,
				title: `
					<h2>Test title</h2>
				`,
			},
			props: {
				modelValue: true,
				hideActions: true,
				persistent: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		async function triggerTab() {
			modal.find(":focus").trigger("keydown", {
				keyCode: 9,
				key: "Tab",
				code: "Tab",
			});
			await wrapper.vm.$nextTick();
		}

		async function triggerShiftTab() {
			modal.find(":focus").trigger("keydown", {
				keyCode: 9,
				key: "Tab",
				code: "Tab",
				shiftKey: true,
			});
			await wrapper.vm.$nextTick();
		}

		const modal = wrapper.getComponent(VCard);

		const firstBtn = modal.find<HTMLElement>("#first");
		const thirdBtn = modal.find<HTMLElement>("#third");
		await modal.vm.$nextTick();

		firstBtn.element.focus();
		await modal.vm.$nextTick();

		// Enter event should be ignored
		modal.find(":focus").trigger("keydown", {
			keyCode: 13,
			key: "Enter",
			code: "Enter",
		});
		await wrapper.vm.$nextTick();
		expect(firstBtn.element).toEqual(document.activeElement);

		// The second button is disabled, so it should be ignored
		await triggerTab();
		expect(thirdBtn.element).toEqual(document.activeElement);

		// If we reach the end, we should go back to the beginning
		await triggerTab();
		await triggerTab();
		expect(firstBtn.element).toEqual(document.activeElement);

		// If the shift key is pressed, we should go backwards
		await triggerTab();
		await triggerShiftTab();
		expect(firstBtn.element).toEqual(document.activeElement);

		// If we reach the beginning, we should go back to the end
		await triggerShiftTab();
		expect(modal.find("#the-link").element).toEqual(document.activeElement);
	});

	it("emit event when close button is clicked", async () => {
		const wrapper = mount(DialogBox, {
			props: {
				modelValue: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const modal = wrapper.getComponent(VCard);

		expect(wrapper.vm.$data.dialog).toBe(true);

		const closeBtn = modal.find("button");
		await closeBtn.trigger("click");
		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
	});

	it("emit cancel event when cancel button is clicked", async () => {
		const wrapper = mount(DialogBox, {
			props: {
				modelValue: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const modal = wrapper.getComponent(VCard);

		const cancelBtn = modal.find(".vd-dialog-box-actions-ctn button");
		await cancelBtn.trigger("click");
		expect(wrapper.emitted("cancel")).toBeTruthy();
	});

	it("emit confirm event when confirm button is clicked", async () => {
		const wrapper = mount(DialogBox, {
			props: {
				modelValue: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const modal = wrapper.getComponent(VCard);

		const confirmBtn = modal.find(
			".vd-dialog-box-actions-ctn button:last-child"
		);
		await confirmBtn.trigger("click");
		expect(wrapper.emitted("confirm")).toBeTruthy();
	});
});
