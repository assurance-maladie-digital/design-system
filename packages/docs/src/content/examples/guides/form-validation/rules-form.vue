<template>
	<VForm>
		<h2 class="text-h6 font-weight-bold mb-4">
			Informations du patient
		</h2>

		<VTextField
			v-model="lastName"
			:rules="nameRules"
			label="Nom"
			outlined
			validate-on-blur
			class="vd-form-input"
		/>

		<VTextField
			v-model="firstName"
			:rules="nameRules"
			label="Prénom"
			outlined
			validate-on-blur
			class="vd-form-input mt-4"
		/>

		<VTextField
			v-model="email"
			:rules="emailRules"
			label="Email"
			outlined
			validate-on-blur
			class="vd-form-input mt-4"
		/>

		<VBtn
			large
			block
			height="56px"
			color="primary"
			class="mt-8"
		>
			Valider
		</VBtn>
	</VForm>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { required } from '@cnamts/vue-dot/src/rules/required';
	import { email } from '@cnamts/vue-dot/src/rules/email';

	@Component
	export default class UserForm extends Vue {
		lastName: string | null = null;
		firstName: string | null = null;
		email: string | null = null;

		nameRules = [
			required
		];

		emailRules = [
			required,
			email
		];
	}
</script>
