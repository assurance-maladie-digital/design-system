<script lang="ts">
	import { defineComponent } from 'vue'

	import { locales } from './locales'

	export default defineComponent({
		props: {
			label: {
				type: String,
				default: locales.label,
			},
			target: {
				type: String,
				default: '#main',
			}
		},
		watch: {
			$route() {
				this.$nextTick(() => (this.$refs.skipLinkSpan as HTMLLinkElement).focus())
			},
		},
	})
</script>

<template>
	<div class="vd-skip-link-container">
		<span
			ref="skipLinkSpan"
			tabindex="-1"
		/>

		<a
			:href="target"
			class="vd-skip-link text-primary d-block d-sr-only-focusable px-2"
		>
			<slot>{{ label }}</slot>
		</a>
	</div>
</template>

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
