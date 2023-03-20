<template>
	<div class="vd-text-area-form">
		<div class="d-flex justify-center">
			<span
				class="mb-6 text-subtitle-2"
			>
				{{ question }}
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
			question: {
				type: String,
				required: true
			},
			isValidated: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class TextAreaForm extends MixinsDeclaration {

		reasonValue = '';

		emitResult(): void {
			if (this.isValidated) {
				return;
			} else {
				this.$emit(
					'update-result',
					{
						step: this.question,
						result: this.reasonValue
					}
				);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

h6 {
	font-size: 16px;
}
</style>
