<template>
	<div>
		<h6 class="mb-6">
			{{ label }}
		</h6>
		<v-rating
			:length="length"
			:readonly="readonly"
			large
			hover
			class="d-flex flex-wrap flex-row justify-space-between ma-4"
			:class="{
				'justify-center': readonly && emotionSelected !== -1
			}"
		>
			<template #item="{ index }">
				<div
					class="d-flex flex-column align-center justify-center"
					:class="iconButtonClasses(index)"
					:tabindex="index + 1"
					@click="selectEmotion(index)"
					@keyup.enter="selectEmotion(index)"
				>
					<slot :name="slotName(index)">
						<VIcon
							x-large
							class="pa-0"
							:color="genColor(index)"
						>
							{{ getIcon(index) }}
						</VIcon>
						<span class="description mt-1">
							{{ getitemLabel(index) }}
						</span>
					</slot>
				</div>
			</template>
		</v-rating>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { RatingMixin } from '../RatingMixin';
	import Component, { mixins } from 'vue-class-component';

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
				validator: (value: number) => value == 3 || value == 2
			}
		}
	});

	const MixinsDeclaration = mixins(Props, RatingMixin);

	@Component
	export default class EmotionPicker extends MixinsDeclaration {
		colors = ['orange-darken-20', 'yellow-darken-20', 'turquoise-darken-20'];
		colorsSimple = ['orange-darken-20', 'turquoise-darken-20'];

		sadIcon = mdiEmoticonSadOutline;
		neurtralIcon = mdiEmoticonNeutralOutline;
		happyIcon = mdiEmoticonHappyOutline;
		emotionSelected = -1;

		mounted(): void {
			this.checkLength();
		}

		checkLength(): void {
			if (this.length !== 2 && this.length !== 3) {
				// eslint-disable-next-line no-console
				console.error('length must be 2 or 3');
			}
		}

		iconButtonClasses(index: number): object {
			return {
				'icon-button': true,
				'sad': index === 0,
				'neutral': index === 1 && this.length === 3,
				'happy': (index === 2 && this.length === 3) || (index === 1 && this.length === 2),
				'active': index === this.emotionSelected,
				'd-none': this.readonly && this.emotionSelected !== -1 && index !== this.emotionSelected
			};
		}

		slotName(index: number): string {
			if (index === 0) {
				return 'sad';
			} else if (index === 1 && this.length === 3) {
				return 'neutral';
			} else if (index === 1 && this.length === 2) {
				return 'happy';
			} else {
				return 'happy';
			}
		}

		getIcon(index: number): string {
			if (index === 0) {
				return this.sadIcon;
			} else if (index === 1 && this.length === 3) {
				return this.neurtralIcon;
			} else if (index === 1 && this.length === 2) {
				return this.happyIcon;
			} else {
				return this.happyIcon;
			}
		}

		genColor(index: number): string {
			if (this.length === 2) {
				return this.colorsSimple[index];
			}
			return this.colors[index];
		}

		selectEmotion(index: number): void {
			this.emotionSelected = index;
			this.$emit('input', index);
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

h6 {
	font-size: 16px;
}
.description {
	font-size: 12px;
}
.icon-button {
	height: 88px;
	width: 88px;
	border-radius: 8px;
	&:last-child {
		margin-right: 0;
	}
	&:hover {
		cursor: pointer;
	}
	&.sad {
		&:hover {
			background-color: $vd-orange-lighten-90;
		}
		&:focus {
			outline: solid 1px $vd-orange-darken-20;
		}
		&.active {
			border: 1px solid $vd-orange-darken-20;
			background-color: $vd-orange-lighten-90;
		}
	}
	&.neutral {
		&:hover {
			background-color: $vd-yellow-lighten-90;
		}
		&:focus {
			outline: solid 1px $vd-yellow-darken-20;
		}
		&.active {
			border: 1px solid $vd-yellow-darken-20;
			background-color: $vd-yellow-lighten-90;
		}
	}
	&.happy {
		&:hover {
			background-color: $vd-turquoise-lighten-90;
		}
		&:focus {
			outline: solid 1px $vd-turquoise-darken-20;
		}
		&.active {
			border: 1px solid $vd-turquoise-darken-20;
			background-color: $vd-turquoise-lighten-90;
		}
	}
}
</style>
