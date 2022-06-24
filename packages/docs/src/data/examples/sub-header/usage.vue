<template>
	<div class="d-flex flex-wrap align-center justify-center flex-grow-1">
		<SubHeader
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
	export default class SubHeaderUsage extends Vue {
		defaultProps = {
			backBtnText: 'Retour',
			titleText: 'Paul Dupont',
			subTitleText: '1 69 08 75 125 456 75'
		};

		propsHiddenByDefault = [
			'backBtnText'
		];

		options = {
			booleans: [
				'hideBackBtn',
				'loading'
			],
			textFields: [
				'backBtnText',
				'titleText',
				'subTitleText'
			]
		};
	}
</script>
