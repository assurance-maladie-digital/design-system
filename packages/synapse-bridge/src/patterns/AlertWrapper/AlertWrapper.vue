<script lang="ts">
import { defineComponent } from "vue";

import { propValidator } from "../../helpers/propValidator";

import { AlertTypeEnum, ALERT_TYPE_ENUM_VALUES } from "./AlertTypeEnum";
import { locales } from "./locales";

import {
	mdiAlertCircleOutline,
	mdiAlertOctagonOutline,
	mdiCheckCircleOutline,
	mdiInformationOutline,
	mdiClose,
} from "@mdi/js";

export default defineComponent({
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: AlertTypeEnum.INFO,
			validator: (value: string) =>
				propValidator("type", ALERT_TYPE_ENUM_VALUES, value),
		},
		dismissible: {
			type: Boolean,
			default: false,
		},
		outlined: {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {
			locales,
			closeIcon: mdiClose,
		};
	},
	computed: {
		alertIcon(): string {
			const icons: Record<string, string> = {
				info: mdiInformationOutline,
				success: mdiCheckCircleOutline,
				warning: mdiAlertCircleOutline,
				error: mdiAlertOctagonOutline,
			};

			return icons[this.type];
		},
	},
});
</script>

<template>
	<VAlert
		v-bind="$attrs"
		:type="type"
		:class="type"
		:variant="outlined ? 'outlined' : 'tonal'"
		:closable="dismissible"
		border="start"
		class="vd-alert-wrapper"
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

		<template v-if="dismissible" #close="{ toggle }">
			<VBtn
				:color="outlined ? undefined : 'primary'"
				:ripple="false"
				variant="text"
				class="vd-close-btn pl-0 pr-1 ml-4"
				@click="toggle"
			>
				<VIcon size="small" class="mr-1">
					{{ closeIcon }}
				</VIcon>

				{{ locales.close }}
			</VBtn>
		</template>
	</VAlert>
</template>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";

@mixin redesign($type, $map) {
	color: rgba(0, 0, 0, 0.87) !important;

	.v-alert__border {
		border-inline-start-width: 4px !important;
	}

	&.#{$type} {
		background: map-get($map, "background") !important;
		border-color: map-get($map, "border") !important;
	}

	&.#{$type},
	&.text-#{$type} {
		.vd-alert-wrapper > .v-icon {
			width: 56px !important;
			height: 56px !important;
			flex: none;
			background: map-get($map, "icon-bg");
			:deep(svg) {
				fill: map-get($map, "accent") !important;
			}
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

		@media screen and (max-width: 640px) {
			:deep(.v-alert__wrapper) {
				flex-direction: column;
				align-items: flex-start;
			}

			.vd-alert-wrapper > .v-icon {
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

	&.text-#{$type} {
		color: map-get($map, "accent") !important;
		border-color: map-get($map, "accent") !important;

		.vd-close-btn {
			color: map-get($map, "accent") !important;
			border-color: map-get($map, "accent") !important;
		}
	}

	.v-alert {
		@include redesign(
			"warning",
			(
				"background": $vd-yellow-lighten-80,
				"accent": $vd-yellow-darken-60,
				"border": $vd-yellow-darken-20,
				"icon": $vd-yellow-darken-20,
				"icon-bg": $vd-yellow-lighten-90,
			)
		);

		@include redesign(
			"success",
			(
				"background": $vd-turquoise-lighten-80,
				"accent": $vd-turquoise-darken-60,
				"border": $vd-turquoise-darken-60,
				"icon": $vd-turquoise-darken-60,
				"icon-bg": $vd-turquoise-lighten-90,
			)
		);

		@include redesign(
			"error",
			(
				"background": $vd-orange-lighten-80,
				"accent": $vd-orange-darken-20,
				"border": $vd-orange-darken-20,
				"icon": $vd-orange-darken-20,
				"icon-bg": $vd-orange-lighten-90,
			)
		);

		@include redesign(
			"info",
			(
				"background": $vd-am-blue-lighten-80,
				"accent": $vd-am-blue-base,
				"border": $vd-am-blue-base,
				"icon": $vd-am-blue-base,
				"icon-bg": $vd-am-blue-lighten-90,
			)
		);
	}
}
</style>
