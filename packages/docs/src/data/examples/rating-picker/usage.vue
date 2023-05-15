<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<RatingPicker
			v-bind="$attrs"
			v-on="$listeners"
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

		options = {
			booleans: [
				'readonly',
				'twoEmotions'
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
