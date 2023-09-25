<template>
	<VDialog
		v-model="dialog"
		v-bind="$attrs"
		:width="width"
		:persistent="persistent"
		aria-modal="true"
		class="vd-dialog-box"
	>
		<VCard v-bind="options.card" ref="dialogContent">
			<VCardTitle v-bind="options.cardTitle">
				<slot name="title">
					<h2 v-if="title" class="text-h6 font-weight-bold">
						{{ title }}
					</h2>
				</slot>

				<VSpacer v-bind="options.spacer" />

				<VBtn
					v-if="!persistent"
					v-bind="options.closeBtn"
					:aria-label="locales.closeBtn"
					@click="$emit('update:modelValue', false)"
				>
					<VIcon v-bind="options.icon">
						{{ closeIcon }}
					</VIcon>
				</VBtn>
			</VCardTitle>

			<slot />

			<div
				v-if="!hideActions"
				v-bind="options.actionsCtn"
				class="vd-dialog-box-actions-ctn"
			>
				<VSpacer v-bind="options.actionsSpacer" />

				<slot name="actions">
					<VBtn v-bind="options.cancelBtn" @click="$emit('cancel')">
						{{ cancelBtnText }}
					</VBtn>

					<VBtn v-bind="options.confirmBtn" @click="$emit('confirm')">
						{{ confirmBtnText }}
					</VBtn>
				</slot>
			</div>
		</VCard>
	</VDialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { customizable } from "../../mixins/customizable";
import { Refs } from "../../types";

import { mdiClose } from "@mdi/js";

const Props = {
	props: {
		value: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: undefined,
		},
		width: {
			type: String,
			default: "800px",
		},
		cancelBtnText: {
			type: String,
			default: locales.cancelBtn,
		},
		confirmBtnText: {
			type: String,
			default: locales.confirmBtn,
		},
		hideActions: {
			type: Boolean,
			default: false,
		},
		persistent: {
			type: Boolean,
			default: false,
		},
	},
};

export default defineComponent({
	inheritAttrs: false,
	mixins: [customizable(config)],
	...Props,
	data() {
		return {
			$refs: {} as Refs<{
				dialogContent: HTMLElement;
			}>,
			dialog: this.value,
			closeIcon: mdiClose,
			locales,
		};
	},
	watch: {
		dialog() {
			this.setEventListeners();
		},
	},
	methods: {
		async getSelectableElements(): Promise<HTMLElement[]> {
			await this.$nextTick();

			const elements = Array.from(
				this.$refs.dialogContent.querySelectorAll(
					"button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
				)
			) as HTMLElement[];

			const filteredElements: HTMLElement[] = [];

			elements.forEach((element) => {
				if (
					element.hasAttribute("disabled") ||
					element.getAttribute("aria-hidden")
				) {
					return;
				}

				filteredElements.push(element);
			});

			return filteredElements;
		},

		async setEventListeners(): Promise<void> {
			const elements = await this.getSelectableElements();

			if (!elements.length) {
				return;
			}

			for (let i = 0; i < elements.length; i++) {
				const setFocus = (e: KeyboardEvent) => {
					if (e.key !== "Tab") {
						return;
					}

					e.preventDefault();

					if (!e.shiftKey) {
						if (i === elements.length - 1) {
							elements[0].focus();
						} else {
							elements[i + 1].focus();
						}
					} else {
						if (i === 0) {
							elements[elements.length - 1].focus();
						} else {
							elements[i - 1].focus();
						}
					}
				};

				if (!this.dialog) {
					removeEventListener("keydown", setFocus);

					return;
				}

				elements[i].addEventListener("keydown", setFocus);
			}
		},
	},
});
</script>

<style lang="scss" scoped>
.v-card__title > * {
	line-height: 1em;
}
.v-btn--icon {
	color: rgba(0,0,0,.54);
	position: absolute;
	right: 24px;
}
</style>
