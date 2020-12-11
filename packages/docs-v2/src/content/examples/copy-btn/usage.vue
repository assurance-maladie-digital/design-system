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

	@Component({
		inheritAttrs: false
	})
	export default class Usage extends Vue {
		get folderId(): string {
			return this.$attrs.textToCopy;
		}

		defaults = {
			label: 'Copier le numéro de dossier',
			textToCopy: '1456570791',
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
			},
			textFields: ['textToCopy']
		};
	}
</script>
