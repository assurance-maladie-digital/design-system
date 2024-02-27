<script lang="ts" setup>
import { ref } from 'vue';
import { CookieBanner } from '@/main'

const active = ref(true)

const vuetifyOptions = {
	sheet: {
		elevation: 5
	},
	customizeBtn: {
		variant: 'text',
		outlined: false
	},
	rejectBtn: {
		outlined: true
	},
	acceptBtn: {
		outlined: true
	}
}
</script>

<template>
	<br>
	<CookieBanner
		v-if="active"
		cookies-route="/templates/cookies-page"
		@reject="active = false"
		@accept="active = false"
	/>

	<CookieBanner
		v-if="active"
		:vuetify-options="vuetifyOptions"
		cookies-route="/templates/cookies-page"
		@reject="active = false"
		@accept="active = false"
	/>

	<CookieBanner
		v-if="active"
		cookies-route="/templates/cookies-page"
		@reject="active = false"
		@accept="active = false"
	>
		Ce téléservice utilise des cookies en enregistrant certaines informations lors de votre navigation.
	</CookieBanner>

	<VBtn
		v-if="!active"
		color="primary"
		@click="active = true"
	>
		Réinitialiser
	</VBtn>
</template>

<style lang="scss" scoped>
.vd-cookie-banner + .vd-cookie-banner {
	margin-top: 60px;
}

.vd-cookie-banner {
	position: relative;
	bottom: 0;
	z-index: 1;
}
</style>
