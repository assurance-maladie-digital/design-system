<template>
	<VBtn
		v-bind="$attrs"
		:disabled="inert"
		:tag="tag"
		class="vd-footer-btn overflow-hidden text-subtitle-2 grey-lighten-80 mx-4 my-2"
		width="180"
		height="32"
		tile
		variant="text"
	>
		<slot />
	</VBtn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import consola from 'consola';

const Props = {
	props: {
		inert: {
			type: Boolean,
			default: false
		}
	}
};

/** @deprecated Use FooterBar instead */

export default defineComponent({
	inheritAttrs: false,
	props: {
		...Props.props,
	},
	computed: {
		tag(): string | null {
			return this.inert ? 'div' : null;
		}
	},
	mounted() {
		// eslint-disable-next-line no-console
		consola.warn('FooterBtn is deprecated since v2.2.0, use FooterBar instead.');
	}
});
</script>

<style lang="scss" scoped>
	.theme--light.vd-footer-btn.v-btn {
		color: #424242 !important;
	}
</style>
