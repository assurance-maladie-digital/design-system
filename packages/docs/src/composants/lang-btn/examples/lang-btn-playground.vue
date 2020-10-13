<template>
	<VRow>
		<VCol
			col="12"
			md="6"
		>
			<VSwitch
				v-model="props.hideDownArrow"
				label="Masquer la flèche vers le bas"
				hide-details
				class="mt-0"
			/>

			<VSelect
				v-model="availableLanguagesSelected"
				:items="availableLanguagesItems"
				label="Liste des langues de la liste"
				hide-details
				multiple
				outlined
				chips
				class="mt-6"
				@change="availableLanguagesUpdated"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<LangBtn
				v-model="lang"
				v-bind="props"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class LangBtnPlayground extends Vue {
		lang = 'fr';

		availableLanguagesItems: string[] = [
			'fr',
			'en',
			'de'
		];

		availableLanguagesSelected = this.availableLanguagesItems;

		props = {
			hideDownArrow: false,
			availableLanguages: this.availableLanguagesSelected
		};

		availableLanguagesUpdated(availableLanguagesSelected: string[]): void {
			const selected = availableLanguagesSelected.length ? availableLanguagesSelected : '*';

			this.$set(this.props, 'availableLanguages', selected);
		}
	}
</script>
