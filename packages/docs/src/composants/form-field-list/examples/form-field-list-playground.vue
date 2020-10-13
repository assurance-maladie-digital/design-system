<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VTextField
				v-model="props.listTitle"
				label="Titre du formulaire"
				hide-details
				clearable
				outlined
			/>

			<VTextField
				v-model="props.description"
				label="Description du formulaire"
				class="mt-8"
				hide-details
				clearable
				outlined
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<FormFieldList
				v-model="finalFields"
				:list-title="props.listTitle"
				:description="props.description"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Fields } from '@cnamts/form-builder/src/components/FormFieldList/types';

	@Component<FormFieldListPlaygroundEx>({
		watch: {
			fields: {
				handler(newValue) {
					this.finalFields = newValue;
				},
				immediate: true
			}
		}
	})
	export default class FormFieldListPlaygroundEx extends Vue {
		props = {
			listTitle: undefined,
			description: undefined
		};

		finalFields: Fields | null = null;

		get fields(): Fields {
			return {
				questionStringId: {
					type: 'text',
					value: null,
					fieldOptions: {
						label: 'Label du champ',
						outlined: true
					}
				},
				questionDateId: {
					type: 'date',
					value: null,
					fieldOptions: {
						label: 'Date de naissance',
						outlined: true
					}
				}
			};
		}
	}
</script>
