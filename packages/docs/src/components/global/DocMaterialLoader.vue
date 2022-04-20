<template>
	<div class="spinner-block">
		<svg
			class="spinner"
			role="img"
			aria-hidden="true"
			width="65px"
			height="65px"
			viewBox="0 0 66 66"
			preserveAspectRatio="xMinYMin meet"
		>
			<circle
				class="path"
				fill="none"
				stroke-width="6"
				stroke-linecap="round"
				cx="33"
				cy="33"
				r="30"
			/>
		</svg>

		Chargement…
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocMaterialLoader extends Vue {}
</script>

<style lang="scss" scoped>
	// From template/public/css/loader.css

	/* Material Design spinner */
	.spinner-block {
		margin: 64px auto;
		display: flex;
		align-items: center;
		animation: fadein .25s;
	}

	.spinner-block svg {
		display: block;
		margin-right: 25px;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}

		90% {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	.spinner {
		animation: rotator 1.4s linear infinite;
	}

	@keyframes rotator {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	/* All animation */
	.path {
		stroke: #4285f4;
		stroke-dasharray: 100;
		stroke-dashoffset: 0;
		transform-origin: center;
		animation: dash 4s ease-in-out infinite,
		colors 5.6s ease-in-out infinite;
	}

	@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		/* Less good on IE */
		.path {
			stroke-dasharray: 100;
		}
	}

	@keyframes colors {
		0% {
			stroke: #4285f4;
		}

		25% {
			stroke: #de3e35;
		}

		50% {
			stroke: #f7c223;
		}

		75% {
			stroke: #1b9a59;
		}

		100% {
			stroke: #4285f4;
		}
	}

	@keyframes dash {
		0% {
			stroke-dashoffset: 187;
		}

		50% {
			stroke-dashoffset: 46.75;
			transform: rotate(135deg);
		}

		100% {
			stroke-dashoffset: 187;
			transform: rotate(350deg);
		}
	}
</style>
