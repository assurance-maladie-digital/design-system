export const GetThemeIcon = {
	methods: {
		getThemeIcon(iconName) {
			if (!this.$vd?.theme?.icons) {
				return undefined;
			}

			return this.$vd.theme.icons[iconName];
		},
	},
};
