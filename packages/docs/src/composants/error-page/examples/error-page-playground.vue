<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="props.noBtn"
				label="Désactiver le bouton d'action"
				hide-details
				class="mt-0"
			/>

			<VTextField
				v-model="props.pageTitle"
				label="Titre de la page"
				hide-details
				outlined
				class="mt-8"
			/>

			<VTextField
				v-model="props.message"
				label="Message d'erreur"
				hide-details
				outlined
				class="mt-8"
			/>

			<VTextField
				v-model="props.code"
				label="Code d'erreur"
				hide-details
				outlined
				class="mt-8"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<ErrorPage v-bind="props" />
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class PageCardPlayground extends Vue {
		props = {
			pageTitle: 'Page non trouvée',
			message: 'Il semblerait qu\'il y ait eu une erreur !',
			code: '404',
			noBtn: false
		};
	}
</script>
