<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VTextField
				v-model="sectionTitle"
				label="Titre de la section"
				hide-details
				clearable
				outlined
			/>

			<VTextField
				v-model="sectionDescription"
				label="Description de la section"
				hide-details
				clearable
				outlined
				class="mt-6"
			/>

			<h3 class="text-h6 font-weight-bold mt-4 mb-1">
				Structure du questionnaire
			</h3>

			<pre
				:class="codeBlockColor"
				class="px-2 py-1"
				v-html="displayForm"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<FormBuilder :form="form" />
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Form } from '@cnamts/form-builder/src/components/FormBuilder/types';

	@Component
	export default class FormBuilderPlayground extends Vue {
		sectionTitle = 'Vos informations';
		sectionDescription = 'Informations personnelles';

		get form(): Form {
			return {
				section1: {
					title: this.sectionTitle,
					description: this.sectionDescription,
					questions: {
						questionString: {
							type: 'text',
							value: null,
							fieldOptions: {
								label: 'Numéro de Sécurité Sociale',
								outlined: true
							}
						}
					}
				}
			};
		}

		get displayForm(): string {
			return JSON.stringify(this.form, null, '\t');
		}

		get codeBlockColor(): string {
			return this.$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4';
		}
	}
</script>
