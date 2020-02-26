<template>
	<div
		class="vd-form-builder"
	>
		<!-- section multiple -->
		<FormSectionGroup
			:section-group="sectionGroup"
			@change="$emit('change', $event)"
			@change:values="$emit('change:values', $event)"
			@refresh="$emit('refresh')"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import FormSectionGroup from '../FormSectionGroup/FormSectionGroup.vue';
	import { SectionGroup } from './../FormSectionGroup/types';

	const Props = Vue.extend({
		props: {
			/** The form group object */
			sectionGroup: {
				type: Object as PropType<SectionGroup>,
				default: null
			}
		}
	});

	/** Handle main logic of the FormBuilder */
	@Component({
		model: {
			prop: 'sectionGroup',
			event: 'change'
		},
		components: {
			FormSectionGroup
		}
	})
	export default class FormBuilder extends Props {}
</script>

<style lang="scss" scoped>
	.vd-form-builder {
		width: 100%;
	}
</style>
