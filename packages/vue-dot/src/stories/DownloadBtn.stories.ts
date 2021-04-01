import { action } from '@storybook/addon-actions';
import DownloadBtn from '../elements/DownloadBtn/index';
import *as icons from '@mdi/js';



export default {
	component: DownloadBtn,
	title: 'Elements/DownloadBtn',
	excludeStories: /.*Data$/
};

export const UseCase = (args, { argTypes} ) : unknown => ({
	components: { DownloadBtn },
	props: Object.keys(argTypes),
	template : `
    <DownloadBtn :file-promise="filePromise">
         attestation.txt
    </DownloadBtn>
	`
});
UseCase.args ={
    filePromise : () =>{  }
}