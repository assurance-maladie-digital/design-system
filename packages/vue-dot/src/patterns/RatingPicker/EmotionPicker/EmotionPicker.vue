<template>
	<div class="vd-emotion-picker">
		<div class="d-flex justify-center">
			<H6
				v-if="mainQuestion"
				class="mb-6"
			>
				{{ questionDatas.question }}
			</H6>
			<span
				v-else
				class="mb-6 text-subtitle-2"
			>
				{{ questionDatas.question }}
			</span>
		</div>
		<div
			class="d-flex"
			:class="selectedEmotion && mainQuestion ? 'justify-center' : 'justify-space-between'"
		>
			<div
				v-for="emotion in filterEmotions"
				:key="emotion.title"
			>
				<div
					:class="emotion.title"
					@click="selectEmotion(emotion.title)"
				>
					<div
						:class="{ active: isActive(emotion.title) }"
						class="icon-button"
					>
						<div class="d-flex justify-center">
							<VIcon
								x-large
								class="mt-3"
								:color="emotion.color"
							>
								{{ emotion.icon }}
							</VIcon>
						</div>
						<div class="mt-1 d-flex justify-center">
							<span
								class="description"
								:class="emotionDescriptionClasses(emotion)"
							>
								{{ emotion.description }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import { locales } from '../locales';

	import { EmotionItem } from './types';

	import { mdiEmoticonSadOutline, mdiEmoticonNeutralOutline, mdiEmoticonHappyOutline } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			questionDatas: {
				type: Object,
				required: true
			},
			mainQuestion: {
				type: Boolean,
				default: false
			},
			isValidated: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class EmotionPicker extends MixinsDeclaration {

		locales = locales;

		//icons
		sadIcon = mdiEmoticonSadOutline;
		neurtralIcon = mdiEmoticonNeutralOutline;
		happyIcon = mdiEmoticonHappyOutline;

		selectedEmotion = '';

		emotionList = [
			{
				title: 'sad',
				icon: this.sadIcon,
				color: 'orange-darken-20',
				description: this.locales.not
			},
			{
				title: 'neutral',
				icon: this.neurtralIcon,
				color: 'yellow-darken-20',
				description: this.locales.medium
			},
			{
				title: 'happy',
				icon: this.happyIcon,
				color: 'turquoise-darken-20',
				description: this.locales.perfect
			}
		];

		get filterEmotions(): EmotionItem[] {
			if (this.selectedEmotion && this.mainQuestion) {
				return this.emotionList.filter(emotion => emotion.title === this.selectedEmotion);
			} else {
				return this.emotionList;
			}
		}

		selectEmotion(emotion: string): void {
			if (this.isValidated) {
				return;
			} else {
				this.selectedEmotion = emotion;
				this.$emit(
					'update-result',
					{
						step: this.questionDatas.name,
						result: emotion
					}
				);
			}
		}

		isActive(emotion: string): boolean {
			return this.selectedEmotion === emotion ? true : false;
		}

		emotionDescriptionClasses(emotion: EmotionItem): string {
			return this.isActive(emotion.title) ? `font-weight-bold ${emotion.color}--text` : '';
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
}
.icon-button:hover {
	cursor: pointer;
}
.sad {
	.icon-button:hover {
		background-color: $vd-orange-lighten-90;
	}
	.active {
		border: 1px solid $vd-orange-darken-20;
		background-color: $vd-orange-lighten-90;
	}
}
.neutral {
	.icon-button:hover {
		background-color: $vd-yellow-lighten-90;
	}
	.active {
		border: 1px solid $vd-yellow-darken-20;
		background-color: $vd-yellow-lighten-90;
	}
}
.happy {
	.icon-button:hover {
		background-color: $vd-turquoise-lighten-90;
	}
	.active {
		border: 1px solid $vd-turquoise-darken-20;
		background-color: $vd-turquoise-lighten-90;
	}
}
</style>
