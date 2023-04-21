<template>
	<rating-picker
		label="Comment allez-vous ?"
		type="EmotionPicker"
		:length="3"
		:item-labels="['sad', 'medium', 'happy']"
	>
		<div class="text-subtitle-1">
			Quels sont vos symptomes ?
		</div>
		<VTextarea outlined ></VTextarea>
	</rating-picker>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import RatingPicker from '@cnamts/vue-dot/src/patterns/RatingPicker/RatingPicker.vue';
import { Field } from '@cnamts/form-builder/src/components/FormField/types';

@Component({
	components: { RatingPicker }
})
export default class TextArea extends Vue {
}
</script>
