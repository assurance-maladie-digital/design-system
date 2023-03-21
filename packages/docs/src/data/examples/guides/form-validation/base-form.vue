<template>
	<VForm>
		<h2 class="text-h6 font-weight-bold mb-4">
			Informations du patient
		</h2>

		<VTextField
			v-model="lastName"
			label="Nom"
			outlined
			class="vd-form-input mb-4"
		/>

		<VTextField
			v-model="firstName"
			label="Prénom"
			outlined
			class="vd-form-input mb-4"
		/>

		<VTextField
			v-model="email"
			label="Email"
			outlined
			class="vd-form-input mb-4"
		/>

		<VBtn color="primary">
			Valider
		</VBtn>
	</VForm>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UserForm extends Vue {
		lastName: string | null = null;
		firstName: string | null = null;
		email: string | null = null;
	}
</script>
