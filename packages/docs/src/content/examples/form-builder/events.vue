<template>
	<div>
		<FormBuilder
			v-model="form"
			@change="formUpdated"
			@refresh="formRefreshed"
		/>

		<VSnackbar
			v-if="snackbarText"
			v-model="snackbar"
			color="info"
		>
			{{ snackbarText }}

			<template #action="{ attrs }">
				<VBtn
					v-bind="attrs"
					text
					@click="snackbar = false"
				>
					Fermer
				</VBtn>
			</template>
		</VSnackbar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Form } from '@cnamts/form-builder/src/components/FormBuilder/types';

	@Component
	export default class FormBuilderEvents extends Vue {
		snackbar = false;
		snackbarText: string | null = null;

		form: Form = {
			section1: {
				title: 'Vos informations',
				questions: {
					questionString: {
						type: 'text',
						value: null,
						fieldOptions: {
							label: 'Numéro de Sécurité Sociale',
							outlined: true
						}
					},
					questionString2: {
						type: 'select',
						dynamic: true,
						items: [
							{
								text: 'Email',
								value: 'email'
							},
							{
								text: 'Courrier',
								value: 'mail'
							},
							{
								text: 'SMS',
								value: 'sms'
							}
						],
						value: null,
						fieldOptions: {
							label: 'Moyen de contact',
							outlined: true
						}
					}
				}
			}
		};

		formUpdated(): void {
			this.snackbar = true;
			this.snackbarText = 'Événement "change" émis';
		}

		formRefreshed(): void {
			this.$nextTick(() => {
				this.snackbar = true;
				this.snackbarText = 'Événements "change" et "refresh" émis';
			});
		}
	}
</script>
