<template>
	<DocSection title="FormBuilder">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Classic form
		</h2>

		<FormBuilder
			v-model="form"
			@refresh="refresh"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

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

		form: SectionGroup = sectionGroup;

		refresh() {
			// Notify!
			this.notify({
				type: 'success',
				message: 'champ dynamic changé, rafraichissement demandé'
			});
		}
	}
</script>
