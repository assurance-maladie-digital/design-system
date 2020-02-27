import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { GetThemeIcon } from '../../../mixins/getThemeIcon';

const Props = Vue.extend({
	props: {
		/**
		 * The icon from the theme, optional when
		 * using the slot instead of theme icon
		 */
		icon: {
			type: String,
			default: undefined
		}
	}
});

const MixinsDeclaration = mixins(Props, GetThemeIcon);

/** Add icon prop and provide computed themeIcon */
@Component
export class ThemeIcon extends MixinsDeclaration {
	/**
	 * The icon from the theme matching the icon prop value
	 *
	 * @returns {string|undefined} The icon if it exists
	 */
	get themeIcon(): string | undefined {
		return this.getThemeIcon(this.icon);
	}
}
