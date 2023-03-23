<template>
	<div>
		<h6>{{ label }}</h6>
		<v-rating
			:length="length"
			color="primary"
			background-color="primary lighten-4"
			hover
			:readonly="haveAnswer"
		>
			<template #item="props">
				<v-btn
					class="mx-1 my-2 pa-0 rating-height-button"
					color="primary"
					outlined
					x-small
					@click="onValidate(props.index)"
				>
					{{ props.index }}
				</v-btn>
			</template>
		</v-rating>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';
	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				required: true
			},
			length: {
				type: Number,
				default: 5
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class NumberPicker extends MixinsDeclaration {

		haveAnswer =false;

		onValidate(event: Event): void {
			console.log(event);
			this.haveAnswer = true;
			this.length = Number(event);
		}

	}
</script>

<style lang="scss" scoped>

.rating-height-button {
	min-height: 36px;
}
h6 {
	font-size: 16px
}

</style>
