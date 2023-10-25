<template>
	<VBtn
		v-bind="$attrs"
		:disabled="inert"
		:tag="tag"
		rounded="0"
		class="vd-footer-btn overflow-hidden text-subtitle-2 grey-lighten-80 mx-4 my-2"
		:class="{ 'vd-footer-btn--inert': inert }"
		width="180"
		height="32"
		variant="tonal"
	>
		<slot />
	</VBtn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import consola from "consola";

const Props = {
	props: {
		inert: {
			type: Boolean,
			default: false,
		},
	},
};

export default defineComponent({
	inheritAttrs: false,
	props: {
		...Props.props,
	},
	computed: {
		tag(): string | null {
			return this.inert ? "div" : "button";
		},
	},
	mounted() {
		// eslint-disable-next-line no-console
		consola.warn(
			"FooterBtn is deprecated since v2.2.0, use FooterBar instead."
		);
	},
});
</script>

<style lang="scss" scoped>
.theme--light.vd-footer-btn.v-btn {
	color: #424242 !important;
}
.vd-footer-btn--inert {
	opacity: 1;
}
</style>
