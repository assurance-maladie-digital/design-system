<template>
	<DocSection title="LoginLayout">
		<LoginLayout
			:loading="loading"
			description="description du login"
			create-link
			password-link
			@click-login="loginClicked"
			@click-password="passwordClicked"
			@click-signup="signupClicked"
		/>

		<VSnackbar
			v-model="snackbar"
			color="info"
		>
			{{ snackbarText }}
		</VSnackbar>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { LoginForm } from '../../src/templates/LoginLayout/types';

	@Component
	export default class LoginLayoutEx extends Vue {
		loading = false;
		snackbar = false;
		snackbarText = '';

		loginClicked(loginForm: LoginForm): void {

			this.loading = true;
			this.snackbarText = `${this.getSnackbarText('click-login')}, paramètres => username: ${loginForm.username}, password: ${loginForm.password}`;
			this.snackbar = true;

			new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			}).finally(() => {
				this.loading = false;
			});
		}

		passwordClicked(): void {
			this.snackbarText = this.getSnackbarText('click-password');
			this.snackbar = true;
		}

		signupClicked(): void {
			this.snackbarText = this.getSnackbarText('click-signup');
			this.snackbar = true;
		}

		getSnackbarText(eventName: string): string {
			return `Événement "${eventName}" émis`;
		}
	}
</script>
