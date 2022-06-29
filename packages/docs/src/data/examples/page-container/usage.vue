<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<PageContainer
			v-bind="$attrs"
			v-on="$listeners"
		>
			Contenu de la page.
		</PageContainer>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class PageContainerUsage extends Vue {
		defaultProps = {
			size: 'xl'
		};

		propsHiddenByDefault = [
			'size'
		];

		slotContent = `
	Contenu de la page.
`;

		options = {
			selects: {
				size: [
					'xl',
					'l',
					'm',
					's'
				]
			}
		};
	}
</script>
