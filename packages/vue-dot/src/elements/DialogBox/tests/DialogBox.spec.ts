import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';
import { mountComponent } from '@/tests';
import DialogBox from '../DialogBox.vue';
import { VDialog } from 'vuetify/lib';

let wrapper: Wrapper<Vue>;

describe('DialogBox', () => {
	it('renders correctly', async() => {
		wrapper = mountComponent(DialogBox, {
			propsData: {
				dialog: true,
				title: 'Title'
			}
		}, true);

		await Vue.nextTick();

		const dialog = wrapper.findComponent(VDialog);

		expect(dialog.exists()).toBe(true);
	});
});
