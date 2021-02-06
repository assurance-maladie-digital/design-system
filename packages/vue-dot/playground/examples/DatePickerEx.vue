<template>
	<DocSection title="DatePicker">
		<h2 class="text-subtitle-1 font-weight-bold">
			Default with date validation
		</h2>

		<DatePicker
			v-model="date"
			text-field-class="vd-form-input"
			:rules="validRules"
		/>

		<p class="mt-4">
			{{ date }}
		</p>

		<h2 class="text-subtitle-1 mt-4 mb-2 font-weight-bold">
			Custom
		</h2>

		<DatePicker
			v-model="birthDate"
			:warning-rules="rules"
			label="Birthdate"
			date-format="DD-MM-YYYY"
			hint="DD-MM-YYYY Format"
			text-field-class="vd-form-input"
			birthdate
			outlined
		>
			<template #prepend-icon>
				<VIcon>
					{{ cakeIcon }}
				</VIcon>
			</template>
		</DatePicker>

		<h2 class="text-subtitle-1 mt-4 mb-2 font-weight-bold">
			Full Custom
		</h2>

		<DatePicker
			v-model="birthDate"
			:vuetify-options="{
				// The textField options can be binded
				// directly if needed
				textField: {
					placeholder: null,
					hint: null,
					outlined: true,
					clearable: true,
					rules
				},
				menu: {
					nudgeBottom: 50,
					nudgeRight: 0,
					minWidth: '310px'
				},
				datePicker: {
					width: '310px'
				}
			}"
			date-format="DD-MM-YYYY"
			date-format-return="DD/MM/YYYY"
			text-field-class="vd-form-input"
			append-icon
			birthdate
		>
			<template #append-icon>
				<VIcon>
					{{ cakeIcon }}
				</VIcon>
			</template>
		</DatePicker>

		<p class="mt-4">
			Value: {{ birthDate }}
		</p>

		<VBtn
			color="accent"
			@click="birthDate = '15/02/2010'"
		>
			Set the date
		</VBtn>

		<h2 class="text-subtitle-1 mt-4 mb-2 font-weight-bold">
			Show week-ends
		</h2>

		<DatePicker
			text-field-class="vd-form-input"
			show-weekends
			append-icon
			clearable
			outlined
		/>

		<h2 class="text-subtitle-1 mt-4 mb-2 font-weight-bold">
			Range
		</h2>

		<DatePicker
			v-model="startDate"
			date-format="YYYY-MM-DD"
			date-format-return="YYYY-MM-DD"
			hint="YYYY-MM-DD Format"
			text-field-class="vd-form-input mb-4"
			label="Start Date"
			append-icon
			outlined
		/>

		<DatePicker
			:start-date="startDate"
			text-field-class="vd-form-input"
			text-field-activator
			show-weekends
			append-icon
			outlined
		/>

		<h2 class="text-subtitle-1 mt-4 mb-2 font-weight-bold">
			Text field Scoped slots
		</h2>

		<DatePicker>
			<template #append-outer>
				<VBtn text>
					outer
				</VBtn>
			</template>
		</DatePicker>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { required } from '../../src/rules/required';
	import { isDateValid } from '../../src/rules/isDateValid';
	import { notAfterToday } from '../../src/rules/notAfterToday';

	import { mdiCakeVariant } from '@mdi/js';

	@Component
	export default class DatePickerEx extends Vue {
		date = '';
		birthDate = '';
		startDate = '2019-08-01';

		cakeIcon = mdiCakeVariant;

		validRules = [
			isDateValid
		];

		rules = [
			required,
			isDateValid,
			notAfterToday
		];
	}
</script>
