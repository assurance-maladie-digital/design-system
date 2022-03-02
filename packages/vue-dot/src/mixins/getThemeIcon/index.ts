import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class GetThemeIcon extends Vue {
	getThemeIcon(iconName: string): string | undefined {
		// If there are icons in the theme
		if (this.$vd && this.$vd.theme && this.$vd.theme.icons) {
			// Find the icon with the name passed in the prop
			const icon = this.$vd.theme.icons[iconName];

			// If the icon isn't found, it will return undefined
			return icon;
		}

		return undefined;
	}
}
