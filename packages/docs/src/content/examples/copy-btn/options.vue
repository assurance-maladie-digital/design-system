<template>
	<div class="d-flex align-center">
		<p class="mb-0 mr-1">
			Utilisateur n°<b>5654119707</b>
		</p>

		<CopyBtn
			:vuetify-options="vuetifyOptions"
			label="Copier le numéro d'utilisateur"
			text-to-copy="5654119707"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class CopyBtnOptions extends Vue {
		vuetifyOptions = {
			menu: {
				offsetX: false,
				offsetY: true,
				nudgeLeft: 50
			},
			btn: {
				large: true
			},
			icon: {
				color: 'accent'
			}
		};
	}
</script>
