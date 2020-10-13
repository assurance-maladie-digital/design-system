<template>
	<div>
		<VCard>
			<h2 class="headline text-center mb-6">
				{{ title }}
			</h2>

			<span
				v-if="description"
				v-html="description"
			/>

			<VForm ref="loginForm">
				<VTextField
					v-model="username"
					:rules="usernameRules"
					:label="userNameLabel"
					outlined
				/>

				<VTextField
					v-model="password"
					:append-icon="showEyeIcon ? eyeIcon : eyeOffIcon"
					:rules="passwordRules"
					:label="passwordLabel"
					:type="showEyeIcon ? 'text' : 'password'"
					counter
					outlined
					@click:append="showEyeIcon = !showEyeIcon"
				/>
			</VForm>

			<VRow
				v-if="passwordRouteName"
				justify="end"
			>
				<RouterLink
					:to="{
						name: passwordRouteName
					}"
					class="text-underline accent--text"
				>
					{{ locales.passwordForgotten }}
				</RouterLink>
			</VRow>
			<VBtn
				:loading="loading"
				@click="clickLogin"
			>
				{{ locales.loginBtn }}
			</VBtn>
		</VCard>
		<VRow v-if="createAccountRouteName">
			{{ locales.newUserLabel }}
			<RouterLink
				:to="{
					name: createAccountRouteName
				}"
				class="text-underline accent--text"
			>
				{{ locales.createAccountLinkLabel }}
			</RouterLink>
		</VRow>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import locales from './locales';

	import { ValidationRule } from '../../rules/types';
	import { requiredFn } from '../../rules/required';
	import { emailFn } from '../../rules/email';
	import { minLengthFn } from '../../rules/minLength';

	import { mdiEye, mdiEyeOff } from '@mdi/js';
	import { Refs } from '../../types';
	import { ErrorMessages } from '../../../../form-builder/src/components/FormField/types';

	const Props = Vue.extend({
		props: {
			title: {
				type: String,
				default: locales.title
			},
			description: {
				type: String,
				default: null
			},
			usernameLabel: {
				type: String,
				default: locales.usernameLabel
			},
			passwordLabel: {
				type: String,
				default: locales.passwordLabel
			},
			usernameRules: {
				type: Object as PropType<ValidationRule[]>,
				default: () => [requiredFn, emailFn]
			},
			passwordRules: {
				type: Object as PropType<ValidationRule[]>,
				default: () => [requiredFn, minLengthFn(6)]
			},
			login: {
				type: Function as PropType<(username: string, password: string) => void>,
				required: true
			},
			passwordRouteName: {
				type: String,
				default: null
			},
			createAccountRouteName: {
				type: String,
				default: null
			},
			errorMessages: {
				type: Object as PropType<ErrorMessages>,
				default: () => null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/** Login page */
	@Component
	export default class LoginCard extends MixinsDeclaration {
        // Extend $refs
        $refs!: Refs<{
            loginForm: HTMLFormElement;
        }>;

        loading = false;

		username: string | null= null;
        password: string | null = null;

		// Icons
		eyeIcon = mdiEye;
		eyeOffIcon = mdiEyeOff;

		showEyeIcon = false;

        locales = locales;

		async clickLogin(): Promise<void> {

            if(!this.username || !this.password || !this.$refs.loginForm.validate()) {
                return;
            }

            this.loading = true;

            await this.login(this.username, this.password);

            this.username = null;
            this.password = null;
            this.loading = false;
		}
	}
</script>
