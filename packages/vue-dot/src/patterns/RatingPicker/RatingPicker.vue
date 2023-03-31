<template>
	<div>
		<component
			:is="type"
			ref="firstRating"
			:label="label"
			:length="length"
			:readonly="readonlyInternal"
			@input="onUpdate"
		/>
		<div v-if="readonlyInternal">
			<v-alert
				outlined
				type="success"
			>
				ca va
			</v-alert>
			<slot />
		</div>
		<div class="mr-2 mt-5 d-flex justify-space-between ">
			<v-btn
				text
				color="primary"
			>
				Fermer
			</v-btn>
			<v-btn
				color="primary"
				depressed
			>
				Transmettre mon avis
			</v-btn>
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
