import { defineComponent } from "vue";

export const GetThemeIcon = defineComponent({
	methods: {
		getThemeIcon(iconName) {
			if (!this.$vd?.theme?.icons) {
				return undefined;
			}

			return this.$vd.theme.icons[iconName];
		},
	},
});
