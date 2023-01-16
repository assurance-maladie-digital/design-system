import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import MultipleAnswers from '..';

let wrapper: Wrapper<Vue>;

describe('MultipleAnswers', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(MultipleAnswers,{
			propsData: {
				questionDatas: {
						name: 'first-question',
						type: 'stars',
						question: 'la deuxieme question ?',
						answers: ['reponse 1', 'reponse 2', 'reponse 3', 'reponse 4']
					}
			}
		});
		expect(html(wrapper)).toMatchSnapshot();
	});
});
