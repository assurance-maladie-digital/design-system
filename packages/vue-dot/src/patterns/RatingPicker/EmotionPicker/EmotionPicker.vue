<template>
	<div class="vd-emotion-picker">
		<div
			v-if="label"
			class="text-h6"
		>
			{{ label }}
		</div>

		<VRating
			:length="length"
			:readonly="readonlyInternal"
			:class="{
				'justify-center': readonly && valueInternal !== -1
			}"
			large
			hover
			class="d-flex flex-wrap flex-row justify-space-between ma-4"
			@input="onDispatchValue"
		>
			<template #item="{ index, click }">
				<VBtn
					:disabled="isDisabled(index)"
					:color="getColor(index)"
					:class="{ 'active': index === valueInternal - 1 }"
					min-height="88px"
					min-width="88px"
					text
					@click="click"
				>
					<div class="d-flex flex-column align-center justify-center">
						<VIcon
							x-large
							class="pa-0"
						>
							{{ getIcon(index) }}
						</VIcon>

						<span class="mt-1">
							{{ getItemLabel(index) }}
						</span>
					</div>
				</VBtn>
			</template>
		</VRating>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';

	import { propValidator } from '../../../helpers/propValidator';

	import {
		mdiEmoticonHappyOutline,
		mdiEmoticonSadOutline,
		mdiEmoticonNeutralOutline
	} from '@mdi/js';

	const Props = Vue.extend({
		props: {
			length: {
				type: Number,
				default: 3,
				validator: (value: number) => propValidator('length', ['2','3'], value.toString())
			}
		}
	});

	const MixinsDeclaration = mixins(Props, RatingMixin);

	@Component
	export default class EmotionPicker extends MixinsDeclaration {
		sadIcon = mdiEmoticonSadOutline;
		neutralIcon = mdiEmoticonNeutralOutline;
		happyIcon = mdiEmoticonHappyOutline;

		colors = [
			'orange-darken-20',
			'yellow-darken-20',
			'turquoise-darken-20'
		];

		colorsSimple = [
			'orange-darken-20',
			'turquoise-darken-20'
		];

		isDisabled(index: number): boolean {
			return this.readonlyInternal && index !== (this.valueInternal - 1);
		}

		getIcon(index: number): string {
			if (index === 0) {
				return this.sadIcon;
			}

			if (index === 1 && this.length === 3) {
				return this.neutralIcon;
			}

			return this.happyIcon;
		}

		getColor(index: number): string {
			if (this.length === 2) {
				return this.colorsSimple[index];
			}

			return this.colors[index];
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.v-btn {
		border-radius: 8px;

		&:focus,
		&:hover {
			outline: solid 1px;
		}

		&.active {
			outline: solid 1px;

			&::before {
				background-color: currentColor;
				opacity: 0.08;
			}
		}
	}
</style>
