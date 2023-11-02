<script lang="ts">
	import { defineComponent } from 'vue'

	import consola from 'consola'

	export default defineComponent({
		mounted() {
			consola.warn(
				'FooterWrapper is deprecated since v2.2.0, use FooterBar instead.'
			)
		},
	})
</script>

<template>
	<VLayout>
		<VFooter
			width="100%"
			elevation="1"
			color="#fafafa"
			class="vd-footer-wrapper"
		>
			<VRow
				justify="center"
				class="ma-0"
			>
				<slot />
			</VRow>
		</VFooter>
	</VLayout>
</template>

<style lang="scss" scoped>
	.v-footer {
		min-height: 64px;
	}
</style>
