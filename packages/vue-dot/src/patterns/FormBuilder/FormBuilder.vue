<template>
	<div class="vd-form-builder">
		<FormSection
			v-for="(section, sectionName) in form"
			:key="'section-' + sectionName"
			:section-title="section.title"
			:fields="section.fields"
			@change="sectionUpdated($event, sectionName)"
			@refresh="$emit('refresh')"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { FormBuilderCore } from './mixins/formBuilderCore';

	import FormSection from './FormSection';
	import { Section } from './FormSection/types';

	const MixinsDeclaration = mixins(FormBuilderCore);

	/**
	 * FormBuilder is a component that displays a form
	 * from a JSON object
	 */
	@Component({
		components: {
			FormSection
		}
	})
	export default class FormBuilder extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.vd-form-builder {
		width: 100%;
	}
</style>
