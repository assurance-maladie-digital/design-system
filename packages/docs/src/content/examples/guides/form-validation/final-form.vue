<template>
	<VForm ref="form">
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
			@click="submitDeclaration"
		>
			Valider
		</VBtn>
	</VForm>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Refs, VForm } from '@cnamts/vue-dot/src/types';

	import { required } from '@cnamts/vue-dot/src/rules/required';
	import { email } from '@cnamts/vue-dot/src/rules/email';

	@Component
	export default class UserForm extends Vue {
		$refs!: Refs<{
			form: VForm;
		}>;

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

		async submitDeclaration(): Promise<void> {
			await this.$nextTick();

			if (this.$refs.form.validate()) {
				// Formulaire valide
			}
		}
	}
</script>
