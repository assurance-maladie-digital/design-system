<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<AccessibilityBanner
			v-if="active"
			accessibility-route="#section/utilisation"
			@accept="active = false;"
		/>

		<VBtn
			v-if="!active"
			color="primary"
			class="text-none"
			@click="active = true;"
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
	export default class AccessibilityBannerUsage extends Vue {
		active = true;
	}
</script>
