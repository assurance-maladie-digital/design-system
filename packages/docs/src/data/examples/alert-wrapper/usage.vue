<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<AlertWrapper
			v-bind="$attrs"
			v-model="alert"
			class="mb-0"
			v-on="$listeners"
		>
			Il semble qu’une date de naissance erronée a été saisie, renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<VBtn
			v-if="$attrs.dismissible && !alert"
			color="primary"
			@click="alert = true"
		>
			Réinitialiser
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class AlertWrapperUsage extends Vue {
		tabs = [
			'outlined'
		];

		defaultProps = {
			type: 'info'
		};

		options = {
			booleans: [
				'dismissible'
			],
			selects: {
				type: [
					'info',
					'success',
					'warning',
					'error'
				]
			}
		};

		alert = true;
	}
</script>
