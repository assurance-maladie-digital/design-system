<template>
		<rating-picker
			label="Comment allez-vous ?"
			type="StarsPicker"
			:item-labels="['plutôt mal', 'plutôt birn']"
		>
		</rating-picker>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import RatingPicker from '@cnamts/vue-dot/src/patterns/RatingPicker/RatingPicker.vue';

@Component({
	components: { RatingPicker }
})
export default class StarsSample extends Vue {
}
</script>
