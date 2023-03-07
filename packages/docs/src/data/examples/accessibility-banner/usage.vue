<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<AccessibilityBanner
			v-if="active"
			accessibility-route="#section/utilisation"
			@accept="active = false; removeTabKey()"
		/>

		<VBtn
			v-if="!active"
			color="primary"
			class="text-none"
			@click="active = true; info = true; checkTabKey()"
		>
			Réinitialiser
		</VBtn>
		<div v-if="info">
			Cliquez sur la touche Tab
		</div>
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
		info = true;

		mounted() {
			this.checkTabKey();
		}

		checkTabKey(): void {
			document.addEventListener('keydown', (e) => {
				if (e.key === 'Tab') {
					this.info = false;
				} else {
					return;
				}
			});
		}
		removeTabKey(): void {
			document.removeEventListener('keydown', this.checkTabKey);
		}
	}
</script>
