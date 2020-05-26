<template>
	<div>
		<VBtn
			color="primary"
			@click="dialog = true"
		>
			Afficher la boîte de dialogue
		</VBtn>

		<DialogBox
			v-model="dialog"
			title="Enregistrement"
			cancel-btn-text="Retour"
			confirm-btn-text="Enregistrer"
			@cancel="dialog = false"
			@confirm="dialog = false"
		>
			<p>Souhaitez-vous procéder à l'enregistrement ?</p>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DialogBoxBtnText extends Vue {
		dialog = false;
	}
</script>
