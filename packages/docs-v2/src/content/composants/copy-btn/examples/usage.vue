<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<p class="mb-0 mr-3">
			N° de dossier <b>{{ folderId }}</b>
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
		folderId = '1456570791';

		defaults = {
			label: 'test',
			textToCopy: this.folderId,
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
	}
</script>
