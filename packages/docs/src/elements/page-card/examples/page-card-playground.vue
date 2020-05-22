<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="minHeight"
				label="Hauteur minimum de 500px"
				hide-details
			/>

			<VSwitch
				v-model="noShadow"
				label="Enlever l'ombre"
				hide-details
				class="mt-2"
			/>

			<VTextField
				v-model="cardClass"
				label="Classe de la card"
				hide-details
				outlined
				class="mt-5"
			/>

			<VTextField
				v-model="cardPadding"
				label="Padding de la card"
				hide-details
				outlined
				class="mt-5"
			/>
		</VCol>
		<VCol
			cols="12"
			md="6"
		>
			<PageCard
				:no-shadow="noShadow"
				:min-height="minHeight"
				:card-class="cardClass"
				:card-padding="cardPadding"
			>
				Contenu personnalisé
			</PageCard>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class PageCardPlayground extends Vue {
		noShadow = false;

		minHeight = false;

		cardClass = null;

		cardPadding = 'px-6 py-4';
	}
</script>
