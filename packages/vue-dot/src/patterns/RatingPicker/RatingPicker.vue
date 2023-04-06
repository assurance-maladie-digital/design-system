<template>
	<div>
		<component
			:is="type"
			ref="firstRating"
			:label="label"
			:length="length"
			:readonly="readonlyInternal"
			:item-labels="itemLabels"
			@input="onUpdate"
		/>
		<div v-if="readonlyInternal">
			<VAlert
				outlined
				type="success"
			>
				ca va
			</VAlert>
			<slot />
		</div>
		<div class="mr-2 mt-5 d-flex justify-space-between ">
			<VBtn
				text
				color="primary"
			>
				{{ locales.later }}
			</VBtn>
			<VBtn
				color="primary"
				depressed
			>
				{{ locales.more }}
			</VBtn>
		</div>
	</div>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';
	import StarsPicker from './StarsPicker';
	import NumberPicker from './NumberPicker';
	import { RatingEnum, RatingMixin } from './RatingMixin';
	import Vue, { PropType } from 'vue';
	import { propValidator } from '../../helpers/propValidator';
	import EmotionPicker from './EmotionPicker/EmotionPicker.vue';
	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			type: {
				type: String as PropType<RatingEnum>,
				required: true,
				validator: (value: string) => propValidator('type', Object.values(RatingEnum), value)
			},
			label: {
				type: String,
				required: true
			},
			readonly: {
				type: Boolean,
				default: false
			},
			itemLabels: {
				type: Array<string>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			StarsPicker,
			EmotionPicker,
			NumberPicker
		}
	})
	export default class RatingPicker extends MixinsDeclaration {
		$refs!: {
			firstRating: RatingMixin;
		};
		locales = locales;
		readonlyInternal = this.readonly;

		get length(): number {
			switch (this.type) {
				case RatingEnum.NUMBER: return 10;
				case RatingEnum.STAR: return 5;
			}

			return 3;
		}
		onUpdate( value: number): void {
			this.readonlyInternal = true;
			// on laisse a chaque rating le soin de decider comment il se bloque
			this.$refs.firstRating.blockon(value);
		}
	}
</script>
