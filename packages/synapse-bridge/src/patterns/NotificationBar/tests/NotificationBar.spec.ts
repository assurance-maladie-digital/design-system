import { notification } from "@/modules/notification";
import { NotificationObj } from "@/modules/notification/types";
import { vuetify } from "@tests/unit/setup";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { VIcon } from "vuetify/components";
import { createStore } from "vuex";
import NotificationBar from "../";

const COLORS = {
	WHITE: "white",
	GREY_DARKEN_80: "grey-darken-80",
	RGBA_WHITE: "rgba(255, 255, 255, 1)",
	RGBA_BLACK: "rgba(0, 0, 0, 1)",
};

const notificationObj: NotificationObj = { type: "success", message: "test" };
const notificationObjWithIcon: NotificationObj = {
	type: "success",
	message: "test",
	icon: "icon",
};
const notificationErrorObj: NotificationObj = {
	type: "error",
	message: "test",
};
const notificationInfoObj: NotificationObj = { type: "info", message: "test" };
const notificationWarningObj: NotificationObj = {
	type: "warning",
	message: "test",
};

function createTestStore(NotificationState?: any) {
	return createStore({
		...NotificationState,
		modules: {
			notification,
		},
	});
}

function createNotificationBar(store: any, options?: any) {
	return mount(NotificationBar, {
		global: {
			plugins: [vuetify],
			provide: { store },
			mocks: { $store: store },
		},
		...options,
	});
}

describe("NotificationBar", () => {
	describe("Rendering", () => {
		it("Don't render anything if there is no notification", () => {
			const store = createTestStore({ notification: null });
			const wrapper = createNotificationBar(store);
			expect(wrapper.html()).toBe("");
		});

		it("renders correctly", async () => {
			const store = createTestStore({ notification: null });
			const wrapper = createNotificationBar(store);
			await store.dispatch("notification/addNotification", notificationObj);
			const VIconWrapper = wrapper.findComponent(VIcon);
			const notificationContent =
				VIconWrapper.element.parentElement?.parentElement?.innerHTML;
			expect(notificationContent).toContain("test");
		});

		it("renders correctly with a custom icon", async () => {
			const store = createTestStore({ notification: null });
			const wrapper = createNotificationBar(store);
			await store.dispatch(
				"notification/addNotification",
				notificationObjWithIcon
			);
			const VIconWrapper = wrapper.findComponent(VIcon);
			const notificationContent =
				VIconWrapper.element.parentElement?.parentElement?.innerHTML;
			expect(notificationContent).toContain("test");
		});

		it("renders correctly a barNotification with close btn on add notification", () => {
			const store = createTestStore({ notification: notificationObj });
			const wrapper = createNotificationBar(store);
			expect(wrapper.vm.closeBtnText).toBe("Fermer");
		});

		it("renders correctly with bottom prop set to true", async () => {
			const store = createTestStore({ notification: null });
			const wrapper = createNotificationBar(store, {
				props: {
					bottom: true,
				},
			});
			await store.dispatch(
				"notification/addNotification",
				notificationObj
			);
			const VIconWrapper = wrapper.findComponent(VIcon);
			const notificationContent =
				VIconWrapper.element.parentElement?.parentElement?.parentElement
					?.parentElement?.innerHTML;
			expect(notificationContent).contains("bottom: 0px;");
		});

		it("renders correctly with actionSlotAttrs prop", async () => {
			const store = createTestStore({ notification: null });
			const wrapper = createNotificationBar(store, {
				props: {
					actionSlotAttrs: { color: "primary", text: "Action" },
				},
				slots: {
					action: '<template v-slot="slotProps">{{slotProps}}</template>',
				},
			});
			await store.dispatch(
				"notification/addNotification",
				notificationObj
			);
			const VIconWrapper = wrapper.findComponent(VIcon);
			const notificationContent =
				VIconWrapper.element.parentElement?.parentElement?.innerHTML;
			expect(notificationContent).toMatchSnapshot();
		});
	});

	describe("Computed properties", () => {
		it("returns true if display name is xs, otherwise false", () => {
			const storeWithXsDisplay = createTestStore({ notification: null });
			const wrapperWithXsDisplay =
				createNotificationBar(storeWithXsDisplay);
			wrapperWithXsDisplay.vm.$vuetify.display.name = "xs";
			expect(wrapperWithXsDisplay.vm.mobileVersion).toBe(true);

			const storeWithNonXsDisplay = createTestStore({
				notification: null,
			});
			const wrapperWithNonXsDisplay = createNotificationBar(
				storeWithNonXsDisplay
			);
			wrapperWithNonXsDisplay.vm.$vuetify.display.name = "sm"; // Assuming display name is not xs
			expect(wrapperWithNonXsDisplay.vm.mobileVersion).toBe(false);
		});

		it.each([
			[notificationErrorObj, false, COLORS.WHITE, COLORS.RGBA_WHITE],
			[notificationInfoObj, false, COLORS.WHITE, COLORS.RGBA_WHITE],
		])(
			"renders correctly with notification type '%s'",
			async (notification, isDarkText, contentColor, dividerColor) => {
				const store = createTestStore({ notification });
				const wrapper = createNotificationBar(store);
				expect(wrapper.vm.isDarkText).toBe(isDarkText);
				expect(wrapper.vm.contentColor).toBe(contentColor);
				expect(wrapper.vm.dividerColor).toBe(dividerColor);
			}
		);

		it.each([
			[
				notificationWarningObj,
				true,
				COLORS.GREY_DARKEN_80,
				COLORS.RGBA_BLACK,
			],
			[notificationObj, true, COLORS.GREY_DARKEN_80, COLORS.RGBA_BLACK],
		])(
			"renders correctly with notification type",
			async (notification, isDarkText, contentColor, dividerColor) => {
				const store = createTestStore({ notification: null });
				const wrapper = createNotificationBar(store);
				await store.dispatch(
					"notification/addNotification",
					notification
				);
				expect(wrapper.vm.isDarkText).toBe(isDarkText);
				expect(wrapper.vm.contentColor).toBe(contentColor);
				expect(wrapper.vm.dividerColor).toBe(dividerColor);
			}
		);

		it("computes isLongText correctly", async () => {
			const longMessageNotification: NotificationObj = {
				type: "success",
				message: "a".repeat(51),
			};
			const store = createTestStore({
				notification: longMessageNotification,
			});
			const wrapper = createNotificationBar(store);
			await store.dispatch(
				"notification/addNotification",
				longMessageNotification
			);
			expect(wrapper.vm.isLongText).toBe(true);
		});

		it("computes isLongText correctly for short text", async () => {
			const store = createTestStore({ notification: notificationObj });
			const wrapper = createNotificationBar(store);
			await store.dispatch(
				"notification/addNotification",
				notificationObj
			);
			expect(wrapper.vm.isLongText).toBe(false);
		});

		it("computes hasLongContent correctly", () => {
			const store = createTestStore({ notification: notificationObj });
			const wrapper = createNotificationBar(store);
			expect(wrapper.vm.hasLongContent).toBe(false);
		});

		it("computes hasLongContent correctly when there is an action slot", () => {
			const store = createTestStore({ notification: notificationObj });
			const wrapper = createNotificationBar(store, {
				slots: {
					action: "<div>Action</div>",
				},
			});
			expect(wrapper.vm.hasLongContent).toBe(true);
		});

		it("computes smallCloseBtn correctly", () => {
			const store = createTestStore({ notification: notificationObj });
			const wrapper = createNotificationBar(store);
			expect(wrapper.vm.smallCloseBtn).toBe(false);
		});

		it("computes icon correctly when notification is null", () => {
			const store = createTestStore({ notification: null });
			const wrapper = createNotificationBar(store);
			expect(wrapper.vm.icon).toBe(null);
		});

		it("returns null when both this.notification.icon and this.notification.type are null", async () => {
			const notificationWithNullIconAndType: NotificationObj = {
				type: null,
				message: "test",
				icon: null,
			};
			const store = createTestStore({ notification: null });
			const wrapper = createNotificationBar(store);
			await store.dispatch(
				"notification/addNotification",
				notificationWithNullIconAndType
			);
			expect(wrapper.vm.icon).toBeUndefined();
		});

		it("returns the correct icon when this.notification.icon is not null", async () => {
			const store = createTestStore();
			const wrapper = createNotificationBar(store);
			await store.dispatch(
				"notification/addNotification",
				notificationObjWithIcon
			);
			expect(wrapper.vm.icon).toBe(notificationObjWithIcon.icon);
		});

		it("returns true when mobileVersion is true and hasLongContent is false", async () => {
			const store = createTestStore();
			const wrapper = createNotificationBar(store);
			wrapper.vm.$vuetify.display.name = "xs"; // Simulate mobile version
			await store.dispatch(
				"notification/addNotification",
				notificationObj
			); // Short message to simulate !hasLongContent
			expect(wrapper.vm.smallCloseBtn).toBe(true);
		});

		it("returns false when mobileVersion is false", async () => {
			const store = createTestStore();
			const wrapper = createNotificationBar(store);
			wrapper.vm.$vuetify.display.name = "lg"; // Simulate non-mobile version
			await store.dispatch(
				"notification/addNotification",
				notificationObj
			);
			expect(wrapper.vm.smallCloseBtn).toBe(false);
		});

		it("returns false when hasLongContent is true", async () => {
			const store = createTestStore();
			const wrapper = createNotificationBar(store, {
				slots: {
					action: "<div>Action</div>",
				},
			});
			await store.dispatch(
				"notification/addNotification",
				notificationObj
			);
			expect(wrapper.vm.smallCloseBtn).toBe(false);
		});
	});

	describe("Lifecycle hooks", () => {
		it("calls clearNotification on beforeUnmount", () => {
			const store = createTestStore({ notification: notificationObj });
			const wrapper = createNotificationBar(store);
			const clearNotificationSpy = vi.spyOn(
				wrapper.vm,
				"clearNotification"
			);
			wrapper.unmount();
			expect(clearNotificationSpy).toHaveBeenCalled();
		});
	});

	describe("Methods", () => {
		it("calls clearNotification correctly", () => {
			const store = createTestStore({ notification: notificationObj });
			const wrapper = createNotificationBar(store);
			const dispatchSpy = vi.spyOn(store, "dispatch");
			wrapper.vm.clearNotification();
			expect(dispatchSpy).toHaveBeenCalledWith(
				"notification/clearNotification",
				undefined
			);
		});
	});
});
