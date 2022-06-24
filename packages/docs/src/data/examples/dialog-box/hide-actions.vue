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
			title="Enregistrement"
			hide-actions
		>
			<p class="mb-1">
				Souhaitez-vous procéder à l’enregistrement ?
			</p>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DialogBoxHideActions extends Vue {
		dialog = false;
	}
</script>
