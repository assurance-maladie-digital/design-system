<template>
	<VBtn
		v-bind="{
			...options.btn,
			...$attrs,
		}"
		:aria-label="menuBtnActionLabel"
		:class="spacing"
		class="vd-header-menu-btn"
	>
		<VIcon v-bind="options.icon">
			{{ menuIcon }}
		</VIcon>

		{{ locales.menu }}
	</VBtn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mdiMenu } from "@mdi/js";

import { locales } from "./locales";
import { config } from "./config";

import { customizable } from "../../../mixins/customizable";

const Props = {
	props: {
		drawer: {
			type: Boolean,
			default: false,
		},
		spacing: {
			type: String,
			default: "px-2 mx-n2",
		},
	},
};

export default defineComponent({
	inheritAttrs: false,
	mixins: [Props, customizable(config)],
	props: {
		...Props.props,
	},
	data() {
		return {
			locales,
			menuIcon: mdiMenu,
		};
	},
	computed: {
		menuBtnActionLabel(): string {
			const action = this.drawer ? locales.close : locales.open;

			return locales.menuBtnLabel(action);
		}
	}
});
</script>
