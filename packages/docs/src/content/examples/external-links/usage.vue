<template>
	<VCard
		class="mx-auto overflow-hidden"
		min-height="200px"
		width="100%"
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

	const items: ExternalLink[] = [
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
			items,
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
