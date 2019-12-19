<template>
	<component
		:is="getLayout(layout.type).component"
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
	import Component, { mixins } from 'vue-class-component';

	import LayoutMap from './mixins/layoutMap';

	// Layouts
	import LayoutQuestion from './layouts/LayoutQuestion/LayoutQuestion.vue';
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

	const MixinsDeclaration = mixins(Props, LayoutMap);

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		},
		components: {
			LayoutQuestion,
			LayoutM,
			LayoutMM
		}
	})
	export default class FormLayout extends MixinsDeclaration {
		getSlotName(index: number) {
			const nIndex = index + 1;

			return `content-${nIndex}`;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-form-layout + .vd-form-layout {
		margin-top: 16px !important;
	}
</style>
