<template>
	<div>
		<DatePicker
			v-model="birthdate"
			label="Date de naissance"
			birthdate
			outlined
		/>

		<p
			v-if="birthdate"
			class="mt-4 mb-0"
		>
			Date : {{ birthdate }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerBirthdate extends Vue {
		birthdate = '';
	}
</script>
