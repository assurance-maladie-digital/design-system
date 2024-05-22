import { shallowMount } from '@vue/test-utils';
import { ErrorProp } from '../errorProp.ts';
import{ describe, it, expect } from 'vitest';

describe('ErrorProp', () => {
	it('defaults error prop to false', () => {
		const wrapper = shallowMount(ErrorProp);
		expect(wrapper.vm.error).toBe(false);
	});

	it('accepts error prop', () => {
		const wrapper = shallowMount(ErrorProp, {
			propsData: {
				error: true,
			},
		});
		expect(wrapper.vm.error).toBe(true);
	});

	it('emits update:error event when internalErrorProp is set', async () => {
		const wrapper = shallowMount(ErrorProp, {
			propsData: {
				error: false,
			},
		});
		wrapper.vm.internalErrorProp = true;
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('update:error')).toBeTruthy();
		const emittedErrorEvent = wrapper.emitted('update:error');
		if (emittedErrorEvent) {
			expect(emittedErrorEvent[0]).toEqual([true]);
		}
	});

	it('returns the value of error prop when internalErrorProp is accessed', () => {
		const wrapper = shallowMount(ErrorProp, {
			propsData: {
				error: true,
			},
		});
		expect((wrapper.vm as any).internalErrorProp).toBe(true);
	});

});
