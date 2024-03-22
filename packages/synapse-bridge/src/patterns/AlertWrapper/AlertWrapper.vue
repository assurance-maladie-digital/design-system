<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from 'vue';

import { propValidator } from "@/helpers/propValidator";

import { AlertTypeEnum, ALERT_TYPE_ENUM_VALUES } from "./AlertTypeEnum";
import { locales } from "./locales";

import {
	mdiAlertOutline,
	mdiAlertOctagonOutline,
	mdiCheckCircleOutline,
	mdiInformationOutline,
	mdiClose,
} from "@mdi/js";

export default defineComponent({
	inheritAttrs: false,
	props: {
		type: {
			type: String as PropType<AlertTypeEnum>,
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
		},
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
				warning: mdiAlertOutline,
				error: mdiAlertOctagonOutline,
			};

			return icons[this.type];
		},
	},
	methods: {
		dismissAlert() {
			this.$emit("update:modelValue", false);
		},
	},
});
</script>

<template>
	<VAlert
		v-bind="$attrs"
		:type="type"
		:class="type"
		:style="!outlined ? 'border-left: 4px solid' : ''"
		:variant="outlined ? 'outlined' : 'tonal'"
		:closable="dismissible"
		class="vd-alert-wrapper"
	>
		<template #prepend>
			<VIcon class="vd-alert-icon rounded-circle mr-4">
				<slot name="icon">
					{{ alertIcon }}
				</slot>
			</VIcon>
		</template>

		<template #default>
			<slot />
		</template>

		<template v-if="dismissible" #close>
			<VBtn
				:color="outlined ? undefined : 'primary'"
				:ripple="false"
				variant="text"
				class="vd-close-btn pl-0 pr-1 ml-4"
				@click="dismissAlert"
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

:deep(.v-alert__close) {
	align-self: center;
	.vd-close-btn {
		font-size: 1rem;
		width: auto;
		height: 36px;
		min-width: 64px;
		padding: 0 16px;
		border-radius: 4px;
		&:hover {
			background: transparent !important;
		}
	}
	.v-btn__overlay {
		background: transparent;
	}
}

.v-alert__prepend {
	.v-icon {
		width: 56px !important;
		height: 56px !important;
		padding: 16px;
		flex: none;
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
	.v-alert__prepend {
		.v-icon {
			width: 24px !important;
			height: 24px !important;
			background: transparent !important;
			margin-bottom: 16px;
			padding: 0;
		}
	}
	.vd-alert-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		:deep(.v-alert__content) {
			align-self: flex-start !important;
		}
	}

	.vd-close-btn {
		margin-left: 0 !important;
		margin-top: 16px;
	}
	:deep(.v-alert__close) {
		align-self: flex-end;
	}
}

@mixin redesign($type, $map) {
	&.#{$type}.v-alert--variant-tonal {
		background: map-get($map, "background") !important;
		color: map-get($map, "outline-color") !important;
	}

	&.#{$type}.v-alert--variant-outlined {
		background: transparent !important;
		border-color: map-get($map, "border") !important;
	}

	&.#{$type},
	&.text-#{$type} {
		.v-alert__prepend > .v-icon {
			background: map-get($map, "icon-bg");
			:deep(svg) {
				fill: map-get($map, "accent");
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
}

.v-alert {
	@include redesign(
		"warning",
		(
			"background": $vd-yellow-lighten-80,
			"accent": $vd-yellow-darken-60,
			"border": $vd-yellow-darken-60,
			"icon": $vd-yellow-darken-60,
			"icon-bg": $vd-yellow-lighten-90,
			"outline-color": $vd-grey-darken-80,
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
			"outline-color": $vd-grey-darken-80,
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
			"outline-color": $vd-grey-darken-80,
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
			"outline-color": $vd-grey-darken-80,
		)
	);
}
</style>
