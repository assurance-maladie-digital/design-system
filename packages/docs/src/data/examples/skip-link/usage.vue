<template>
	<VSheet
		min-height="80px"
		class="d-flex flex-wrap align-center justify-center"
	>
		<p>Pour afficher le composant, cliquez à l’intérieur et appuyez sur <kbd>Tab</kbd>.</p>

		<SkipLink
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</VSheet>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class SkipLinkUsage extends Vue {
		defaultProps = {
			label: 'Aller au contenu principal'
		};

		propsHiddenByDefault = [
			'label'
		];

		options = {
			textFields: [
				'label'
			]
		};
	}
</script>

<style lang="scss" scoped>
	.vd-skip-link {
		z-index: 1;
		position: static;
	}
</style>
