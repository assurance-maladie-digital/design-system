<template>
	<div class="vd-copy-btn">
		<VMenu v-model="tooltip" v-bind="options.menu" :disabled="hideTooltip">
			<template v-slot:activator="{ on }">
				<VBtn
					v-bind="options.btn"
					:aria-label="label"
					v-on="on"
					@click="copy"
				>
					<slot name="icon">
						<VIcon v-bind="options.icon">
							{{ copyIcon }}
						</VIcon>
					</slot>
				</VBtn>
			</template>

			<slot name="tooltip">
				{{ locales.tooltip }}
			</slot>
		</VMenu>
	</div>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import { mdiContentCopy } from "@mdi/js";

import { config } from "./config";
import { locales } from "./locales";

import { copyToClipboard } from "../../functions/copyToClipboard";
import { customizable } from "../../mixins/customizable";

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	textToCopy: {
		type: [Function, String] as PropType<() => string | string>,
		required: true,
	},
	hideTooltip: {
		type: Boolean,
		default: false,
	},
	tooltipDuration: {
		type: Number,
		default: 2500,
	},
});

const { options } = customizable(config);

const tooltip = ref(false);
const copyIcon = mdiContentCopy;

function copy(): void {
	const contentToCopy =
		typeof props.textToCopy === "function" ? props.textToCopy() : props.textToCopy;
	copyToClipboard(contentToCopy);

	if (props.hideTooltip) {
		return;
	}

	setTimeout(() => {
		tooltip.value = false;
	}, props.tooltipDuration);
}
</script>

<style lang="scss">
// Make the tooltip menu look like a tooltip
.vd-copy-tooltip-menu {
	padding: 6px 16px;
	box-shadow: none;
	margin-top: 2px;
	background: rgba(97, 97, 97, 0.9);
}
</style>
