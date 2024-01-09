import { defineComponent } from "vue";

export const themeIcon = defineComponent({
	props: {
		icon: {
			type: String,
			default: undefined,
		},
	},
	computed: {
		themeIcon(): boolean {
			return this.icon !== undefined;
		},
	},
	methods: {
		getThemeIcon(): any {
			return this.icon;
		},
	},
});

