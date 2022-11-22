<template>
	<VDialog
		v-model="dialog"
		v-bind="$attrs"
		:width="width"
		:persistent="persistent"
		aria-modal="true"
		class="vd-dialog-box"
	>
		<VCard v-bind="options.card">
			<VCardTitle v-bind="options.cardTitle">
				<slot name="title">
					<h2
						v-if="title"
						class="text-h6 font-weight-bold"
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
	import { NodeListOf } from './types';

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
					this.setEventListeners();
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
			this.removeEventListeners();
		}

		async getSelectableElements(): Promise<NodeListOf<HTMLElement> | undefined> {
			await this.$nextTick();

			const elements = document.querySelectorAll<HTMLElement>('a[href], button, input, textarea, select, details');

			if (!elements.length) {
				return;
			}

			return elements;
		}

		async setEventListeners(): Promise<void> {
			const els = await this.getSelectableElements();

			if (!els) {
				return;
			}

			for (let i = 0; i < els.length; i++) {
				els[i].addEventListener('keydown', (e: KeyboardEvent) => {
					if (e.key !== 'Tab') {
						return;
					}

					e.preventDefault();

					if (!e.shiftKey) {
						if (i === els.length - 1) {
							els[0].focus();
						} else {
							els[i + 1].focus();
						}
					} else {
						if (i === 1) {
							els[els.length - 1].focus();
						} else {
							els[i - 1].focus();
						}
					}
				});
			}
		}

		removeEventListeners(): void {
			const els = document.querySelectorAll<HTMLElement>('a[href], button, input, textarea, select, details');

			if (!els.length) {
				return;
			}

			for (let i = 0; i < els.length; i++) {
				els[i].removeEventListener('keydown', () => {
					return;
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
