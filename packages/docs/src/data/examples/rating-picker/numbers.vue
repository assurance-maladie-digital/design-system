<template>
	<rating-picker
		label="Quel note mettez-vous à ce service ?"
		type="NumberPicker"
		:item-labels="['plutôt inutile', 'très utile']"
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
export default class NumbersSample extends Vue {

}
</script>
