<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<BackBtn
			:vuetify-options="vuetifyOptions"
			label="Retour"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import BackBtn from '@cnamts/vue-dot/src/elements/BackBtn';

	@Component({
		components: {
			BackBtn
		},
		inheritAttrs: false
	})
	export default class BackBtnOptions extends Vue {
		vuetifyOptions = {
			btn: {
				text: false,
				elevation: 2,
				color: 'primary',
				class: 'pa-2'
			},
			label: {
				color: 'white'
			},
			icon: {
				color: 'white'
			}
		};
	}
</script>
