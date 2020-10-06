import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { MaskValue } from '../maskValue';

interface TestComponent extends Vue {
	mask: string | boolean;
	maskValue?: string | boolean;
	dateFormat: string;
}

/** Create the wrapper */
function createWrapper(mask?: string | boolean, dateFormat?: string) {
	const component = Vue.component('Test', {
		mixins: [
			MaskValue
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			mask
		},
		mocks: {
			dateFormat
		}
	}) as Wrapper<TestComponent>;
}

// Tests
describe('MaskValue', () => {
	it('computes a mask from dateFormat if mask prop is empty', () => {
		const wrapper = createWrapper(undefined, 'YYYY-DD-MM');

		expect(wrapper.vm.maskValue).toBe('####-##-##');
	});

	it('doesn\'t compute a mask if mask prop is false', () => {
		const wrapper = createWrapper(false);

		expect(wrapper.vm.maskValue).toBeUndefined();
	});

	it('returns the mask without modification is mask prop is a string', () => {
		const mask = '##/##/####';
		const wrapper = createWrapper(mask);

		expect(wrapper.vm.maskValue).toBe(mask);
	});
});
