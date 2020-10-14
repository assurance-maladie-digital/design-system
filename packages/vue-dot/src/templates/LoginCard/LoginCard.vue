<template>
	<VContainer
		style="max-width:568px"
		class="pa-0"
	>
		<VRow no-gutters>
			<VCol
				align-self="center"
			>
				<VCard>
					<h2 class="headline text-center pt-6 font-weight-bold">
						{{ title }}
					</h2>
					<VCardText>
						<p
							v-if="description"
							class="subtitle-1 mb-6"
							v-html="description"
						/>
						<VForm
							ref="loginForm"
							:readonly="loading"
							lazy-validation
						>
							<VTextField
								v-model="loginForm.username"
								:rules="usernameRules"
								:label="usernameLabel"
								validate-on-blur
								outlined
							/>

							<VTextField
								v-model="loginForm.password"
								:append-icon="showEyeIcon ? eyeIcon : eyeOffIcon"
								:rules="passwordRules"
								:label="passwordLabel"
								:type="showEyeIcon ? 'text' : 'password'"
								validate-on-blur
								outlined
								@click:append="showEyeIcon = !showEyeIcon"
							/>
						</VForm>
						<VRow
							v-if="passwordLink"
							justify="end"
						>
							<RouterLink
								class="text-uppercase v-card--link accent--text text-body-2"
								@click="$emit('click-password')"
							>
								{{ locales.passwordForgotten }}
							</RouterLink>
						</VRow>
					</VCardText>
					<VCardActions class="pa-4 pb-8">
						<VBtn
							block
							x-large
							:loading="loading"
							color="primary"
							@click="clickLogin"
						>
							{{ locales.loginBtn }}
						</VBtn>
					</VCardActions>
				</VCard>
				<div
					v-if="createLink"
					class="d-flex justify-center my-4"
				>
					<span>
						{{ locales.newUserLabel }}
					</span>
					<RoutrLink
						class="text-uppercase v-card--link accent--text ml-2"
						@click="$emit('click-signup')"
					>
						{{ locales.createAccountLinkLabel }}
					</RoutrLink>
				</div>
			</VCol>
		</VRow>
	</VContainer>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import locales from './locales';

	import { ValidationRule } from '../../rules/types';
	import { required } from '../../rules/required';
	import { email } from '../../rules/email';
	import { minLength } from '../../rules/minLength';

	import { mdiEye, mdiEyeOff } from '@mdi/js';
	import { Refs } from '../../types';

	import { LoginForm } from './types';

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
				type: Array as PropType<ValidationRule[]>,
				default: () => [required, email]
			},
			passwordRules: {
				type: Array as PropType<ValidationRule[]>,
				default: () => [required, minLength(8)]
			},
			createLink: {
				type: Boolean,
				default: false
			},
			passwordLink: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
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

		loginForm: LoginForm = {
			username: null,
			password: null
		};

		// Show password Eye icon
		showEyeIcon = false;
		// Locales
        locales = locales;

		// Icons
		eyeIcon = mdiEye;
		eyeOffIcon = mdiEyeOff;

		clickLogin(): void {

            if(!this.$refs.loginForm.validate()) {
                return;
            }
			this.$emit('click-login', this.loginForm);

			this.loginForm.password = null;
		}
	}
</script>
