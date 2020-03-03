import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import FormSection from '../../../FormSection';
import { FormSectionGroupCore } from '../formSectionGroupCore';

import { SectionGroup } from '../../types';
import { sectionGroup } from '../../tests/data/sectionGroup';

import { FormValues } from './../../../../functions/getFormValues/types.d';

Vue.component('FormSection', FormSection);

/** Create the wrapper */
function createWrapper(sectionGroup: SectionGroup) {
	const component = Vue.component('test', {
		mixins: [
			FormSectionGroupCore
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			sectionGroup
		}
	}) as Wrapper<FormSectionGroupCore>;
}

// Tests
describe('form section group', () => {
	it('emits change event', async() => {
		const wrapper = createWrapper(sectionGroup);

		const updatedFieldGroup = sectionGroup.section2.questions;
		updatedFieldGroup.question2.value = 'test';

		wrapper.vm.emitSectionGroupUpdated(updatedFieldGroup, 'section2');

		let updatedTestForm: SectionGroup = {
			...sectionGroup
		};
		updatedTestForm.section2.questions.question2.value = 'test';

		await Vue.nextTick();

		expect(wrapper.emitted('change')).toBeTruthy();
		expect(wrapper.emitted().change[0]).toEqual([updatedTestForm]);
	});

});
