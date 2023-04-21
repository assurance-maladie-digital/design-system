<template>
	<rating-picker
		label="Comment vous senter vous ?"
		type="EmotionPicker"
		:length=2
		:item-labels="['plutôt mal', 'plutôt bien']"
		:hideCloseButtons="true"
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
export default class Emotions extends Vue {

}
</script>
