import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';
import { mountComponent } from '@/tests';
import DialogBox from '../DialogBox.vue';
import { VDialog, VCard } from 'vuetify/lib';

let wrapper: Wrapper<Vue>;

describe('DialogBox', () => {
	it('renders correctly', async() => {
		wrapper = mountComponent(DialogBox, {
			propsData: {
				value: true,
				title: 'Title'
			}
		}, true);

		await Vue.nextTick();

		const dialog = wrapper.findComponent(VDialog);
		const title = wrapper.findComponent(VCard).find('h2').text();

		expect(dialog.exists()).toBe(true);
		expect(title).toBe('Title');
	});
});
