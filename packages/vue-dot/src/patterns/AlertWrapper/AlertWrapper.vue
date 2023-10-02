<template>
	<VAlert
		v-bind="$attrs"
		:type="type"
		:outlined="outlined"
		class="vd-alert-wrapper"
		v-on="$listeners"
	>
		<template #prepend>
			<slot name="icon">
				<VIcon class="vd-alert-icon rounded-circle mr-4">
					{{ alertIcon }}
				</VIcon>
			</slot>
		</template>

		<template #default>
			<slot />
		</template>

		<template
			v-if="dismissible"
			#close="{ toggle }"
		>
			<VBtn
				:color="outlined ? undefined : 'primary'"
				:ripple="false"
				text
				class="vd-close-btn pl-0 pr-1 ml-4"
				@click="toggle"
			>
				<VIcon
					small
					class="mr-1"
				>
					{{ closeIcon }}
				</VIcon>

				{{ locales.close }}
			</VBtn>
		</template>
	</VAlert>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { propValidator } from '../../helpers/propValidator';

	import { AlertTypeEnum, ALERT_TYPE_ENUM_VALUES } from './AlertTypeEnum';
	import { locales } from './locales';

	import {
		mdiAlertCircleOutline,
		mdiAlertOctagonOutline,
		mdiCheckCircleOutline,
		mdiInformationOutline,
		mdiClose
	} from '@mdi/js';

	const Props = Vue.extend({
		props: {
			type: {
				type: String,
				default: AlertTypeEnum.INFO,
				validator: (value: string) => propValidator('type', ALERT_TYPE_ENUM_VALUES, value)
			},
			dismissible: {
				type: Boolean,
				default: false
			},
			outlined: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		inheritAttrs: false
	})
	export default class AlertWrapper extends MixinsDeclaration {
		locales = locales;

		closeIcon = mdiClose;

		get alertIcon(): string {
			const icons: Record<string, string> = {
				info: mdiInformationOutline,
				success: mdiCheckCircleOutline,
				warning: mdiAlertCircleOutline,
				error: mdiAlertOctagonOutline
			};

			return icons[this.type];
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	@mixin redesign($type, $map) {
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
		@include redesign('warning', (
			'background': $vd-yellow-lighten-80,
			'accent': $vd-yellow-darken-60,
			'border': $vd-yellow-darken-20,
			'icon': $vd-yellow-darken-20,
			'icon-bg': $vd-yellow-lighten-90
		));

		@include redesign('success', (
			'background': $vd-turquoise-lighten-80,
			'accent': $vd-turquoise-darken-60,
			'border': $vd-turquoise-darken-60,
			'icon': $vd-turquoise-darken-60,
			'icon-bg': $vd-turquoise-lighten-90
		));

		@include redesign('error', (
			'background': $vd-orange-lighten-80,
			'accent': $vd-orange-darken-20,
			'border': $vd-orange-darken-20,
			'icon': $vd-orange-darken-20,
			'icon-bg': $vd-orange-lighten-90
		));

		@include redesign('info', (
			'background': $vd-am-blue-lighten-80,
			'accent': $vd-am-blue-base,
			'border': $vd-am-blue-base,
			'icon': $vd-am-blue-base,
			'icon-bg': $vd-am-blue-lighten-90
		));
	}
</style>
