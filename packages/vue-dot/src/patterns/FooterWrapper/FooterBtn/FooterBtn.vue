<template>
	<VBtn
		v-bind="$attrs"
		:disabled="inert"
		:tag="tag"
		class="vd-footer-btn overflow-hidden text-none text-subtitle-2 grey lighten-3 mx-4 my-2"
		width="180"
		height="32"
		tile
		text
	>
		<slot />
	</VBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import consola from 'consola';

	const Props = Vue.extend({
		props: {
			inert: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/** @deprecated Use FooterBar instead */
	@Component({
		inheritAttrs: false
	})
	export default class FooterBtn extends MixinsDeclaration {
		get tag(): string | null {
			return this.inert ? 'div' : null;
		}

		mounted() {
			// eslint-disable-next-line no-console
			consola.warn('FooterBtn is deprecated since v2.2.0, use FooterBar instead.');
		}
	}
</script>

<style lang="scss" scoped>
	.theme--light.vd-footer-btn.v-btn {
		color: #424242 !important;
	}
</style>
