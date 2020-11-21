<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<CopyBtn
			v-bind="$attrs"
			v-on="$listeners"
			width="56"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class Usage extends Vue {
		defaults = {
			label: 'test',
			textToCopy: 'a',
			hideTooltip: false,
			tooltipDuration: 2500
		};

		options = {
			booleans: ['hide-tooltip'],
			sliders: {
				tooltipDuration: {
					label: 'tooltip-duration',
					min: 500,
					max: 5000,
					step: 500
				}
			}
		};

		tabs = [];
	}
</script>
