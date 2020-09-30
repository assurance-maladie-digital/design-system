<template>
	<VContainer>
		<VRow>
			<VCol
				v-for="(field, index) in fields"
				:key="index"
				cols="12"
				sm="6"
			>
				<FormField
					:field="field"
				/>
			</VCol>
		</VRow>
	</VContainer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldDatesEx extends Vue {
		fields: Field[] = [
			{
				type: 'date',
				value: null,
				fieldOptions: {
					outlined: true
				}
			},
			{
				type: 'period',
				value: null,
				fieldOptions: {
					from: {
						label: 'Début'
					},
					to: {
						label: 'Fin'
					}
				}
			}
		];
	}
</script>
