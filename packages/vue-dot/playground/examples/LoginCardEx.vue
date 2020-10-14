<template>
	<DocSection title="LoginCard">
		<LoginCard
			:loading="loading"
			description="description du login"
			create-link
			password-link
			@click-login="loginClicked"
			@click-password="passwordClicked"
			@click-signup="signupClicked"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	import { NotificationObj } from '../../src/modules/notification';

	import {
		mdiCheck
	} from '@mdi/js';
	import { LoginForm } from '../../src/templates/LoginCard/types';

	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'notify',
			'rmNotif'
		])
	})
	export default class LoginCardEx extends Vue {
		// Vuex bindings type declaration
		notify!: (obj: NotificationObj) => void;
		rmNotif!: () => void;

		loading = false;

		loginClicked(loginForm: LoginForm): void {

			this.loading = true;
			this.notify({
				type: 'success',
				message: `Email: ${loginForm.username}, mot de passe: ${loginForm.password}`,
				icon: mdiCheck
			});
			new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			}).finally(() => {
				this.loading = false;
			});
		}

		passwordClicked(): void {
			this.notify({
				type: 'success',
				message: 'Lien vers la page de mot de passe oublié cliqué',
				icon: mdiCheck
			});
		}

		signupClicked(): void {
			this.notify({
				type: 'success',
				message: 'Lien vers le création de compte cliqué',
				icon: mdiCheck
			});
		}
	}
</script>
