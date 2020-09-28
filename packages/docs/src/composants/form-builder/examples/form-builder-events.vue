<template>
	<div>
		<Form-builder
			:form="form"
			@change="formChanged"
			@refresh="formRefresh"
		/>

		<DialogBox
			v-model="dialog"
			title="Evènements"
		>
			<p>Evènement 'change' détecter</p>

			<p v-if="refresh">
				Evènement 'refresh' détecter
			</p>

			<p>Nouveau formulaire à jour</p>

			<pre
				:class="[
					$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
				]"
				v-html="form"
			/>

			<template #actions>
				<VBtn
					color="primary"
					@click="dialog = false"
				>
					Fermer
				</VBtn>
			</template>
		</Dialogbox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Form } from '@cnamts/form-builder/src/components/FormBuilder/types';

	@Component
	export default class FormBuilderEx extends Vue {

		dialog = false;
		refresh = false;

		form: Form = {
			section1: {
				title: 'Section 1',
				description: 'Description de la section 1',
				questions: {
					questionString: {
						type: 'text',
						title: 'Question simple',
						value: null
					},
					questionString2: {
						type: 'select',
						dynamic: true,
						title: 'Question dynamique',
						items: [
							{
								value: 'S',
								text: 'S'
							},
							{
								value: 'M',
								text: 'M'
							}
						],
						value: null
					}
				}
			}
		};

		formChanged(): void {
			this.dialog = true;
		}

		formRefresh(): void {
			this.refresh = true;
		}
	}
</script>
