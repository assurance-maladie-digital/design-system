<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<BackBtn
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import BackBtn from '@cnamts/vue-dot/src/elements/BackBtn';

	@Component({
		components: {
			BackBtn
		},
		inheritAttrs: false
	})
	export default class BackBtnUsage extends Vue {
		defaultProps = {
			label: 'Retour',
			hideBackIcon: false
		};

		options = {
			textFields: [
				'label'
			],
			booleans: [
				'hideBackIcon'
			]
		};
	}
</script>
