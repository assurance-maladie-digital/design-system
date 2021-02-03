<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<HeaderLoading
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
	export default class HeaderLoadingUsage extends Vue {
		defaultProps = {
			width: '100px',
			height: '1rem'
		};

		propsHiddenByDefault = [
			'width',
			'height'
		];

		options = {
			textFields: [
				'width',
				'height'
			]
		};
	}
</script>
