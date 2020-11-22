<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<p class="mb-0 mr-2">
			Dossier n°<b>{{ folderId }}</b>
		</p>

		<CopyBtn
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class Usage extends Vue {
		get folderId() {
			return this.$attrs.textToCopy;
		}

		defaults = {
			label: 'test',
			textToCopy: '1456570791',
			hideTooltip: false,
			tooltipDuration: 2500,
			large: false,
			medium: false,
			small: false,
			'x-large': false,
			'x-small': false,
		};

		options = {
			booleans: ['hide-tooltip'],
			radioGroups: {
				size: [
					'x-small',
					'small',
					'medium',
					'large',
					'x-large',
				]
			},
			sliders: {
				tooltipDuration: {
					label: 'tooltip-duration',
					min: 500,
					max: 5000,
					step: 500
				}
			},
			textFields: ['textToCopy']
		};
	}
</script>
