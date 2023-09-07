import { test, it } from "vitest";
import { mount } from "@vue/test-utils";

import PageContainer from "../";

test("PageContainer", () => {
	it('renders correctly', () => {
		const wrapper = mount(PageContainer);

		expect(wrapper).toMatchSnapshot();
	});
});
