<template>
	<VLayout
		column
		class="my-7"
	>
		<h2
			v-if="section.title"
			class="body-1 font-weight-bold mb-10"
		>
			{{ section.title }}
		</h2>
		<div>
			<FormBuilder
				:form="section.questions"
				default-layout="question"
				@change="sectionChange"
				@refresh="$emit('refresh')"
			/>
		</div>
	</VLayout>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { Section } from '../types';

	import { Form } from '../../FormBuilder/types';

	const Props = Vue.extend({
		props: {
			/** The section object */
			section: {
				type: Object as PropType<Section>,
				required: true
			}
		}
	});

	@Component({
		model: {
			prop: 'section',
			event: 'change'
		}
	})
	export default class FormSection extends Props {
		/**
		 * Emit the new section object when the form change
		 */
		sectionChange(form: Form) {
			const newSection = {
				...this.section,
				questions: form
			};

			this.$emit('change', newSection);
		}
	}
</script>
