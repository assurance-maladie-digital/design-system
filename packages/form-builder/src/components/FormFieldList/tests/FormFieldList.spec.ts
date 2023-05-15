import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import FormFieldList from '../';

import { addressFields } from './data/addressFields';

let wrapper: Wrapper<Vue>;

describe('FormFieldList', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FormFieldList, {
			propsData: {
				fields: addressFields
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
