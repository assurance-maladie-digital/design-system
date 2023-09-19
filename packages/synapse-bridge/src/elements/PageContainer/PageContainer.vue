<template>
	<div :class="spacingClass" class="vd-page-container d-flex justify-center">
		<VSheet :width="containerSize" :color="color">
			<slot />
		</VSheet>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { customizable } from "../../mixins/customizable";
import { useDisplay } from "vuetify";

import { SizeEnum, SIZE_ENUM_VALUES } from "./SizeEnum";
import { IndexedObject } from "../../types";
import { propValidator } from "../../helpers/propValidator";

const Props = {
	props: {
		size: {
			type: String,
			default: SizeEnum.X_LARGE,
			validator: (value: string) => propValidator('size', SIZE_ENUM_VALUES, value)
		},
		spacing: {
			type: String,
			default: undefined
		},
		color: {
			type: String,
			default: 'transparent'
		}
	}
};


export default defineComponent({
	mixins: [customizable(Props)],
	props: {
		...Props.props
	},
	data() {
		return {
			props: {
				size: this.size,
				spacing: this.spacing,
				color: this.color,
			}
		};
	},
	computed: {
		spacingClass(): string {
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
			const spacing = spacingMapping[name.value];

			return `py-10 ${spacing}`;
		},

		containerSize(): number {
			const sizeMapping: IndexedObject<number> = {
				[SizeEnum.X_LARGE]: 1440,
				[SizeEnum.LARGE]: 960,
				[SizeEnum.MEDIUM]: 800,
				[SizeEnum.SMALL]: 600,
			};

			return sizeMapping[this.size];
		}
	}
});
</script>
