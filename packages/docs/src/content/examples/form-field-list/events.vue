<template>
	<div>
		<FormFieldList
			v-model="fields"
			@change="updated"
			@refresh="refreshed"
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

	import { Fields } from '@cnamts/form-builder/src/components/FormFieldList/types';

	@Component
	export default class FormFieldListEvents extends Vue {
		refresh = false;

		snackbar = false;
		snackbarText: string | null = null;

		fields: Fields = {
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
		};

		updated(): void {
			this.snackbar = true;
			this.snackbarText = 'Événement "change" émis';
		}

		refreshed(): void {
			this.$nextTick(() => {
				this.snackbar = true;
				this.snackbarText = 'Événements "change" et "refresh" émis';
			});
		}
	}
</script>
