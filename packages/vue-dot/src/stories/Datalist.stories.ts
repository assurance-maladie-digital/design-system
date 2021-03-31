import { action } from '@storybook/addon-actions';
import DataList from '../elements/DataList/index';
import *as icons from '@mdi/js';

export default {
	component: DataList,
	title: 'Elements/DataList',
	excludeStories: /.*Data$/
};

export const UseCase = (args, { argTypes} ) : unknown => ({
	components: { DataList }
});
