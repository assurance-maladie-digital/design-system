<template>
	<div>
		<component
			:is="type"
			ref="textareaRef"
			:label="label"
			:length="length"
			:readonly="read_only_internal"
			@input="onUpdate"
		/>
		<div v-if="read_only_internal">
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
			NumberPicker
		}
	})
	export default class RatingPicker extends MixinsDeclaration {

		/**
		 * losrqu on valide le premier rating du composant
		 *
		 * @param {RatingMixin} event le composant rating qui genere l update
		 * @param {number} value la valeur choisie par l utilisateur sur le rating
		 */

		read_only_internal = this.readonly;

		get length(): number {
			switch (this.type) {
				case RatingEnum.NUMBER: return 10;
				case RatingEnum.STAR: return 5;
			}
			return 3;
		}
		onUpdate( value: number, event: RatingMixin): void {
			this.read_only_internal = true;
			event.blockon(value);

		}
	}
</script>

<style lang="scss" scoped>

</style>
