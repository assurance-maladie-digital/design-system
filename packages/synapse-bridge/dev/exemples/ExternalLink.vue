<template>
	<VCard min-height="274px" class="mx-auto overflow-hidden">
		<ExternalLinks :items="links" position="top left" />
		<ExternalLinks :items="links" nudge-top="80px" position="top right" />
	</VCard>
</template>

<script lang="ts">
import ExternalLinks from "../src/elements/ExternalLinks";
import { defineComponent } from "vue";

import { tokens } from '@cnamts/design-tokens';

import type { ExternalLink } from '../src/elements/ExternalLinks/types';

export default defineComponent({
	components: {
		ExternalLinks,
	},
	data() {
		return {
			appBarColor: tokens.colors.amBlue.lighten97,
			links: [
				{
					href: 'https://ameli.fr/',
					text: 'Ameli'
				},
				{
					href: 'https://espacepro.ameli.fr/',
					text: 'Ameli Pro'
				}
			] as ExternalLink[]
		};
	},
});
</script>
