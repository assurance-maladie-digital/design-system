<template>
	<VAlert
		color="success"
		class="doc-alert w-100"
	>
		<template #prepend>
			<VIcon class="vd-alert-icon rounded-circle mr-4">
				<slot name="icon">
					{{ bridgeIcon }}
				</slot>
			</VIcon>
		</template>

		<template #default>
			<slot />
		</template>
	</VAlert>
</template>

<script lang="ts">
	import Vue from "vue";
	import Component from "vue-class-component";

	import { mdiBridge } from "@mdi/js";

	@Component({
		inheritAttrs: false
	})
	export default class DocAlert extends Vue {
		bridgeIcon = mdiBridge;
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.doc-alert :deep(p:last-child) {
		margin-bottom: 0 !important;
	}

	@mixin redesign($type, $map) {
		border-width: 0;
		border-left: solid 4px;
		color: rgba(0, 0, 0, 0.87) !important;

		&.#{$type} {
			background: map-get($map, 'background') !important;
			border-color: map-get($map, 'border') !important;

			&,
			&--text {
				.v-alert__wrapper > .v-icon {
					width: 56px;
					height: 56px;
					flex: none;
				}

				.v-alert__dismissible {
					margin-right: 0;
					margin-left: 0;
				}

				.vd-close-btn {
					&::before {
						content: none;
					}

					&:focus-visible {
						outline: 2px solid;
					}
				}
			}

			&--text {
				color: map-get($map, 'accent') !important;
				border-color: map-get($map, 'accent') !important;

				.v-alert__wrapper > .v-icon {
					background: map-get($map, 'icon-bg');

					:deep(svg) {
						fill: map-get($map, 'accent') !important;
					}
				}

				.vd-close-btn {
					color: map-get($map, 'accent') !important;
					border-color: map-get($map, 'accent') !important;
				}
			}

			.v-alert__wrapper > .v-icon {
				background: map-get($map, 'icon-bg');

				:deep(svg) {
					fill: map-get($map, 'icon') !important;
				}
			}

			@media screen and (max-width: 599px) {
				&,
				&--text {
					:deep(.v-alert__wrapper) {
						flex-direction: column;
						align-items: flex-start;
					}

					.v-alert__wrapper > .v-icon {
						width: 24px;
						height: 24px;
						background: none;
						margin-bottom: 16px;
					}

					.vd-close-btn {
						margin-left: 0 !important;
						margin-top: 16px;
						align-self: flex-end;
					}
				}
			}
		}
	}

	.v-alert {
		@include redesign('success', (
			'background': $vd-turquoise-lighten-80,
			'accent': $vd-turquoise-darken-60,
			'border': $vd-turquoise-darken-60,
			'icon': $vd-turquoise-darken-60,
			'icon-bg': $vd-turquoise-lighten-90
		));
	}
</style>
