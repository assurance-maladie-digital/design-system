<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="prop.noCalendar"
				label="Désactiver le calendrier"
			/>

			<VSwitch
				v-model="prop.noPrependIcon"
				label="Supprimer l'icone avant le champ"
			/>

			<VSwitch
				v-model="prop.appendIcon"
				label="Placer l'icone après le champ texte"
			/>

			<VSwitch
				v-model="prop.textFieldActivator"
				label="Ouvrir le menu du calendrier lorsque le champ de texte est cliqué"
			/>

			<VSwitch
				v-model="prop.birthdate"
				label="Mode date de naissance"
			/>

			<VSwitch
				v-model="prop.showWeekEnds"
				label="Affiche les weekends"
			/>

			<VTextField
				v-model="prop.textFieldClass"
				label="Classes du champ texte"
			/>

			<VTextField
				v-model="prop.dateFormat"
				label="format utilisateur"
			/>

			<VTextField
				v-model="prop.dateFormatReturn"
				label="format de traitement"
			/>

			<VTextField
				v-model="prop.mask"
				placeholder="##/##/####"
				label="mask"
			/>

			<DatePicker
				v-model="prop.startDate"
				label="date de départ"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<DatePicker
				v-model="date"
				v-bind="prop"
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

	import { isDateValid } from '@cnamts/vue-dot/src/rules/isDateValid';
	import { notAfterToday } from '@cnamts/vue-dot/src/rules/notAfterToday';
	import { required } from '@cnamts/vue-dot/src/rules/required';

	@Component
	export default class DatePickerPlayground extends Vue {
		date = '';

		error = false;

		pickerDate = null;

		prop = {
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
