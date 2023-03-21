<template>
	<div class="d-flex align-center">
		<VCard
			:id="target"
			width="100%"
			max-height="200px"
			class="overflow-y-auto"
		>
			<VSheet
				height="600px"
				class="d-flex flex-column align-center"
			>
				<p class="pa-2">
					Haut de la section.
				</p>
			</VSheet>

			<BackToTopBtn
				:vuetify-options="vuetifyOptions"
				:target="target"
				class="mr-4"
			/>
		</VCard>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const EXAMPLE_TARGET = 'back-to-top-btn-options';

	@Component
	export default class BackToTopBtnOptions extends Vue {
		target = EXAMPLE_TARGET;

		vuetifyOptions = {
			btn: {
				outlined: false,
				color: 'primary',
				rounded: false
			},
			icon: {
				color: 'white'
			}
		};

		// Scroll to the bottom of the card to show the button
		mounted() {
			const element = document.getElementById(this.target);

			if (!element) {
				return;
			}

			element.scrollTop = element.scrollHeight;
		}
	}
</script>

<style lang="scss">
	// Display inside component
	.vd-back-to-top-btn {
		left: 100%;
		position: sticky !important;
	}
</style>
