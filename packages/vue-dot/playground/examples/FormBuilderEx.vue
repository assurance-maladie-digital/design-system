<template>
	<DocSection title="FormBuilder">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Classic form
		</h2>

		<FormBuilder
			v-model="sectionGroup"
			@change="sectionGroupUpdated"
			@refresh="refresh"
		/>

		<VBtn
			class="mt-5"
			color="accent"
			@click="setFormErrors"
		>
			Set errors messages
		</VBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	import { Form } from '../../src/patterns/FormSection/types';
	import { questionForm } from '../../src/patterns/FormSection/tests/data/questionForm';

	import { FormValues } from '../../src/functions/getFormValues/types';

	import { SectionGroup } from '../../src/patterns/FormSectionGroup/types';
	import { sectionGroup, sectionGroupErrorMessages } from '../../src/patterns/FormSectionGroup/tests/data/sectionGroup';

	import { setSectionGroupErrors } from '../../src/functions/setSectionGroupErrors';

	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'notify',
			'rmNotif'
		])
	})
	export default class FormBuilderEx extends Vue {
		notify!: (obj: object) => void;

		questionForm: Form = questionForm;
		sectionGroup: SectionGroup = sectionGroup;
		questionValues: FormValues | null = null;

		sectionGroupUpdated(sectionGroup: SectionGroup) {
			// New section group objct
		}

		refresh() {
			// Notify!
			this.notify({
				type: 'success',
				message: 'champ dynamic changé, rafraichissement demandé'
			});
		}

		setFormErrors() {
			this.sectionGroup = setSectionGroupErrors(sectionGroupErrorMessages, this.sectionGroup);
		}
	}
</script>
