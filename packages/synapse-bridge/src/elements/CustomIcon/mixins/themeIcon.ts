
import { GetThemeIcon } from "../../../mixins/getThemeIcon";

const Props = {
	props: {
		icon: {
			type: String,
			default: undefined,
		},
	},
};

export const ThemeIcon = {
	mixins: [Props, GetThemeIcon],
	computed: {
		themeIcon(): string | undefined {
			return this.getThemeIcon(this.icon);
		},
	},
};

export default ThemeIcon;