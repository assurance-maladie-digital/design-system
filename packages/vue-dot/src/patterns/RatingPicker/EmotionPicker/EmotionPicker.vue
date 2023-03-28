<template>
	<div>
		<h6 class="mb-6">
			{{ label }}
		</h6>
		<v-rating
			:length="length"
			:readonly="read_only_internal"
			large
			hover
			class="d-flex flex-wrap"
		>
			<template #item="props">
				<div
					:class="iconButtonClasses(props.index)"
					:tabindex="props.index + 1"
					@click="selectEmotion(props.index)"
					@keyup.enter="selectEmotion(props.index)"
				>
					<template>
						<slot :name="slotName(props.index)">
							<VIcon
								x-large
								:color="genColor(props.index)"
							>
								{{ getIcon(props.index) }}
							</VIcon>
							<span class="description mt-1">
								{{ itemLabels[slotName(props.index)] }}
							</span>
						</slot>
					</template>
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
			},
			itemLabels: {
				type: Object,
				default: () => ({})
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

		el = {
			index: Number
		};
		emotionSelected = -1;

		iconButtonClasses(el: number): object {
			return {
				'icon-button': true,
				'sad': el === 0,
				'neutral': el === 1 && this.length === 3,
				'happy': (el === 2 && this.length === 3) || (el === 1 && this.length === 2),
				'active': el === this.emotionSelected
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
.v-rating {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.v-icon {
		padding: 0;
	}
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
