import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FilterSelector from '../';
import { vuetify } from '@tests/unit/setup';

describe('FilterSelector', () => {
	it('renders correctly', () => {
		const wrapper = mount(FilterSelector, {
			propsData: {
				filters: []
			},
			global: {
				plugins: [vuetify]
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
