<template>
	<div>
		<FormFieldList
			v-model="fields"
			@change="listUpdated"
			@refresh="listRefreshed"
		/>

		<VSnackbar
			v-model="snackbar"
			color="info"
		>
			{{ snackbarText }}

			<template v-slot:action="{ attrs }">
				<VBtn
					text
					v-bind="attrs"
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
		snackbarText = '';

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

		listUpdated(): void {
			this.snackbar = true;
			this.snackbarText = 'Événement "change" émis';
		}

		listRefreshed(): void {
			this.$nextTick(() => {
				this.snackbar = true;
				this.snackbarText = 'Événement "change" et "refresh" émis';
			});
		}
	}
</script>