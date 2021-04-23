<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<VBtn
			color="primary"
			@click="dialog = true"
		>
			Afficher le composant
		</VBtn>

		<DialogBox
			v-model="dialog"
			v-bind="$attrs"
			@cancel="dialog = false"
			@confirm="dialog = false"
			v-on="$listeners"
		>
			<p>Souhaitez-vous procéder à l'enregistrement ?</p>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class DialogBoxUsage extends Vue {
		dialog = false;

		defaultProps = {
			width: '800px',
			title: 'Enregistrement'
		};

		propsHiddenByDefault = [
			'width'
		];

		slotContent = `
	<p>Souhaitez-vous procéder à l'enregistrement ?</p>
`;

		options = {
			textFields: [
				'title',
				'width'
			]
		};
	}
</script>
