<script lang="ts">
	import { defineComponent } from 'vue'

	import consola from 'consola'

	export default defineComponent({
		inheritAttrs: false,
		props: {
			inert: {
				type: Boolean,
				default: false,
			},
		},
		computed: {
			tag(): string {
				return this.inert ? 'div' : 'button'
			},
		},
		mounted() {
			consola.warn(
				'FooterBtn is deprecated since v2.2.0, use FooterBar instead.'
			)
		},
	})
</script>

<template>
	<VBtn
		v-bind="$attrs"
		:disabled="inert"
		:tag="tag"
		:class="{ 'vd-footer-btn--inert': inert }"
		rounded="0"
		width="180px"
		height="32px"
		variant="tonal"
		class="vd-footer-btn overflow-hidden text-subtitle-2 grey-lighten-80 mx-4 my-2"
	>
		<slot />
	</VBtn>
</template>

<style lang="scss" scoped>
	.vd-footer-btn.v-btn.theme--light {
		color: #424242 !important;
	}

	.vd-footer-btn--inert {
		opacity: 1;
	}
</style>
