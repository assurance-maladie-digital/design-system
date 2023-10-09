import { defineComponent } from "vue";

const GetThemeIcon = defineComponent({
	methods: {
		getThemeIcon(iconName: string): string | undefined {
			if (!this.$vd?.theme?.icons) {
				return;
			}

			return this.$vd.theme.icons[iconName];
		},
	},
});

export default GetThemeIcon;
