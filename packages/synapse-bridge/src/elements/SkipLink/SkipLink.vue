<template>
	<div class="vd-skip-link-container">
		<span
			ref="skipLinkSpan"
			tabindex="-1"
		/>

		<a
			:href="target"
			class="vd-skip-link d-block d-sr-only-focusable px-2"
		>
			<slot>{{ label }}</slot>
		</a>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import type { Refs } from '../../types';
import { locales } from './locales';

const Props = {
	label: {
		type: String,
		default: locales.label
	},
	target: {
		type: String,
		default: '#main'
	}
}

export default defineComponent({
	mixins: [Props],
	props: Props,
	data() {
		return {
			$refs: {} as Refs<{
				skipLinkSpan: HTMLLinkElement;
			}>
		}
	},
	mounted() {
		if (!this.$refs.skipLinkSpan) {
			return;
		}
		this.$watch('$route.path', () => {
			this.$nextTick(() => this.$refs.skipLinkSpan.focus());
		});
	}
});
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';
	.vd-skip-link {
		z-index: 150;
		position: fixed;
		top: 0;
		transition: none;
		width: 100%;
		background: #fff;
		outline: none; // Disable outline to use border
		border: 2px solid $vd-am-blue-darken-60;
	}
</style>
