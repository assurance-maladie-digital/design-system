<template>
	<VBtn
		v-bind="$attrs"
		:disabled="inert"
		:tag="tag"
		class="vd-footer-btn overflow-hidden text-none subtitle-2 grey lighten-3 mx-4 my-2"
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

	const Props = Vue.extend({
		props: {
			/** Disable the button */
			inert: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/** FooterBtn is a component used to display a button in Footer */
	@Component({
		inheritAttrs: false
	})
	export default class FooterBtn extends MixinsDeclaration {
		/**
		 * The tag of the VBtn
		 * (Null will use Vuetify's default, div is used when inert for better a11y)
		 *
		 * @returns {string|null} The tag to render
		 */
		get tag(): string | null {
			return this.inert ? 'div' : null;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-footer-btn.v-btn {
		color: #424242 !important;
	}
</style>
