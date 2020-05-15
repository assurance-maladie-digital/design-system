<template>
	<div>
		<h5>
			Premier exemple
		</h5>

		<DatePicker
			v-model="birthDate"
			label="Birthdate"
			date-format="DD-MM-YYYY"
			hint="DD-MM-YYYY Format"
			birthdate
			:warning-rules="rules"
		>
			<template #prepend-icon>
				<VIcon>
					{{ cakeIcon }}
				</VIcon>
			</template>
		</DatePicker>

		<h5 class="mt-3">
			2ème exemple personalisé
		</h5>

		<DatePicker
			v-model="birthDate"
			date-format="DD-MM-YYYY"
			birthdate
			append-icon
			:vuetify-options="{
				// The textField options can be binded
				// directly if needed
				textField: {
					placeholder: '',
					label: 'date de naissance',
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
			@click="birthDate = '2020/05/15'"
		>
			Set the date
		</VBtn>
	</div>
</template>

<script>
	import { mdiCakeVariant } from '@mdi/js';
	import { isDateValid } from '@cnamts/vue-dot/src/rules/isDateValid';
	import { required } from '@cnamts/vue-dot/src/rules/required';
	import { notAfterToday } from '@cnamts/vue-dot/src/rules/notAfterToday';
	export default {
		data() {
			return {
				birthDate: '',
				rules : [
					required,
					isDateValid,
					notAfterToday
				],
				cakeIcon : mdiCakeVariant
			};
		}
	};
</script>
