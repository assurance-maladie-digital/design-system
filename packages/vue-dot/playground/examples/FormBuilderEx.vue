<template>
	<DocSection title="FormBuilder">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Classic form
		</h2>

		<FormBuilder
			v-model="form"
			@refresh="refresh"
			@change="getFormValues"
		/>

		<VBtn
			class="mt-5"
			color="accent"
			@click="getFormValues(form)"
		>
			Get question values
		</VBtn>

		<pre
			v-if="formValues"
			class="mt-4 grey lighten-3"
			v-html="formValues"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	import { SectionGroup } from '../../src/patterns/FormSectionGroup/types';
	import { sectionGroup } from '../../src/patterns/FormSectionGroup/tests/data/sectionGroup';

	import { getFormValues } from '../../src/functions/getFormValues';
	import { FormValues } from '../../src/functions/getFormValues/types';

	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'notify',
			'rmNotif'
		])
	})
	export default class FormBuilderEx extends Vue {
		notify!: (obj: object) => void;

		form: SectionGroup = sectionGroup;
		formValues: FormValues | null = null;

		refresh() {
			// Notify!
			this.notify({
				type: 'success',
				message: 'champ dynamic changé, rafraichissement demandé'
			});
		}

		getFormValues(form: SectionGroup) {
			this.formValues = getFormValues(form, 'section_group');
		}
	}
</script>
