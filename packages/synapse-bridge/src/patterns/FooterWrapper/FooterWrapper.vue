<template>
	<VLayout>
		<VFooter
			width="100%"
			elevation="1"
			color="#fafafa"
			class="vd-footer-wrapper"
		>
			<VRow class="ma-0" justify="center">
				<slot />
			</VRow>
		</VFooter>
	</VLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import consola from "consola";

export default defineComponent({
	mounted() {
		// eslint-disable-next-line no-console
		consola.warn(
			"FooterWrapper is deprecated since v2.2.0, use FooterBar instead."
		);
	},
});
</script>

<style lang="scss" scoped>
.v-footer {
	min-height: 64px;
}
</style>
