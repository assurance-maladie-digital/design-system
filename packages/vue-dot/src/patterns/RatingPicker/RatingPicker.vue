<template>
	<div>
		<component
			:is="type"
			:label="label"
			:length="length_internal"
			@input="onFirstValidation"
		/>

		<v-alert
			v-if="read_only_internal"
			outlined
			type="success"
		>
			ca va
		</v-alert>
		<slot />
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
			}
		}
	});
	const MixinsDeclaration = mixins(Props,RatingMixin);

	@Component({
		components: {
			StarsPicker,
			NumberPicker
		}
	})
	export default class RatingPicker extends MixinsDeclaration {

		currentPicker: string=this.type;
		onFirstValidation(event: RatingMixin, value: number): void {
			this.read_only_internal = true;
			event.blockon(value);
		}
	}
</script>

<style lang="scss" scoped>

</style>
