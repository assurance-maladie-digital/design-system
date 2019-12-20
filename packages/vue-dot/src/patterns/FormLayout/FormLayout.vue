<template>
	<component
		:is="getLayout(layout.type).component"
		:fields="layout.fields"
		class="vd-form-layout"
	>
		<template
			v-for="(field, index) in layout.fields"
			#[getSlotName(index)]
		>
			<slot :field="field" />
		</template>
	</component>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import LayoutMap from './mixins/layoutMap';

	// Layouts
	import LayoutM from './layouts/LayoutM.vue';
	import LayoutMM from './layouts/LayoutMM.vue';
	import LayoutQuestion from './layouts/LayoutQuestion.vue';

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
			LayoutM,
			LayoutMM,
			LayoutQuestion
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
