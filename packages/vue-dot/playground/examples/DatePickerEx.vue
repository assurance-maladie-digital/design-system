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

	@Component
	export default class DatePickerEx extends Vue {
		date = '';
		birthDate = '';
	}
</script>
