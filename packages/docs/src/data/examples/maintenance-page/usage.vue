<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<MaintenancePage
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
	export default class MaintenancePageUsage extends Vue {
		defaultProps = {
			pageTitle: 'Maintenance en cours',
			message: 'L’application n’est pas disponible pour le moment, veuillez nous excuser pour la gêne occasionnée.',
			image: false
		};

		options = {
			booleans: [
				'image'
			],
			textFields: [
				'pageTitle',
				'message'
			]
		};
	}
</script>
