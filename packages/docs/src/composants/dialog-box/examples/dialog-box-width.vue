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
			:width="dialogWidth"
			title="Enregistrement"
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

	import tokens from '@cnamts/vue-dot/src/tokens';

	@Component
	export default class DialogBoxWidth extends Vue {
		dialog = false;

		dialogWidth = tokens['dialog-width']['dialog-small'];
	}
</script>
