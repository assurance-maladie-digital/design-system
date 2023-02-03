<template>
	<div class="d-flex">
		<a
			v-if="externalLink"
			v-bind="options"
			:href="externalLink"
			target="_blank"
		>
			<slot />
		</a>
		<RouterLink
			v-else
			v-bind="options"
			:to="route"
		>
			<slot />
		</RouterLink>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	const Props = Vue.extend({
		props: {
			options: {
				type: Object as PropType<Record<string, unknown>>,
				default: () => ({})
			},
			route: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: '' })
			},
			externalLink: {
				type: String as PropType<string>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FooterLink extends MixinsDeclaration {}
</script>
