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
	it('', () => {
		const wrapper = createWrapper(undefined, 'YYYY-DD-MM');

		expect(wrapper.vm.maskValue).toBe('####-##-##');
	});

	it('', () => {
		const wrapper = createWrapper(false);

		expect(wrapper.vm.maskValue).toBe(undefined);
	});

	it('', () => {
		const mask = '##/##/####';
		const wrapper = createWrapper(mask);

		expect(wrapper.vm.maskValue).toBe(mask);
	});
});
