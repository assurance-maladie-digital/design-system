import { action } from '@storybook/addon-actions';
import DialogBox from '../elements/DialogBox/index';
import *as icons from '@mdi/js';

export default {
	component: DialogBox,
	title: 'Elements/DialogBox',
	excludeStories: /.*Data$/
};

export const UseCase = (args, { argTypes} ) : unknown => ({
	components: { DialogBox }
});
