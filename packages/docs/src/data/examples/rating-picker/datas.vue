<template>
	<div>
		Données récupérées :
		<pre>{{ data }}</pre>
		<rating-picker
			label="Comment allez-vous ?"
			type="StarsPicker"
			:item-labels="['plutôt mal', 'plutôt birn']"
			@input="onChange"
			@validate="onValidate"
		>
		</rating-picker>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import RatingPicker from '@cnamts/vue-dot/src/patterns/RatingPicker/RatingPicker.vue';

@Component({
	components: { RatingPicker }
})
export default class StarsSample extends Vue {
	data:string|null = null;

	onChange(value: number): void {
		this.data= `event input, value ${ value }`;
	}

	onValidate(value: number): void {
		this.data= `event validate, value ${ value }`;
	}
}
</script>




