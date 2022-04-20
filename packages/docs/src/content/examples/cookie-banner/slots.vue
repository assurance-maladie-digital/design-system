<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<CookieBanner
			v-if="active"
			cookies-route="/composants/cookies-page"
			@reject="active = false"
			@accept="active = false"
		>
			Ce téléservice utilise des cookies en enregistrant certaines informations lors de votre navigation.
		</CookieBanner>

		<VBtn
			v-if="!active"
			color="primary"
			class="text-none"
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
	export default class CookieBannerSlots extends Vue {
		active = true;
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
