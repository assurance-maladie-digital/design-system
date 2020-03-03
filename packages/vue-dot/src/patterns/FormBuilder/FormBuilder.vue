<template>
	<div class="vd-form-builder">
		<FormSectionGroup
			:section-group="form"
			@change="$emit('change', $event)"
			@refresh="$emit('refresh')"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import FormSectionGroup from '../FormSectionGroup/FormSectionGroup.vue';
	import { SectionGroup } from './../FormSectionGroup/types';

	const Props = Vue.extend({
		props: {
			/** The form group object */
			form: {
				type: Object as PropType<SectionGroup>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * FormBuilder is a component that displays a form
	 * from a JSON object
	 */
	@Component({
		model: {
			prop: 'form',
			event: 'change'
		},
		components: {
			FormSectionGroup
		}
	})
	export default class FormBuilder extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.vd-form-builder {
		width: 100%;
	}
</style>
