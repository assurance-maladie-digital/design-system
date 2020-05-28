<template>
	<DatePicker
		v-model="birthDate"
		label="Date de naissance"
		birthdate
	>
		<template #prepend-icon>
			<VIcon>
				{{ cakeIcon }}
			</VIcon>
		</template>
	</DatePicker>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCakeVariant } from '@mdi/js';

	@Component
	export default class DatePickerBirthDate extends Vue {
		birthDate = '';
		cakeIcon = mdiCakeVariant;
	}
</script>
