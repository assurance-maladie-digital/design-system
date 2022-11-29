<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<AccessibilityBanner
			v-if="active"
			:vuetify-options="vuetifyOptions"
			accessibility-route="#section/personnalisation"
			@reject="active = false"
			@accept="active = false"
		/>

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
	import AccessibilityBanner from '@cnamts/vue-dot/src/patterns/AccessibilityBanner';

	@Component({
		inheritAttrs: false,
		components: {
			AccessibilityBanner
		}
	})
	export default class AccessibilityBannerOptions extends Vue {
		active = true;

		vuetifyOptions = {
			sheet: {
				elevation: 5
			},
			customizeBtn: {
				text: true,
				outlined: false
			},
			acceptBtn: {
				outlined: false
			}
		};
	}
</script>
