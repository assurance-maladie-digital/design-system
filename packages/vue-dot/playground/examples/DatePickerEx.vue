<template>
	<DocSection title="DatePicker">
		<h2 class="subheading font-weight-bold">
			Default
		</h2>

		<DatePicker v-model="date" />

		<p class="mt-3">
			{{ date }}
		</p>

		<h2 class="subheading mt-3 font-weight-bold">
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
			<VIcon slot="icon">
				cake
			</VIcon>
		</DatePicker>

		<p class="mt-3">
			{{ birthDate }}
		</p>

		<VBtn
			color="primary"
			class="ma-0"
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

	@Component
	export default class DatePickerEx extends Vue {
		date = '';
		birthDate = '';

		rules = [
			required
		];
	}
</script>
