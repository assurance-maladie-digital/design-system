import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { GetThemeIcon } from '../../../mixins/getThemeIcon';

const Props = Vue.extend({
	props: {
		icon: {
			type: String,
			default: undefined
		}
	}
});

const MixinsDeclaration = mixins(Props, GetThemeIcon);

@Component
export class ThemeIcon extends MixinsDeclaration {
	get themeIcon(): string | undefined {
		return this.getThemeIcon(this.icon);
	}
}
