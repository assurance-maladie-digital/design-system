import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import CollapsibleList from "../";

describe("CollapsibleList", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(CollapsibleList, {
			propsData: {
				listTitle: "Santé",
				items: [
					{
						text: "Mon espace santé",
						href: "https://www.ameli.fr/assure/sante/mon-espace-sante",
					},
					{
						text: "Accomplir les bons gestes",
						href: "https://www.ameli.fr/assure/sante/bons-gestes",
					},
				],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
