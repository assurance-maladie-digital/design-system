import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import PasswordField from "../";
import { vuetify } from "@tests/unit/setup";

describe("PasswordField", () => {
	it("renders correctly", () => {
		const wrapper = mount(PasswordField, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('renders correctly with the eye icon', async() => {
		const wrapper = mount(PasswordField, {
			props: {
				showEyeIcon: true,
				required: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const showBtn = wrapper.find('button');
		expect(showBtn.attributes('aria-label')).toBe('Afficher le mot de passe');
		await showBtn.trigger('click');
		expect(showBtn.attributes('aria-label')).toBe('Masquer le mot de passe');
	});

	it('emit an event when the value change', async() => {
		const wrapper = mount(PasswordField, {
			global: {
				plugins: [vuetify],
			},
		});

		const input = wrapper.find('input');
		await input.setValue('test');

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('btnLabel computed', () => {
		const wrapper = mount(PasswordField, {
			props: {
				showEyeIcon: true,
				required: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.btnLabel).toBe("Afficher le mot de passe");
	});

	it('rules computed', async() => {
		const wrapper = mount(PasswordField, {
			props: {
				required: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const input = wrapper.find('input');
		await input.setValue('test');

		expect(wrapper.vm.rules).toHaveLength(1);
	});
	
	it('outlined prop', () => {
		const wrapper = mount(PasswordField, {
			props: {
				outlined: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
