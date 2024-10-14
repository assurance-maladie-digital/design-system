<script lang="ts">
import { defineComponent } from 'vue'

import { config } from './config'
import { locales } from './locales'

import { customizable } from '@/mixins/customizable'
import { Refs } from '@/types'

import { mdiClose } from '@mdi/js'
import type { VDialog } from 'vuetify/components'

export default defineComponent({
	inheritAttrs: false,

	mixins: [customizable(config)],

	emits: ['cancel', 'confirm', 'update:modelValue'],

	props: {
		modelValue: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: undefined,
		},
		width: {
			type: String,
			default: '800px',
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

	data() {
		return {
			$refs: {} as Refs<{
				dialogContent: VDialog
			}>,
			closeIcon: mdiClose,
			locales,
			dialog: this.modelValue,
		}
	},

	watch: {
		async modelValue(newValue) {
			this.dialog = newValue
			if (this.dialog) {
				if ((await this.getSelectableElements())[0])
					(await this.getSelectableElements())[0].focus()
			}
		},
	},

	methods: {
		async getSelectableElements(): Promise<HTMLElement[]> {
			const parentNode = this.$refs.dialogContent?.$el // Is undefined when dialog is closed

			if (!parentNode) {
				return []
			}

			const elements = Array.from(
				parentNode.querySelectorAll(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
				)
			) as HTMLElement[]

			const filteredElements: HTMLElement[] = []

			elements.forEach((element) => {
				if (
					element.hasAttribute('disabled') ||
					element.getAttribute('aria-hidden')
				) {
					return
				}

				filteredElements.push(element)
			})

			return filteredElements
		},

		async handleFocus(e: KeyboardEvent): Promise<void> {
			const selectableElements = await this.getSelectableElements()

			const focused = selectableElements.findIndex(
				(el: HTMLElement) => el === e.target
			)

			const isOutside = focused === -1
			const lastElement = selectableElements.length - 1

			if (!e.shiftKey && (isOutside || focused === lastElement)) {
				e.preventDefault()
				selectableElements[0].focus()
			} else if (e.shiftKey && (isOutside || focused === 0)) {
				e.preventDefault()
				selectableElements[lastElement].focus()
			}
		},
	},
})
</script>

<template>
	<VDialog
		:model-value="dialog"
		v-bind="$attrs"
		:width="width"
		:persistent="persistent"
		:retain-focus="false"
		aria-modal="true"
		class="vd-dialog-box"
		@update:model-value="$emit('update:modelValue', false)"
		@keydown.tab="handleFocus"
	>
		<VCard
			v-bind="options.card"
			ref="dialogContent"
			id="dialogContent"
			:aria-labelledby="title ? title : 'dialogContent'"
		>
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

					<VBtn
						v-bind="options.confirmBtn"
						data-test-id="confirm-btn"
						@click="$emit('confirm')"
					>
						{{ confirmBtnText }}
					</VBtn>
				</slot>
			</div>
		</VCard>
	</VDialog>
</template>

<style lang="scss" scoped>
.v-card__title > * {
	line-height: 1em;
}

.v-btn--icon {
	color: rgba(0, 0, 0, 0.54);
	position: absolute;
	right: 24px;
}

h2 {
	word-break: break-word;
	text-wrap: balance;
}
</style>
