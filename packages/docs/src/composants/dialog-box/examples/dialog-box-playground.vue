<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VTextField
				v-model="props.title"
				label="Titre"
				hide-details
				outlined
			/>

			<VTextField
				v-model="props.width"
				label="Largeur"
				hide-details
				outlined
				class="mt-8"
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
				v-bind="props"
				@cancel="dialog = false"
				@confirm="dialog = false"
			>
				<p>Souhaitez-vous procéder à l'enregistrement ?</p>
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

		props = {
			width: '800px',
			title: 'Enregistrement'
		};
	}
</script>
