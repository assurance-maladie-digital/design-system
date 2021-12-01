<template>
	<VFooter
		:elevation="3"
		color="#fff"
		class="d-flex justify-center"
	>
		<slot>
			<div
				v-for="item in items"
				:key="item.to"
			>
				<RouterLink
					:to="item.to"
					class="footer-link my-2 mx-4"
				>
					{{ item.label }}
				</RouterLink>
			</div>
		</slot>

		<p class="grey--text text--darken-2 my-2 mx-4">
			{{ locales.accessibilityLevel }}
		</p>

		<p class="grey--text text--darken-2 my-2 mx-4">
			{{ locales.version }} {{ version }}
		</p>
	</VFooter>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component,  { mixins } from 'vue-class-component';

	import { locales } from './locales';

	import { RouterLinkItem } from './types';

	const Props = Vue.extend({
		props: {
			items: {
				type: Array as PropType<RouterLinkItem[]>,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class PageFooter extends MixinsDeclaration {
		// Locales
		locales = locales;

		version = process.env.VUE_APP_VERSION;
	}
</script>

<style lang="scss" scoped>
	.footer-link {
		color: inherit;
		transition: .15s;
		text-decoration: none;
		border-bottom: 1px solid transparent;

		&:hover,
		&:focus {
			border-color: currentColor;
		}
	}
</style>