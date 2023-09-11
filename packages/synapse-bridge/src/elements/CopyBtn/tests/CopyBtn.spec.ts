import { test, snapshot } from "vitest";
import { mount } from "@vue/test-utils";

import CopyBtn from "../";

test("CopyBtn - renders correctly", () => {
	const wrapper = mount(CopyBtn, {
		props: {
			label: "test",
			textToCopy: "test",
		},
	});

	snapshot(wrapper);
});
