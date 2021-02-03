<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<PageCard
			v-bind="$attrs"
			v-on="$listeners"
		>
			Contenu de la page.
		</PageCard>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class PageCardUsage extends Vue {
		defaultProps = {
			cardPadding: 'px-6 py-4'
		};

		propsHiddenByDefault = [
			'cardPadding'
		];

		slotContent = `
	Contenu de la page.
`;

		options = {
			booleans: [
				'minHeight'
			],
			textFields: [
				'cardPadding'
			]
		};
	}
</script>
