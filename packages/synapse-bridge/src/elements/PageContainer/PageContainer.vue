<template>
	<div :class="spacingClass" class="vd-page-container d-flex justify-center">
		<VSheet :width="containerSize" :color="color">
			<slot />
		</VSheet>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";
import { SizeEnum, SIZE_ENUM_VALUES } from "./SizeEnum";
import { propValidator } from "../../helpers/propValidator";

const props = defineProps({
	size: {
		type: String,
		default: SizeEnum.X_LARGE,
		validator: (value: string) => propValidator("size", SIZE_ENUM_VALUES, value),
	},
	spacing: {
		type: String,
		default: undefined,
	},
	color: {
		type: String,
		default: "transparent",
	},
});

const { name } = useDisplay();

const spacingClass = computed(() => {
	if (props.spacing) {
		return props.spacing;
	}

	const spacingMapping = {
		xs: "px-0",
		sm: "px-4",
		md: "px-8",
		lg: "px-8",
		xl: "px-8",
	};

	const spacingValue = spacingMapping[name.value];

	return `py-10 ${spacingValue}`;
});

const containerSize = computed(() => {
	const sizeMapping = {
		[SizeEnum.X_LARGE]: 1440,
		[SizeEnum.LARGE]: 960,
		[SizeEnum.MEDIUM]: 800,
		[SizeEnum.SMALL]: 600,
	};

	return sizeMapping[props.size];
});
</script>
