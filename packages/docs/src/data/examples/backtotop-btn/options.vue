<template>
	<div class="d-flex align-center">
		<VCard
			elevation="2"
			height="500"
		>
			<BackToTopBtn
				:vuetify-options="vuetifyOptions"
				label="Retour en haut"
				:top="20"
			/>
		</VCard>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import BackToTopBtn from '@cnamts/vue-dot/src/elements/BackToTopBtn';

	@Component({
		inheritAttrs: false,
		components: {
			BackToTopBtn
		}
	})
	export default class BackToTopBtnOptions extends Vue {
		vuetifyOptions = {
			btn: {
				outlined: false,
				color: 'primary',
				rounded: false
			},
			icon: {
				color: 'white',
				size: '16px'
			}
		};
	}
</script>
