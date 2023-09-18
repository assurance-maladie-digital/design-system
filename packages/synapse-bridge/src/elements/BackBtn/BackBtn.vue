<template>
	<VBtn
		v-bind="$attrs"
		:text="!dark"
		:dark="dark"
		:color="dark ? 'white' : 'primary'"
		:outlined="dark"
		:class="{
			'px-0': !dark,
			'pr-1': !dark && !hideBackIcon,
		}"
		class="vd-back-btn"
		v-on="$listeners"
	>
		<slot name="icon">
			<VIcon
				v-if="!hideBackIcon"
				:color="dark ? 'white' : 'primary'"
				:class="{ 'ml-n1': dark }"
				class="mr-1"
			>
				{{ backIcon }}
			</VIcon>
		</slot>

		<slot>
			{{ locales.label }}
		</slot>
	</VBtn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { locales } from "./locales";

import { mdiArrowLeft } from "@mdi/js";

const Props = {
	props: {
		hideBackIcon: {
			type: Boolean,
			default: false,
		},
		dark: {
			type: Boolean,
			default: false,
		},
	},
};

export default defineComponent({
	mixins: [Props],
	props: {
		...Props.props,
	},
	data() {
		return {
			backIcon: mdiArrowLeft,
			locales,
		};
	},
});
</script>

<style lang="scss" scoped>
.v-btn {
	// Disable hover state on light theme
	&.theme--light::before {
		content: none;
	}

	&:focus-visible {
		outline: 2px solid;
	}

	.v-icon {
		flex: none;
	}
}
</style>
