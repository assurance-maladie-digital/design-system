<template>
	<FormFieldList
		v-model="fieldList.questions"
		:list-title="fieldList.title"
		:description="fieldList.description"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldList } from '@cnamts/form-builder/src/components/FormFieldList/types';

	@Component
	export default class FormFieldListProps extends Vue {
		fieldList: FieldList = {
			title: 'Titre',
			description: 'Description',
			questions: {
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
			}
		};
	}
</script>
