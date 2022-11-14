<template>
	<VDialog
		v-model="dialog"
		v-bind="$attrs"
		:width="width"
		:persistent="persistent"
		class="vd-dialog-box"
		aria-modal="true"
	>
		<VCard v-bind="options.card">
			<VCardTitle v-bind="options.cardTitle">
				<slot name="title">
					<h2
						v-if="title"
						class="text-h6 font-weight-bold"
						:aria-label="title"
					>
						{{ title }}
					</h2>
				</slot>

				<VSpacer v-bind="options.spacer" />

				<VBtn
					v-if="!persistent"
					v-bind="options.closeBtn"
					:aria-label="locales.closeBtn"
					@click="close"
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
					<VBtn
						v-bind="options.cancelBtn"
						@click="$emit('cancel')"
					>
						{{ cancelBtnText }}
					</VBtn>

					<VBtn
						v-bind="options.confirmBtn"
						@click="$emit('confirm')"
					>
						{{ confirmBtnText }}
					</VBtn>
				</slot>
			</div>
		</VCard>
	</VDialog>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import { mdiClose } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			value: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: undefined
			},
			width: {
				type: String,
				default: '800px'
			},
			cancelBtnText: {
				type: String,
				default: locales.cancelBtn
			},
			confirmBtnText: {
				type: String,
				default: locales.confirmBtn
			},
			hideActions: {
				type: Boolean,
				default: false
			},
			persistent: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component<DialogBox>({
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			dialog(value: boolean) {
				if (value) {
					this.selectDialogElements();
				}
			}
		}
	})
	export default class DialogBox extends MixinsDeclaration {
		locales = locales;

		closeIcon = mdiClose;

		get dialog(): boolean {
			return this.value;
		}

		set dialog(value: boolean) {
			this.$emit('change', value);
		}

		close(): void {
			this.$emit('change', false);
		}

		async selectDialogElements(): Promise<void> {
			await this.$nextTick();
			// eslint-disable-next-line no-undef
			const elements = document.querySelectorAll('a[href], button, input, textarea, select, details') as NodeListOf<HTMLElement>;
			if (!elements.length) {
				return;
			}
			return this.focusElements(elements);
		}

		// eslint-disable-next-line no-undef
		focusElements(els: NodeListOf<HTMLElement>): void {
			for (let i = 0; i < els.length; i++) {
				els[i].addEventListener('keydown', (e: KeyboardEvent) => {
					// if we use Tab key, we can focus on next element
					if (e.key === 'Tab' && !e.shiftKey) {
						e.preventDefault();
						if (i === els.length - 1) {
							els[0].focus();
						} else {
							els[i + 1].focus();
						}
					// if we use Tab key + shift, we can focus on previous element
					} else if (e.key === 'Tab' && e.shiftKey) {
						e.preventDefault();
						if (i === 1) {
							els[els.length - 1].focus();
						} else {
							els[i - 1].focus();
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.v-card__title > * {
		line-height: 1em;
	}
</style>
