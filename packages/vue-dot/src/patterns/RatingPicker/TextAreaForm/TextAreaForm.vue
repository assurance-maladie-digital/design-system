<template>
	<div class="vd-text-area-form">
		<div class="d-flex justify-center">
			<span
				class="mb-6 text-subtitle-2"
			>
				{{ questionDatas.question }}
			</span>
		</div>
		<div>
			<VTextarea
				v-model="reasonValue"
				outlined
				@change="emitResult"
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			questionDatas: {
				type: Object,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class TextAreaForm extends MixinsDeclaration {

		reasonValue = '';

		emitResult(): void {
			this.$emit(
				'update-result',
				{
					step: this.questionDatas.name,
					result: this.reasonValue
				}
			);
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

h6 {
	font-size: 16px;
}
</style>
