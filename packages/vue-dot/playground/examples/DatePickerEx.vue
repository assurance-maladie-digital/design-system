<template>
	<DocSection title="DatePicker">
		<h2 class="subheading font-weight-bold">
			Without modification
		</h2>

		<DatePicker v-model="date" />

		<h2 class="subheading mt-3 font-weight-bold">
			Custom format
		</h2>

		<DatePicker
			v-model="birthDate"
			date-format="DD-MM-YYYY"
			birthdate
			:vuetify-options="{
				textField: {
					hint: 'DD-MM-YYYY Format'
				}
			}"
		/>

		{{ birthDate }}
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerEx extends Vue {
		date = '';
		birthDate = '';
	}
</script>
