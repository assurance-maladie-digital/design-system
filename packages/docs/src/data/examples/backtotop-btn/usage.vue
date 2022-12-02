<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<VCard
		elevation="2"
		height="2000"
	>
		<BackToTopBtn
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</VCard>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import BackToTopBtn from '@cnamts/vue-dot/src/elements/BackToTopBtn';

	@Component({
		inheritAttrs: false,
		components: {
			BackToTopBtn
		}
	})
	export default class BackToTopBtnUsage extends Vue {
		defaultProps = {
			label: 'Retour en haut',
			top: 20
		};

		options = {
			textFields: [
				'label'
			],
			numberFields: [
				'top'
			]
		};
	}
</script>
