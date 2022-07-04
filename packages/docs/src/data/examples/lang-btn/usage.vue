<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<LangBtn
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class LangBtnUsage extends Vue {
		defaultProps = {
			availableLanguages: [
				'fr',
				'en',
				'de'
			]
		};

		propsHiddenByDefault = [
			'availableLanguages'
		];

		options = {
			booleans: [
				'hideDownArrow'
			],
			combobox: {
				availableLanguages: this.defaultProps.availableLanguages
			}
		};
	}
</script>
