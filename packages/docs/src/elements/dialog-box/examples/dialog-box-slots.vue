<template>
	<div>
		<VBtn
			color="primary"
			@click="dialog = true"
		>
			Afficher la boîte de dialogue
		</VBtn>

		<DialogBox v-model="dialog">
			<template #title>
				<h4 class="display-3">
					Titre personnalisé
				</h4>
			</template>

			<VCardText>
				Contenu personnalisé
			</VCardText>

			<template #actions>
				<VBtn>
					Action personalisée
				</VBtn>
			</template>
		</Dialogbox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DialogBoxEx extends Vue {
		dialog = false;
	}
</script>
