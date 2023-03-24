<template>
	<div>
		<h6 class="mb-6">
			{{ label }}
		</h6>
		<v-rating
			:length="length"
			:readonly="haveAnswer"
			:item-labels="emotionsData.map(emotion => emotion.title)"
			large
			hover
		>
			<template #item="props">
				{{ props }}
				{{ props.index }}
				<!--<v-icon>
					{{ this.getIcon(props) }}
				</v-icon>-->

				<!--<button
					v-for="emotion in emotionsData"
					:key="emotion.title"
					class="emotion"
					:class="emotion.title"
					@click="onValidate(emotion.index)"
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
				</button>-->
			</template>
		</v-rating>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from '../locales';
	import { mdiEmoticonHappyOutline, mdiEmoticonSadOutline, mdiEmoticonNeutralOutline } from '@mdi/js';
	// import { EmotionItem } from './types';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				required: true
			},
			length: {
				type: Number,
				default: 5
			},
			emotions: {
				type: Array,
				default: () => []
			},
			readonly: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class EmotionPicker extends MixinsDeclaration {
		haveAnswer = false;
		locales = locales;
		colors = ['green', 'purple', 'orange', 'indigo', 'red'];

		sadIcon = mdiEmoticonSadOutline;
		neurtralIcon = mdiEmoticonNeutralOutline;
		happyIcon = mdiEmoticonHappyOutline;

		/*getIcon(props: Array): string {
			switch (props.index) {
				case 1:
					return this.happyIcon;
				case 2:
					return this.happyIcon;
				case 3:
					return this.happyIcon;
				case 4:
					return '';
			}
		}*/

		/* selectedEmotion = '';

		get emotionsData(): EmotionItem[] {
			return this.emotions.map((emotion: any = {}, index: number) => ({
				...emotion,
				title: emotion.title,
				description: emotion.description,
				icon: this.getIcon(emotion.title),
				color: this.getColor(emotion.title),
				index: index + 1
			}));
		}

		getIcon(emotion: string): string {
			switch (emotion) {
				case 'sad':
					return this.sadIcon;
				case 'neutral':
					return this.neurtralIcon;
				case 'happy':
					return this.happyIcon;
				default:
					return '';
			}
		}

		getColor(emotion: string): string {
			switch (emotion) {
				case 'sad':
					return 'red';
				case 'neutral':
					return 'orange';
				case 'happy':
					return 'green';
				default:
					return '';
			}
		}

		isActive(emotion: string): boolean {
			return this.selectedEmotion === emotion ? true : false;
		}

		emotionDescriptionClasses(emotion: EmotionItem): string {
			return this.isActive(emotion.title) ? `font-weight-bold ${emotion.color}--text` : '';
		}*/

		genColor(i: number): string {
			return this.colors[i];
		}

		onValidate(event: Event): void {
			console.log(event);
			/*this.haveAnswer = true;*/
			this.length = Number(event);
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
	&:focus {
		outline: solid 1px $vd-orange-darken-20;
		border-radius: 8px;
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
	&:focus {
		outline: solid 1px $vd-yellow-darken-20;
		border-radius: 8px;
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
	&:focus {
		outline: solid 1px $vd-turquoise-darken-20;
		border-radius: 8px;
	}
}
</style>
