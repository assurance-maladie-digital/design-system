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
			class="d-flex flex-wrap"
		>
			<template #item="props">
				<div
					:class="[
						'icon-button',
						{
							'sad': props.index === 0,
							'neutral': props.index === 1 && length === 3,
							'happy': props.index === 2 && length === 3 || props.index === 1 && length === 2
						},
						{
							'active': props.index === emotionSelected
						}
					]"
					:tabindex="props.index + 1"
					@click="onValidate(props.index)"
					@keyup.enter="onValidate(props.index)"
				>
					<template v-if="props.index === 0">
						<slot name="sad">
							<VIcon
								x-large
								:color="genColor(props.index)"
							>
								{{ sadIcon }}
							</VIcon>
							<span class="description mt-1">
								{{ labels.sad }}
							</span>
						</slot>
					</template>
					<template v-else-if="props.index === 1">
						<slot
							v-if="length === 3"
							name="neutral"
						>
							<VIcon
								x-large
								:color="genColor(props.index)"
							>
								{{ neurtralIcon }}
							</VIcon>
							<span class="description mt-1">
								{{ labels.neutral }}
							</span>
						</slot>
						<slot
							v-else
							name="happy"
						>
							<VIcon
								x-large
								:color="genColor(props.index)"
							>
								{{ happyIcon }}
							</VIcon>
							<span class="description mt-1">
								{{ labels.happy }}
							</span>
						</slot>
					</template>
					<template v-else-if="props.index === 2 && length === 3">
						<slot name="happy">
							<VIcon
								x-large
								:color="genColor(props.index)"
							>
								{{ happyIcon }}
							</VIcon>
							<span class="description mt-1">
								{{ labels.happy }}
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
	import Component, { mixins } from 'vue-class-component';

	import { locales } from '../locales';
	import {
		mdiEmoticonHappyOutline,
		mdiEmoticonSadOutline,
		mdiEmoticonNeutralOutline
	} from '@mdi/js';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				required: true
			},
			length: {
				type: Number,
				default: 3,
				validator: (value: number) => value == 3 || value == 2
			},
			readonly: {
				type: Boolean,
				default: false
			},
			labels: {
				type: Object,
				default: () => ({})
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class EmotionPicker extends MixinsDeclaration {
		locales = locales;
		colors = ['orange-darken-20', 'yellow-darken-20', 'turquoise-darken-20'];
		colorsSimple = ['orange-darken-20', 'turquoise-darken-20'];

		sadIcon = mdiEmoticonSadOutline;
		neurtralIcon = mdiEmoticonNeutralOutline;
		happyIcon = mdiEmoticonHappyOutline;

		emotionSelected = -1;

		genColor(index: number): string {
			if (this.length === 2) {
				return this.colorsSimple[index];
			}
			return this.colors[index];
		}

		onValidate(index: number): void {
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
