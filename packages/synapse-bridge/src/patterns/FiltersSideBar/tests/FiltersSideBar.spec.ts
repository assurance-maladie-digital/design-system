import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FiltersSideBar from "..";
import { defineComponent } from "vue";
import { VApp } from "vuetify/components";

describe("FilterSideBar", () => {

	const EventSenderComponent = defineComponent({
		template: '<div>lorem</div>',
		emits: ['update:modelValue'],
		methods: {
			sentEvent() {
				this.$emit('update:modelValue', "Jane Doe");
			}
		},
	});

	const TestComponent = defineComponent({
		components: {VApp, FiltersSideBar, EventSenderComponent},
		template: `
			<VApp>
				<FiltersSideBar v-model="localModelValue">
					<template v-slot:name="{ attrs }">
						<EventSenderComponent
							v-bind="attrs"
						/>
					</template>
				</FiltersSideBar>
			</VApp>
		`,
		props: {
			modelValue: {
				type: Array,
			},
		},
		data() {
			return {
				localModelValue: this.modelValue,
			};
		},
		watch: {
			localModelValue(newValue) {
				this.$emit('update:modelValue', newValue);
			},
		},
	});

	it("renders correctly", () => {
		const wrapper = mount(TestComponent, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with an active filter", async () => {
		const wrapper = mount(TestComponent, {
			propsData: {
				modelValue: [
					{
						name: "name",
						title: "Nom",
						value: "John Doe",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.find('.v-btn__content').trigger('click');

		await wrapper.find('.v-expansion-panel-title').trigger('click');

		expect(wrapper.find('.v-chip').text()).toBe('John Doe');
	});

	it("renders correctly with multiple active filters", () => {
		const wrapper = mount(TestComponent, {
			propsData: {
				modelValue: [
					{
						name: "name",
						label: "Nom",
						value: "John Doe",
					},
					{
						name: "age",
						label: "Âge",
						value: "18",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.findAll('.v-expansion-panel').length).toBe(2);
	});

	it('emits "update:modelValue" event when a filter is removed', async () => {
		const wrapper = mount(TestComponent, {
			propsData: {
				modelValue: [
					{
						name: "name",
						label: "Nom",
						value: "John Doe",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.find('.v-btn__content').trigger('click');

		await wrapper.find('.v-expansion-panel-title').trigger('click');

		await wrapper.find('.v-chip__close').trigger('click');

		await wrapper.find('button:nth-child(3)').trigger('click');

		expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual([{
			name: "name",
			label: "Nom",
			value: undefined,
		}]);
	});

	it('renders the template corresponding to the filter name', async () => {
		const wrapper = mount(TestComponent, {
			propsData: {
				modelValue: [
					{
						name: "name",
						title: "Nom",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.find('.v-expansion-panel-title').text()).toBe('Nom');
	})

	it('emits "update:modelValue" event when a filter is added', async () => {
		const wrapper = mount(TestComponent, {
			propsData: {
				modelValue: [
					{
						name: "name",
						title: "Nom",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.find('.v-btn__content').trigger('click');
		await wrapper.find('.v-expansion-panel-title').trigger('click');

		const EventSender = wrapper.findComponent(EventSenderComponent);
		await wrapper.find('button:nth-child(3)').trigger('click');

		EventSender.vm.sentEvent();

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
	});

	it('reset one filter when the reset button of the filter is clicked', async () => {
		const wrapper = mount(TestComponent, {
			propsData: {
				modelValue: [
					{
						name: "name",
						title: "Nom",
						value: "John Doe",
					},
					{
						name: "age",
						title: "Âge",
						value: "18",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.find('.v-btn__content').trigger('click');

		await wrapper.find('.v-expansion-panel-title').trigger('click');

		await wrapper.find('[data-test-id="reset-btn"]').trigger('click');

		await wrapper.find('button:nth-child(3)').trigger('click');

		expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual([{
			name: "name",
			title: "Nom",
			value: undefined,
		}, {
			name: "age",
			title: "Âge",
			value: "18",
		}]);
	});

	it('resets all the filters when the reset button is clicked', async () => {
		const wrapper = mount(TestComponent, {
			propsData: {
				modelValue: [
					{
						name: "name",
						title: "Nom",
						value: "John Doe",
					},
					{
						name: "age",
						title: "Âge",
						value: "18",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.find('.v-btn__content').trigger('click');

		await wrapper.find('.v-navigation-drawer__content>div:last-child button:nth-child(2)').trigger('click');

		expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual([{
			name: "name",
			title: "Nom",
			value: undefined,
		}, {
			name: "age",
			title: "Âge",
			value: undefined,
		}]);
	});

	it('open and close the drawer without changing the filters', async () => {
		const wrapper = mount(TestComponent, {
			propsData: {
				modelValue: [
					{
						name: "name",
						title: "Nom",
						value: "John Doe",
					},
					{
						name: "age",
						title: "Âge",
						value: "18",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.findComponent(FiltersSideBar).setData({ drawer: true });

		await wrapper.find('.v-navigation-drawer__content>div:last-child button:nth-child(1)').trigger('click');

		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
	});
});

