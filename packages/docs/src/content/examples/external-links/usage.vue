<template>
	<VCard
		width="100%"
		min-height="200px"
		class="mx-auto overflow-hidden"
	>
		<ExternalLinks
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ExternalLink } from '@cnamts/vue-dot/src/elements/ExternalLinks/types';

	const links: ExternalLink[] = [
		{
			href: 'https://ameli.fr/',
			text: 'Ameli'
		},
		{
			href: 'https://espacepro.ameli.fr/',
			text: 'Ameli Pro'
		}
	];

	@Component({
		inheritAttrs: false
	})
	export default class ExternalLinksUsage extends Vue {
		defaultProps = {
			items: links,
			position: 'top left',
			nudgeTop: 0,
			nudgeBottom: 0
		};

		propsHiddenByDefault = [
			'nudgeTop',
			'nudgeBottom'
		];

		options = {
			selects: {
				position: [
					'top left',
					'top right',
					'bottom left',
					'bottom right'
				]
			},
			sliders: {
				nudgeTop: {
					min: 0,
					max: 50,
					step: 10
				},
				nudgeBottom: {
					min: 0,
					max: 50,
					step: 10
				}
			}
		};
	}
</script>
