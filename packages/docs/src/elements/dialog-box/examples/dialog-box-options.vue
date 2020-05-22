<template>
	<div>
		<VBtn
			color="primary"
			@click="dialog = true"
		>
			Afficher la boîte de dialogue
		</VBtn>

		<DialogBox
			v-model="dialog"
			title="DialogBox"
			:vuetify-options="vuetifyOptions"
			persistent
		>
			<p>Ceci est un exemple avec quelques options vuetify</p>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DialogBoxEx extends Vue {
		dialog = false;

		vuetifyOptions = {
			cardTitle: {
				class: 'accent--text'
			},
			closeBtn: {
				class: { 'd-none': false }
			},
			icon: {
				color: 'accent'
			},
			cardActions: {
				class: 'py-0'
			},
			cancelBtn: {
				color: 'accent',
				text: false
			},
			confirmBtn: {
				text: true
			}
		};
	}
</script>
