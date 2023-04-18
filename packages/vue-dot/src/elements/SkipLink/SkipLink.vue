<template>
	<a
		ref="skipLink"
		:href="target"
		class="vd-skip-link d-block d-sr-only-focusable am-blue-lighten-97 px-2"
	>
		<slot>{{ label }}</slot>
	</a>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Refs } from '../../types';

	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				default: locales.label
			},
			target: {
				type: String,
				default: '#main'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class SkipLink extends MixinsDeclaration {
		$refs!: Refs<{
			skipLink: HTMLLinkElement;
		}>;

		mounted() {
			if (!this.$route) {
				return;
			}

			this.$watch('$route.path', () => {
				this.$nextTick(() => this.$refs.skipLink.focus());
			});
		}
	}
</script>

<style lang="scss" scoped>
	.vd-skip-link {
		z-index: 150;
		transition: none;
		position: fixed;
		width: 100%;
	}
</style>
