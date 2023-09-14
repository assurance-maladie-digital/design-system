<template>
	<div class="vd-copy-btn">
		<VMenu v-model="tooltip" v-bind="options.menu" :disabled="hideTooltip">
			<template #activator="{ props }">
				<VBtn
					v-bind="options.btn"
					v-on="props"
					:aria-label="label"
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

<script lang="ts">
import { PropType } from "vue";
import { Component, Vue, Prop, toNative } from "vue-facing-decorator";

import { config } from "./config";
import { locales } from "./locales";

import mixin from "../../mixins/customizable";

import { copyToClipboard } from "../../functions/copyToClipboard";

import { mdiContentCopy } from "@mdi/js";

@Component({
	mixins: [mixin],
})
class CopyBtn extends Vue {
	locales = locales;
	copyIcon = mdiContentCopy;
	tooltip = false;

	options = {
		menu: {},
		btn: {},
		icon: {},
	};

	@Prop({ type: String, required: true })
	label!: string;

	@Prop({
		type: [Function, String] as PropType<() => string | string>,
		required: true,
	})
	textToCopy!: (() => string) | string;

	@Prop({ type: Boolean, default: false })
	hideTooltip!: boolean;

	@Prop({ type: Number, default: 2500 })
	tooltipDuration!: number;

	copy(): void {
		const contentToCopy =
			typeof this.textToCopy === "function"
				? this.textToCopy()
				: this.textToCopy;

		copyToClipboard(contentToCopy);

		if (this.hideTooltip) {
			return;
		}

		setTimeout(() => {
			this.tooltip = false;
		}, this.tooltipDuration);
	}
}

export default toNative(CopyBtn);
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
