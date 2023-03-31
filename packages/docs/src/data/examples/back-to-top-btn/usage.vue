<template>
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
			v-bind="$attrs"
			:style="btnStyle"
			:target="target"
			v-on="$listeners"
		/>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	const EXAMPLE_TARGET = 'back-to-top-btn-usage';

	@Component({
		inheritAttrs: false
	})
	export default class BackToTopBtnUsage extends Vue {
		target = EXAMPLE_TARGET;

		defaultProps = {
			threshold: 120,
			nudgeRight: 16,
			nudgeBottom: 16
		};

		propsHiddenByDefault = [
			'threshold',
			'nudgeRight',
			'nudgeBottom'
		];

		options = {
			sliders: {
				threshold: {
					min: 0,
					max: 200,
					step: 20
				},
				nudgeRight: {
					min: 0,
					max: 56,
					step: 4
				},
				nudgeBottom: {
					min: 0,
					max: 56,
					step: 4
				}
			}
		};

		get btnStyle(): IndexedObject {
			return {
				marginRight: this.$attrs.nudgeRight + 'px'
			};
		}

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

<style lang="scss" scoped>
	.vd-back-to-top-btn {
		position: sticky !important;
		left: 100%;
	}
</style>
