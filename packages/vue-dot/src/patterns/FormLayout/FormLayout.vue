<template>
	<!--
		Will be converted to the layout component

		"Rendered" example:
		<LayoutMM>
			<FormField :field="field"> (slot 1)
			<FormField :field="field"> (slot 2)
	-->
	<component
		:is="getLayout(layout.type).component"
		:fields="layout.fields"
		class="vd-form-layout"
	>
		<!--
			For each field in the layout, create a slot
			to fill up the layout
		-->
		<template
			v-for="(field, index) in layout.fields"
			#[getSlotName(index)]
		>
			<!-- Will be converted to FormField -->
			<slot :field="field" />
		</template>
	</component>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import LayoutMap from './mixins/layoutMap';

	import { ComputedLayoutItem } from '../FormBuilder/types';

	// Layouts
	import LayoutM from './layouts/LayoutM.vue';
	import LayoutMM from './layouts/LayoutMM.vue';
	import LayoutQuestion from './layouts/LayoutQuestion.vue';

	const Props = Vue.extend({
		props: {
			/** The layout to display */
			layout: {
				type: [Array, Object],
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props, LayoutMap);

	/**
	 * FormLayout is a component used to
	 * transform a layout into template
	 */
	@Component({
		model: {
			prop: 'value',
			event: 'change'
		},
		components: {
			LayoutM,
			LayoutMM,
			LayoutQuestion
		}
	})
	export default class FormLayout extends MixinsDeclaration {
		layout!: ComputedLayoutItem;

		/**
		 * Get the name of the slot
		 *
		 * @param {number} index The index of the field
		 * @returns {string} The name of the slot
		 */
		getSlotName(index: number) {
			const nIndex = index + 1;

			return `content-${nIndex}`;
		}
	}
</script>

<style lang="scss" scoped>
	$spaceBetweenFields: 16px;

	.vd-form-layout + .vd-form-layout {
		margin-top: $spaceBetweenFields !important;
	}

	// Use deep selector since we can't
	// style the slot directly
	.vd-form-layout ::v-deep .vd-form-field {
		padding: $spaceBetweenFields;
	}
</style>
