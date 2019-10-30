import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import maskValue from '../mixins/maskValue';

interface TestComponent extends Vue {
	mask: string | boolean;
	maskValue?: string | boolean;
	dateFormat: string;
}

/** Create the wrapper */
function createWrapper(mask?: string | boolean, dateFormat?: string) {
	const component = Vue.component('test', {
		mixins: [
			maskValue
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
describe('maskValue', () => {
	it('computes a mask from dateFormat if mask prop is empty', () => {
		const wrapper = createWrapper(undefined, 'YYYY-DD-MM');

		expect(wrapper.vm.maskValue).toBe('####-##-##');
	});

	it('doesn\'t computes a mask if mask prop is false', () => {
		const wrapper = createWrapper(false);

		expect(wrapper.vm.maskValue).toBe(undefined);
	});

	it('returns the mask without modification is mask prop is a string', () => {
		const mask = '##/##/####';
		const wrapper = createWrapper(mask);

		expect(wrapper.vm.maskValue).toBe(mask);
	});
});
