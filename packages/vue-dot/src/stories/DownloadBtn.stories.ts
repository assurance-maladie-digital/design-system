import { Args, ArgTypes } from '@storybook/api';
import DownloadBtn from '../elements/DownloadBtn/index';

export default {
	component: DownloadBtn,
	title: 'Elements/DownloadBtn',
	excludeStories: /.*Data$/
};

export const UseCase = (args:Args, { argTypes } :ArgTypes) : unknown => ({
	components: { DownloadBtn },
	props: Object.keys(argTypes),
	template : `
    <DownloadBtn :file-promise="filePromise">
         attestation.txt
    </DownloadBtn>
	`
});
UseCase.args ={};
