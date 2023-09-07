<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<RangeField
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
	export default class RangeFieldUsage extends Vue {
		defaultProps = {
			max: 100
		};

		options = {
			sliders: {
				max: {
					min: 10,
					max: 100,
					step: 10
				}
			}
		};

		tabs = [
			'outlined'
		];
	}
</script>
