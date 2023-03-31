<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<CookieBanner
			v-if="active"
			:vuetify-options="vuetifyOptions"
			cookies-route="/templates/cookies-page"
			@reject="active = false"
			@accept="active = false"
		/>

		<VBtn
			v-if="!active"
			color="primary"
			@click="active = true"
		>
			Réinitialiser
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class CookieBannerOptions extends Vue {
		active = true;

		vuetifyOptions = {
			sheet: {
				elevation: 5
			},
			customizeBtn: {
				text: true,
				outlined: false
			},
			rejectBtn: {
				outlined: true
			},
			acceptBtn: {
				outlined: true
			}
		};
	}
</script>

<style lang="scss" scoped>
	// Display inside component
	.vd-cookie-banner {
		position: relative;
		bottom: 0;
		z-index: 1;
	}
</style>
