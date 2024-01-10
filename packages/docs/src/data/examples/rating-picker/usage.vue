<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<RatingPicker
			v-bind="$attrs"
			v-on="$listeners"
			v-model="rating"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class RatingPickerUsage extends Vue {
		defaultProps = {
			type: 'emotion',
			label: 'Êtes-vous satisfait de ce service ?'
		};

		rating = -1;

		options = {
			booleans: [
				'readonly',
				'twoEmotions',
				'hideAlert'
			],
			textFields: [
				'label'
			],
			selects: {
				type: [
					'emotion',
					'number',
					'stars'
				]
			}
		};
	}
</script>
