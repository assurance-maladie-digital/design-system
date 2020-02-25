<template>
	<div
		class="vd-form-builder"
	>
		<!-- section multiple -->
		<FormSectionGroup
			:section-group="sectionGroup"
			@change="$emit('change', $event)"
			@values="$emit('change:values', $event)"
			@refresh="$emit('refresh')"
		/>
	</div>
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
