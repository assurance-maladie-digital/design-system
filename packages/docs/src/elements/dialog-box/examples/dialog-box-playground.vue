<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<p>Changer le titre</p>

			<VTextField
				v-model="title"
				label="titre"
				outlined
			/>

			<p>Changer la largeur</p>

			<VTextField
				:value="width"
				label="largeur"
				outlined
				@change="width = $event"
			/>
		</VCol>

		<VCol>
			<VBtn
				color="primary"
				@click="dialog = true"
			>
				Afficher la boîte de dialogue
			</VBtn>

			<DialogBox
				v-model="dialog"
				:width="width"
				:title="title"
			>
				<p>Texte de contenu</p>
			</DialogBox>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DialogBoxPlayground extends Vue {
		dialog = false;
		width = '800px';
		title = 'Titre de la dialog';
	}
</script>
