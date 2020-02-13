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
			/>
		</div>
	</VLayout>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { Section } from '../types';

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
	export default class LayoutSection extends Props {}
</script>
