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
				class="mt-0"
			/>

			<VSwitch
				v-model="noShadow"
				label="Enlever l'ombre"
				hide-details
				class="mt-3"
			/>

			<VTextField
				v-model="cardClass"
				label="Classe de la carte"
				hide-details
				outlined
				class="mt-6"
			/>

			<VTextField
				v-model="cardPadding"
				label="Padding de la carte"
				hide-details
				outlined
				class="mt-6"
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
		noShadow = false;
		minHeight = false;
		cardClass = null;
		cardPadding = 'px-6 py-4';
	}
</script>
