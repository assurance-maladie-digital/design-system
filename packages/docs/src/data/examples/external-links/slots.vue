<template>
	<VCard
		min-height="200px"
		class="mx-auto overflow-hidden"
	>
		<ExternalLinks
			:items="links"
			position="top left"
		>
			<template #link-icon>
				<VIcon>
					{{ arrowIcon }}
				</VIcon>
			</template>
		</ExternalLinks>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ExternalLink } from '@cnamts/vue-dot/src/elements/ExternalLinks/types';

	import { mdiArrowTopRight } from '@mdi/js';

	@Component
	export default class ExternalLinksSlots extends Vue {
		arrowIcon = mdiArrowTopRight;

		links: ExternalLink[] = [
			{
				href: 'https://ameli.fr/',
				text: 'Ameli'
			},
			{
				href: 'https://espacepro.ameli.fr/',
				text: 'Ameli Pro'
			},
			{
				href: 'https://github.com/assurance-maladie-digital',
				text: 'Design System'
			}
		];
	}
</script>
