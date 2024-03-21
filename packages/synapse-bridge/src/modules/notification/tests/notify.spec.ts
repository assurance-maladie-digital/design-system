import { describe, it, expect, vi } from "vitest";

import { NotificationState, NotificationObj } from "../types";

import { notify } from "../notify";

const notificationObj: NotificationObj = {
	type: "success",
	message: "test",
	icon: "icon",
};

describe("notify", () => {
	it("adds a notification", () => {
		const commit = vi.fn();

		const state: NotificationState = {
			notification: null,
		};

		notify(commit, state, notificationObj);

		expect(commit).toHaveBeenCalledWith("ADD", notificationObj);
	});

	it("removes a previous notification and adds a new one", () => {
		vi.useFakeTimers();
		const commit = vi.fn();

		const state: NotificationState = {
			notification: notificationObj,
		};

		notify(commit, state, notificationObj);

		expect(commit).toHaveBeenCalledWith("CLEAR");
		vi.runAllTimers();

		expect(commit).toHaveBeenCalledWith("ADD", notificationObj);
	});
});
