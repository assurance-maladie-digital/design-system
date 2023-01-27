<template>
	<NirField
		v-bind="$attrs"
		v-on="$listeners"
		class="vd-form-input"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class NirFieldUsage extends Vue {
		options = {
			booleans: [
				'required'
			],
			textFields: [
				'tooltip'
			]
		};

		tabs = [
			'outlined'
		];
	}
</script>
