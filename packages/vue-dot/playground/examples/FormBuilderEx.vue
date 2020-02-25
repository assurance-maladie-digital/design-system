<template>
	<DocSection title="FormBuilder">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Classic form
		</h2>

		<FormBuilder
			v-model="sectionGroup"
			@change="sectionGroupUpdated"
			@change:values="valuesUpdated"
			@refresh="refresh"
		/>

		<template v-if="formValues">
			<h6 class="subtitle-1 font-weight-bold">
				Valeurs
			</h6>
			<pre

				class="mt-4 grey lighten-3"
				v-html="formValues"
			/>
		</template>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	import { FieldGroup } from '../../src/patterns/FormSection/types';
	import { questionForm } from '../../src/patterns/FormSection/tests/data/questionForm';

	import { FormValues } from '../../src/functions/getFormValues/types';

	import { SectionGroup } from '../../src/patterns/FormSectionGroup/types';
	import { sectionGroup } from '../../src/patterns/FormSectionGroup/tests/data/sectionGroup';

	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'notify',
			'rmNotif'
		])
	})
	export default class FormBuilderEx extends Vue {
		notify!: (obj: object) => void;

		questionForm: FieldGroup = questionForm;
		sectionGroup: SectionGroup = sectionGroup;
		formValues: FormValues | null = null;

		sectionGroupUpdated(sectionGroup: SectionGroup) {
			// New section group objct
		}

		valuesUpdated(values: FormValues) {
			this.formValues = values;
		}

		refresh() {
			// Notify!
			this.notify({
				type: 'success',
				message: 'champ dynamic changé, rafraichissement demandé'
			});
		}
	}
</script>
