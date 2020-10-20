<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="props.outlined"
				label="Mode outlined"
				hide-details
				class="mt-0"
			/>

			<VSwitch
				v-model="props.noCalendar"
				label="Désactiver le calendrier"
				hide-details
				class="mt-4"
			/>

			<VSwitch
				v-model="props.noPrependIcon"
				label="Supprimer l'icone avant le champ"
				hide-details
				class="mt-4"
			/>

			<VSwitch
				v-model="props.appendIcon"
				label="Placer l'icone dans le champ"
				hide-details
				class="mt-4"
			/>

			<VSwitch
				v-model="props.textFieldActivator"
				label="Ouvrir le menu du calendrier lorsque le champ de texte est cliqué"
				hide-details
				class="mt-4"
			/>

			<VSwitch
				v-model="props.birthdate"
				label="Mode date de naissance"
				hide-details
				class="mt-4"
			/>

			<VSwitch
				v-model="props.showWeekends"
				label="Afficher les weekends"
				hide-details
				class="mt-4"
			/>

			<VTextField
				v-model="props.dateFormat"
				label="Format de date du champ texte"
				hide-details
				outlined
				class="mt-8"
			/>

			<VTextField
				v-model="props.dateFormatReturn"
				label="Format de date du v-model"
				hide-details
				outlined
				class="mt-8"
			/>

			<VTextField
				v-model="props.mask"
				placeholder="##/##/####"
				label="Masque"
				hide-details
				outlined
				class="mt-8"
			/>

			<VTextField
				v-model="props.textFieldClass"
				label="Classes du champ texte"
				hide-details
				outlined
				class="mt-8"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<DatePicker
				v-model="date"
				v-bind="props"
			/>

			<p
				v-if="date"
				class="mt-4 mb-0"
			>
				Date : {{ date }}
			</p>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerPlayground extends Vue {
		date = '';

		props = {
			outlined: false,
			noCalendar: false,
			noPrependIcon: false,
			appendIcon: false,
			textFieldActivator: false,
			birthdate: false,
			showWeekends: false,
			textFieldClass: undefined,
			dateFormat: 'DD/MM/YYYY',
			dateFormatReturn: 'YYYY-MM-DD',
			mask: undefined
		};
	}
</script>
