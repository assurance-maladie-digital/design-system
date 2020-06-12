<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="props.noCalendar"
				label="Désactiver le calendrier"
			/>

			<VSwitch
				v-model="props.noPrependIcon"
				label="Supprimer l'icone avant le champ"
			/>

			<VSwitch
				v-model="props.appendIcon"
				label="Placer l'icone après le champ texte"
			/>

			<VSwitch
				v-model="props.textFieldActivator"
				label="Ouvrir le menu du calendrier lorsque le champ de texte est cliqué"
			/>

			<VSwitch
				v-model="props.birthdate"
				label="Mode date de naissance"
			/>

			<VSwitch
				v-model="props.showWeekEnds"
				label="Affiche les weekends"
			/>

			<VTextField
				v-model="props.textFieldClass"
				label="Classes du champ texte"
			/>

			<VTextField
				v-model="props.dateFormat"
				label="format utilisateur"
			/>

			<VTextField
				v-model="props.dateFormatReturn"
				label="format de traitement"
			/>

			<VTextField
				v-model="props.mask"
				placeholder="##/##/####"
				label="mask"
			/>

			<DatePicker
				v-model="props.startDate"
				label="date de départ"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<DatePicker
				v-model="date"
				v-bind="props"
				:picker-date.sync="pickerDate"
			/>

			<template v-if="pickerDate">
				<h4>
					Date actuelle du menu
				</h4>

				<p class="mt-4">
					{{ pickerDate }}
				</p>
			</template>

			<template v-if="date">
				<h4>
					Format de sortie à traiter
				</h4>

				<p class="mt-4">
					{{ date }}
				</p>
			</template>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerPlayground extends Vue {
		date = '';

		error = false;

		pickerDate = null;

		props = {
			noCalendar: false,
			noPrependIcon: false,
			appendIcon: false,
			textFieldActivator: false,
			birthdate: false,
			showWeekEnds: false,
			textFieldClass: undefined,
			dateFormat: 'DD/MM/YYYY',
			dateFormatReturn: 'YYYY-MM-DD',
			startDate: '',
			mask: undefined
		};
	}
</script>
