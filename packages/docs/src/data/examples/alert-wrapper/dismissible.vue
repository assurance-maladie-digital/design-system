<template>
	<div>
		<AlertWrapper
			v-model="alert"
			dismissible
			outlined
			type="warning"
			class="mb-0"
		>
			Il semble qu’une date de naissance erronée a été saisie, renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<VBtn
			v-if="!alert"
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

	@Component
	export default class AlertWrapperDismissible extends Vue {
		alert = true;
	}
</script>
