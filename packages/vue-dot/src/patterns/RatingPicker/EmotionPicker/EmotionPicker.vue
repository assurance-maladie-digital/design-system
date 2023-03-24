<template>
	<div>
		<h6 class="mb-6">
			{{ label }}
		</h6>
		<v-rating
			:length="length"
			:readonly="haveAnswer"
			large
			hover
		>
			<template #item="props">
				<div
					:class="[
						'icon-button',
						{
							'active': props.isActive,
							'sad': props.index === 0,
							'neutral': props.index === 1,
							'happy': props.index === 2
						}
					]"
					:tabindex="props.index"
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
						</slot>
					</template>
					<template v-else-if="props.index === 1">
						<slot name="neutral">
							<VIcon
								x-large
								:color="genColor(props.index)"
							>
								{{ neurtralIcon }}
							</VIcon>
						</slot>
					</template>
					<template v-else-if="props.index === 2">
						<slot name="happy">
							<VIcon
								x-large
								:color="genColor(props.index)"
							>
								{{ happyIcon }}
							</VIcon>
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
	import { mdiEmoticonHappyOutline, mdiEmoticonSadOutline, mdiEmoticonNeutralOutline } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				required: true
			},
			length: {
				type: Number,
				default: 3
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
		colors = ['orange-darken-20', 'yellow-darken-20', 'turquoise-lighten-20'];

		sadIcon = mdiEmoticonSadOutline;
		neurtralIcon = mdiEmoticonNeutralOutline;
		happyIcon = mdiEmoticonHappyOutline;

		genColor(index: number): string {
			return this.colors[index];
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
.v-rating {
	display: flex;
	flex-direction: row;
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
	&:hover {
		cursor: pointer;
	}
	&.sad {
		&:hover {
			background-color: $vd-orange-lighten-90;
		}
		&:active {
			border: 1px solid $vd-orange-darken-20;
			background-color: $vd-orange-lighten-90;
		}
		&:focus {
			outline: solid 1px $vd-orange-darken-20;
		}
	}
	&.neutral {
		&:hover {
			background-color: $vd-yellow-lighten-90;
		}
		&:active {
			border: 1px solid $vd-yellow-darken-20;
			background-color: $vd-yellow-lighten-90;
		}
		&:focus {
			outline: solid 1px $vd-yellow-darken-20;
		}
	}
	&.happy {
		&:hover {
			background-color: $vd-turquoise-lighten-90;
		}
		&:active {
			border: 1px solid $vd-turquoise-darken-20;
			background-color: $vd-turquoise-lighten-90;
		}
		&:focus {
			outline: solid 1px $vd-turquoise-darken-20;
		}
	}
}

</style>
