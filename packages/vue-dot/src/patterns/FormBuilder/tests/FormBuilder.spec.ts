import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import FormBuilder from '../FormBuilder.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('FileUpload', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			propsData: {
				value: {
					q1: {
						title: 'Question 1 ?',
						type: 'string',
						value: '',
						description: 'information supplémentaire',
						tooltip: 'tooltip 1',
						metadata: {
							label: 'field 1',
							placeholder: 'placeholder1',
							hint: 'hint1',
							persistentHint: true,
							outlined: true
						}
					},
					q2: {
						title: 'Question 2 ?',
						type: 'string',
						value: '',
						description: 'information supplémentaire 2',
						tooltip: 'tooltip 2',
						metadata: {
							label: 'field 2',
							placeholder: 'placeholder2',
							hint: 'hint2',
							persistentHint: true,
							outlined: true
						}
					},
					f3: {
						type: 'string',
						value: '',
						metadata: {
							label: 'field 3',
							placeholder: 'placeholder3',
							hint: 'hint3',
							persistentHint: true,
							outlined: true
						}
					},
					f4: {
						type: 'string',
						value: '',
						metadata: {
							label: 'field 4',
							placeholder: 'placeholder3',
							hint: 'hint3',
							persistentHint: true,
							outlined: true
						}
					},
					f5: {
						type: 'string',
						value: '',
						metadata: {
							label: 'field 5',
							placeholder: 'placeholder3',
							hint: 'hint3',
							persistentHint: true,
							outlined: true
						}
					}
				},
				layout: [
					{
						type: 'question',
						fields: ['q1']
					},
					{
						type: 'question',
						fields: ['q2']
					},
					{
						type: 'm',
						fields: ['f3']
					},
					{
						type: 'mm',
						fields: ['f4', 'f5']
					}
				]
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
