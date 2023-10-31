import { defineComponent } from "vue";
import { GetThemeIcon } from "../../../mixins/getThemeIcon";

export const ThemeIcon = defineComponent({
	mixins: [GetThemeIcon],
	props: {
		icon: {
			type: String,
			default: undefined,
		},
	},
	computed: {
		themeIcon(): string | undefined {
			return this.getThemeIcon(this.icon);
		},
	},
});
