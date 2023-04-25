<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<NirField
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
	export default class NirFieldUsage extends Vue {
		defaultProps = {
			nirLength: 15
		};

		propsHiddenByDefault = [
			'nirLength'
		];

		options = {
			booleans: [
				'required',
				'suffix'
			],
			textFields: [
				'tooltip'
			],
			selects: {
				nirLength: [
					13,
					15
				]
			}
		};

		tabs = [
			'outlined'
		];
	}
</script>
