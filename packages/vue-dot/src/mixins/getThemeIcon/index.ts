import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class GetThemeIcon extends Vue {
	getThemeIcon(iconName: string): string | undefined {
		if (!this.$vd?.theme?.icons) {
			return;
		}

		return this.$vd.theme.icons[iconName];
	}
}
