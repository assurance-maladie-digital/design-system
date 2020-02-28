<template>
	<DocSection title="FormBuilder">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Classic form
		</h2>

		<FormBuilder
			v-model="form"
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

	import { SectionGroup } from '../../src/patterns/FormSectionGroup/types';
	import { sectionGroup, sectionGroupErrorMessages } from '../../src/patterns/FormSectionGroup/tests/data/sectionGroup';

	import { setFormErrors } from '../../src/functions/setFormErrors';

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

		refresh() {
			// Notify!
			this.notify({
				type: 'success',
				message: 'champ dynamic changé, rafraichissement demandé'
			});
		}

		setFormErrors() {
			this.form = setFormErrors(sectionGroupErrorMessages, this.form, 'section_group') as SectionGroup;
		}
	}
</script>
