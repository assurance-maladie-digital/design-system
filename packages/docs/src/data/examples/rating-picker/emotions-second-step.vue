<template>
	<rating-picker
		label="Comment vous senter vous ?"
		type="EmotionPicker"
		:length=2
		:item-labels="['plutôt mal', 'plutôt bien']"
	>
		<div class="text-subtitle-1">
			Vous avez de la fièvre ?
		</div>
		<EmotionPicker
			:length=2
			:item-labels="['plutôt pas', 'plutôt beaucoup']"
		/>
	</rating-picker>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import RatingPicker from '@cnamts/vue-dot/src/patterns/RatingPicker/RatingPicker.vue';
import EmotionPicker from '@cnamts/vue-dot/src/patterns/RatingPicker/EmotionPicker/EmotionPicker.vue';

@Component({
	components: { RatingPicker,EmotionPicker }
})
export default class Emotions extends Vue {

}
</script>
