<template>
	<FormFieldList
		v-model="fieldList.questions"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldList } from '@cnamts/form-builder/src/components/FormFieldList/types';

	@Component
	export default class FormFieldListEx extends Vue {
		fieldList: FieldList = {
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
