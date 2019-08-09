<template>
	<DocSection title="DatePicker">
		<h2 class="subtitle-1 font-weight-bold">
			Default
		</h2>

		<DatePicker v-model="date" />

		<p class="mt-4">
			{{ date }}
		</p>

		<h2 class="subtitle-1 mt-4 mb-2 font-weight-bold">
			Custom
		</h2>

		<DatePicker
			v-model="birthDate"
			date-format="DD-MM-YYYY"
			birthdate
			:warning-rules="rules"
			:vuetify-options="{
				textField: {
					hint: 'DD-MM-YYYY Format'
				}
			}"
		>
			<template #prepend-icon>
				<VIcon>
					{{ cakeIcon }}
				</VIcon>
			</template>
		</DatePicker>

		<h2 class="subtitle-1 mt-4 mb-2 font-weight-bold">
			Full Custom
		</h2>

		<DatePicker
			v-model="birthDate"
			date-format="DD-MM-YYYY"
			birthdate
			append-icon
			:warning-rules="rules"
			:vuetify-options="{
				textField: {
					placeholder: ' ',
					hint: null,
					solo: true,
					clearable: true
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
			color="primary"
			@click="birthDate = '15/02/2010'"
		>
			Set the date
		</VBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import required from '../../src/rules/required';

	import { mdiCakeVariant } from '@mdi/js';

	@Component
	export default class DatePickerEx extends Vue {
		date = '';
		birthDate = '';

		cakeIcon = mdiCakeVariant;

		rules = [
			required
		];
	}
</script>
