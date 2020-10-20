<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="props.minHeight"
				label="Hauteur minimum de 500px"
				hide-details
				class="mt-0"
			/>

			<VSwitch
				v-model="props.noShadow"
				label="Enlever l'ombre"
				hide-details
				class="mt-4"
			/>

			<VTextField
				v-model="props.cardClass"
				label="Classe de la carte"
				hide-details
				outlined
				class="mt-8"
			/>

			<VTextField
				v-model="props.cardPadding"
				label="Padding de la carte"
				hide-details
				outlined
				class="mt-8"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<PageCard v-bind="props">
				Contenu de la page.
			</PageCard>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class PageCardPlayground extends Vue {
		props = {
			noShadow: false,
			minHeight: false,
			cardClass: null,
			cardPadding: 'px-6 py-4'
		};
	}
</script>
