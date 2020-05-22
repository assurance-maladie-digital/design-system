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
			title="DialogBox"
			@cancel="cancelAction"
			@confirm="confirmAction"
			@change="dialogChanged"
		>
			<p>Cliquer sur Annuler ou confirmer pour récupérer les évènements</p>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DialogBoxEx extends Vue {
		dialog = false;

		cancelAction() {
			alert('Vous avez cliquer sur annuler');
			this.dialog = false;
		}

		confirmAction() {
			alert('Vous avez cliquer sur confirmer');
			this.dialog = false;
		}

		dialogChanged(dialog: boolean) {
			alert(`La dialog change de valeur à ${dialog}`);
		}

	}
</script>
