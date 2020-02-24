<template>
	<VLayout
		class="vd-form-builder"
		column
	>
		<!-- mode form simple -->
		<FormSection
			v-if="fieldGroup"
			v-model="fieldGroup"
			default-layout="question"
		/>

		<!-- mode section multiple -->
		<FormSectionGroup
			v-else-if="sectionGroup"
			v-model="sectionGroup"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FormBuilderCore } from './mixins/formBuilderCore';

	@Component
	export default class FormBuilder extends FormBuilderCore {}
</script>

<style lang="scss" scoped>
	.vd-form-builder {
		width: 100%;
	}
</style>
