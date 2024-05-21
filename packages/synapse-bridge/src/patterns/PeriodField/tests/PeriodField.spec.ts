import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PeriodField from "../PeriodField.vue";
import { vuetify } from "@tests/unit/setup";
import dayjs from "dayjs";
import { mdiCalendar } from '@mdi/js';


describe("PeriodField", () => {
	it("should render the component", () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
	it("emits change event when date range is selected", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
		});
		await wrapper.setData({ date: [dayjs().format('DD/MM/YYYY'), dayjs().add(4, 'day').format('DD/MM/YYYY')] });

		expect(wrapper.emitted().change).toBeTruthy();
	});
	it("emits change event when date is updated", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.setData({ date: [dayjs().format('DD/MM/YYYY'), dayjs().add(4, 'day').format('DD/MM/YYYY')] });
		await wrapper.setData({ date: [dayjs().add(2, 'day').format('DD/MM/YYYY'), dayjs().add(6, 'day').format('DD/MM/YYYY')] });

		expect(wrapper.emitted().change).toBeTruthy();
		expect(wrapper.emitted().change.length).toBe(2);
		expect(wrapper.emitted().change[1]).toEqual([[dayjs().add(2, 'day').format('DD/MM/YYYY'), dayjs().add(6, 'day').format('DD/MM/YYYY')]]);
	});
	it("updates date when v-model changes", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
		});

		const newDate = [dayjs().format('DD/MM/YYYY'), dayjs().add(4, 'day').format('DD/MM/YYYY')];
		await wrapper.setData({ date: newDate });
		expect(wrapper.vm.date).toEqual(newDate);
	});

	it("should set prependIconValue to calendarIcon when outlined is false and noPrependIcon is false", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				outlined: false,
				noPrependIcon: false,
			},
		});

		expect(wrapper.vm.prependIconValue).toEqual(mdiCalendar);
	});

	it("should set prependIconValue to undefined when noPrependIcon is true", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				outlined: false,
				noPrependIcon: true,
			},
		});

		expect(wrapper.vm.prependIconValue).toBeUndefined();
	});
	it("should set prependIconValue to undefined when noPrependIcon is true", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				appendIcon: false,
				noPrependIcon: true,
			},
		});

		expect(wrapper.vm.prependIconValue).toBeUndefined();
	});

	it("should set prependIconValue to undefined when appendIcon is true", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				appendIcon: true,
				noPrependIcon: false,
			},
		});

		expect(wrapper.vm.prependIconValue).toBeUndefined();
	});
	it("should return 'underlined' when disabled is true", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				disabled: true,
			},
		});

		expect(wrapper.vm.getVariant).toEqual('underlined');
	});

	it("should return 'underlined' when noPrependIcon is true", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				noPrependIcon: true,
			},
		});

		expect(wrapper.vm.getVariant).toEqual('underlined');
	});

	it("should return 'underlined' when outlined is false", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				outlined: false,
			},
		});

		expect(wrapper.vm.getVariant).toEqual('underlined');
	});

	it("should return 'outlined' when disabled, noPrependIcon are false and outlined is true", async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				disabled: false,
				noPrependIcon: false,
				outlined: true,
			},
		});

		expect(wrapper.vm.getVariant).toEqual('outlined');
	});
});
