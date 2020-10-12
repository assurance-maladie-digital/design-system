<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VTextField
				v-model.number="props.sectionTitle"
				label="section: titre"
				hide-details
				clearable
				outlined
			/>

			<VTextField
				v-model.number="props.sectionDescription"
				label="section: description"
				hide-details
				clearable
				outlined
				class="mt-6"
			/>

			<VCard class="mt-4">
				<VCardText>
					<p>
						Affichage de la structure
					</p>

					<pre
						:class="[
							$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
						]"
						v-html="finalForm"
					/>
				</VCardText>
			</VCard>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<FormBuilder :form="finalForm" />
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Form } from '@cnamts/form-builder/src/components/FormBuilder/types';

	@Component<FormBuilderPlayground>({
		watch: {
			form: {
				handler(newValue: Form): void {
					this.finalForm = newValue;
				},
				immediate: true
			}
		}
	})
	export default class FormBuilderPlayground extends Vue {
		finalForm: Form = {};

		props = {
			sectionTitle: 'Section 1',
			sectionDescription: 'Informations personnelles'
		};

		get form(): Form {
			return {
				section1: {
					title: this.props.sectionTitle,
					description: this.props.sectionDescription,
					questions: {
						questionString: {
							type: 'text',
							title: 'Votre nom ?',
							value: null,
							fieldOptions: {
								outlined: true
							}
						}
					}
				},
				section2: {
					title: 'Section 2',
					description: 'Autres informations',
					questions: {
						questionString: {
							type: 'date',
							title: 'Date de début de mission ?',
							value: null,
							fieldOptions: {
								outlined: true
							}
						}
					}
				}
			};
		}
	}
</script>
