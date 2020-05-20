<template>
	<VRow>
		<VCol
			col="12"
			md="6"
		>
			<VSwitch
				v-model="hideDownArrow"
				label="Masquer la flèche vers le bas"
			/>

			<VSelect
				v-model="availableLanguagesSelected"
				:items="availableLanguagesItems"
				multiple
				outlined
				chips
				label="Liste des langues possible"
				@change="availableLanguagesUpdated"
			/>

			<VSwitch
				v-model="currentLangTextBtn"
				label="Afficher le nom de la langue actuelle"
				@change="flags = !flags"
			/>

			<VSwitch
				v-model="flags"
				label="Afficher les drapeaux"
				@change="currentLangTextBtn = !currentLangTextBtn"
			/>

			<VTextField
				v-model="flagsUrl"
				label="Chemin absolu des drapeaux"
				outlined
			/>

			<VTextField
				v-model="flagsExt"
				label="Extension des drapeaux"
				outlined
			/>
		</VCol>
		<VCol>
			<LangBtn
				v-model="lang"
				:flags="flags"
				:hide-down-arrow="hideDownArrow"
				:current-lang-text-btn="currentLangTextBtn"
				:available-languages="availableLanguages"
				:flags-ext="flagsExt"
				:flags-url="flagsUrl"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { AllLanguagesChar } from '../../../../../vue-dot/src/patterns/LangBtn/types';

	@Component
	export default class LangBtnEx extends Vue {

		lang = 'fr';

		availableLanguagesItems: string[] = [
			'fr',
			'en',
			'de'
		];

		availableLanguagesSelected: string[] = [
			'fr',
			'en',
			'de'
		];

		availableLanguages: string[] | AllLanguagesChar = [
			'fr',
			'en',
			'de'
		];

		hideDownArrow = false;
		currentLangTextBtn = true;
		flags = false;
		flagsExt = 'svg';
		flagsUrl = 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/';

		availableLanguagesUpdated(availableLanguagesSelected: string[]) {
			this.availableLanguages = availableLanguagesSelected.length ? availableLanguagesSelected : '*';
		}
	}
</script>
