<template>
	<div :class="spacingClass" class="vd-page-container d-flex justify-center">
		<VSheet :width="containerSize" :color="color">
			<slot />
		</VSheet>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-facing-decorator";

import { useDisplay } from "vuetify";

import { SizeEnum, SIZE_ENUM_VALUES } from "./SizeEnum";
import { IndexedObject } from "../../types";
import { propValidator } from "../../helpers/propValidator";

@Component
export default class MyComponent extends Vue {
	@Prop({
		type: String,
		default: SizeEnum.X_LARGE,
		validator: (value: string) =>
			propValidator("size", SIZE_ENUM_VALUES, value),
	})
	size!: string;

	@Prop({ type: String, default: undefined })
	spacing!: string | undefined;

	@Prop({ type: String, default: "transparent" })
	color!: string;

	get spacingClass(): string {
		if (this.spacing) {
			return this.spacing;
		}

		const spacingMapping: IndexedObject<string> = {
			xs: "px-0",
			sm: "px-4",
			md: "px-8",
			lg: "px-8",
			xl: "px-8",
		};

		const { name } = useDisplay();
		const spacingValue = spacingMapping[name.value];

		return `py-10 ${spacingValue}`;
	}

	get containerSize(): number {
		const sizeMapping: IndexedObject<number> = {
			[SizeEnum.X_LARGE]: 1440,
			[SizeEnum.LARGE]: 960,
			[SizeEnum.MEDIUM]: 800,
			[SizeEnum.SMALL]: 600,
		};

		return sizeMapping[this.size];
	}
}
</script>
