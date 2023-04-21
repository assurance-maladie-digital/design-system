<template>
	<div class="mx-2">
		<component
			:is="type"
			ref="firstRating"
			:label="label"
			:length="lengthInternal"
			:readonly="readonlyInternal"
			:item-labels="itemLabels"
			@input="onUpdate"
		/>

		<div v-if="haveAnswered">
			<VAlert
				outlined
				type="success"
			>
				{{ locales.thanks }}
			</VAlert>

			<slot />
		</div>

		<div
			v-if="!hideCloseButtons"
			class="d-flex justify-space-between mt-5 mr-2"
		>
			<VBtn
				text
				color="primary"
				@click="$emit('close')"
			>
				{{ locales.close }}
			</VBtn>

			<VBtn
				color="primary"
				depressed
				@click="onValidate"
			>
				{{ locales.later }}
			</VBtn>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import StarsPicker from './StarsPicker';
	import NumberPicker from './NumberPicker';
	import EmotionPicker from './EmotionPicker';
	import { RATING_ENUM_VALUES, RatingEnum, RatingMixin } from './RatingMixin';

	import { propValidator } from '../../helpers/propValidator';

	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			type: {
				type: String as PropType<RatingEnum>,
				required: true,
				validator: (value: string) => propValidator('type', RATING_ENUM_VALUES, value)
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
				type: Array as PropType<string[]>,
				default: null
			},
			length: {
				type: Number,
				default: 3,
				validator: (value: number) => propValidator('length', ['2','3'], value.toString())
			},
			hideCloseButtons: {
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

		locales = locales;

		readonlyInternal = this.readonly;
		haveAnswered=false;
		get lengthInternal(): number {
			switch (this.type) {
				case RatingEnum.NUMBER: return 10;
				case RatingEnum.STAR: return 5;
			}
			// dans le cas du EmotionPicker , on peut choisir 2 ou 3 avec la prop length

			return this.length;
		}

		onUpdate(value: number): void {
			this.haveAnswered = true;
			switch (this.type) {
				case RatingEnum.NUMBER:
					this.readonlyInternal = value <= 7;
					break;
				case RatingEnum.STAR:
				case RatingEnum.EMOTION:
					// on prend la moitié de la longueur, ca determine le mecontentement
					// en dessous on bloque et on lui demande des questions supplementaires
					this.readonlyInternal = value <= Math.ceil(this.lengthInternal / 2);
					break;
			}
			if (this.readonlyInternal) {
				this.$refs.firstRating.lockField(value);
			}
			this.$emit('input', value);
		}

		onValidate(): void {
			this.$emit('validate', this.$refs.firstRating.valueInternal);
		}
	}
</script>
