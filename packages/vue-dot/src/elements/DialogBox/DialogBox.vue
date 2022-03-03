<template>
	<VDialog
		v-model="dialog"
		v-bind="$attrs"
		:width="width"
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
					v-bind="options.closeBtn"
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
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class DialogBox extends MixinsDeclaration {
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
	}
</script>
