<template>
	<div>
		<VBtn
			color="primary"
			@click="dialog = true"
		>
			Afficher le composant
		</VBtn>

		<DialogBox
			v-model="dialog"
			:width="dialogWidth"
			title="Enregistrement"
			@cancel="dialog = false"
			@confirm="dialog = false"
		>
			<p>Souhaitez-vous procéder à l’enregistrement ?</p>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	@Component
	export default class DialogBoxWidth extends Vue {
		dialog = false;

		dialogWidth = tokens.dialogWidth.dialogSmall;
	}
</script>
