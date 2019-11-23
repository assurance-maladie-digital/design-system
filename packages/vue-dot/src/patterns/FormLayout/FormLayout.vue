<template>
	<component
		:is="getLayout(layout.type)"
		:fields="layout.fields"
	>
		<!-- eslint-disable -->
		<template
			v-for="(field, index) in layout.fields"
			#[slotName(index)]="{ field }"
		>
			<!-- {{ field }} -->
			<slot v-bind="{field}" />
		</template>
		<!-- eslint-enable -->

		<!-- <template
			v-for="slot in Object.keys($scopedSlots)"
			#[slot]="scope"
		>
			<slot
				:name="slot"
				v-bind="scope"
			/>
		</template> -->
	</component>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { LayoutMap } from './types';

	// Layouts
	import OneColumnLayout from './layouts/OneColumnLayout.vue';
	import TwoColumnsLayout from './layouts/TwoColumnsLayout.vue';

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
			TwoColumnsLayout
		}
	})
	export default class FormLayout extends Props {
		layoutMap: LayoutMap = {
			oneColumn: 'OneColumnLayout',
			twoColumns: 'TwoColumnsLayout'
		};

		slotName(index: number) {
			const nIndex = index + 1;
			console.log(`content-${nIndex}`);
			return `content-${nIndex}`;
		}

		// get layout() {
		// 	return this.value;
		// }

		// set field(value: Field) {
		// 	this.$emit('change', value);
		// }

		getLayout(layoutName: string) {
			return this.layoutMap[layoutName];
		}
	}
</script>
