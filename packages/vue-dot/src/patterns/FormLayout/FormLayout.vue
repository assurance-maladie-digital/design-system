<template>
	<component
		:is="getLayout(layout.type)"
		:fields="layout.fields"
		class="vd-form-layout"
	>
		<!-- eslint-disable vue/no-unused-vars -->
		<template
			v-for="(field, index) in layout.fields"
			#[getSlotName(index)]
		>
			<slot v-bind="{ field }" />
		</template>
	</component>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { LayoutMap } from './types';

	// Layouts
	import OneColumnLayout from './layouts/OneColumnLayout.vue';
	import TwoColumnsLayout from './layouts/TwoColumnsLayout.vue';
	import LayoutM from './layouts/LayoutM.vue';
	import LayoutMM from './layouts/LayoutMM.vue';

	const Props = Vue.extend({
		props: {
			layout: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		},
		components: {
			OneColumnLayout,
			TwoColumnsLayout,
			LayoutM,
			LayoutMM
		}
	})
	export default class FormLayout extends Props {
		layoutMap: LayoutMap = {
			oneColumn: 'OneColumnLayout',
			twoColumns: 'TwoColumnsLayout',
			m: 'LayoutM',
			mm: 'LayoutMM'
		};

		getSlotName(index: number) {
			const nIndex = index + 1;

			return `content-${nIndex}`;
		}

		getLayout(layoutName: string) {
			return this.layoutMap[layoutName];
		}
	}
</script>

<style lang="scss" scoped>
	.vd-form-layout + .vd-form-layout {
		margin-top: 16px !important;
	}
</style>
