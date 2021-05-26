<template>
	<div>
		<VBtn
			color="primary"
			@click="dialog = true"
		>
			Afficher le composant
		</VBtn>

		<DialogBox
			v-model="dialog"
			:vuetify-options="vuetifyOptions"
			title="Enregistrement"
			persistent
			@cancel="dialog = false"
			@confirm="dialog = false"
		>
			<p>Souhaitez-vous procéder à l'enregistrement ?</p>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DialogBoxOptions extends Vue {
		dialog = false;

		vuetifyOptions = {
			cardTitle: {
				class: 'pa-0 mb-4 accent--text'
			},
			closeBtn: {
				class: {
					'd-none': true
				}
			},
			icon: {
				color: 'accent'
			},
			cancelBtn: {
				color: 'accent',
				text: false
			},
			confirmBtn: {
				color: 'accent',
				text: true
			}
		};
	}
</script>
