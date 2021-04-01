import { action } from '@storybook/addon-actions';
import DialogBox from '../elements/DialogBox/index';
import *as icons from '@mdi/js';

export default {
	component: DialogBox,
	title: 'Elements/DialogBox',
	excludeStories: /.*Data$/,
	argTypes : {
		dialog : {  control: 'boolean' , defaultValue: false}
	}
};

export const UseCase = (args, { argTypes} ) : unknown => ({
	components: { DialogBox },
	props: Object.keys(argTypes),
    template : `
	<DialogBox
	    v-model="dialog"
	    title="Enregistrement"
	    @cancel="dialog = false"
	    @confirm="dialog = false"
    >
	    <p>Souhaitez-vous procéder à l'enregistrement ?</p>
    </DialogBox>`
});
UseCase.args = {
}