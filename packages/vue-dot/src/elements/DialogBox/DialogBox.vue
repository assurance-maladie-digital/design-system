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
			/**
			 * Show dialog or not
			 * Default value false, dialog not showing
			 */
			value: {
				type: Boolean,
				default: false
			},
			/** The title of the DialogBox */
			title: {
				type: String,
				default: undefined
			},
			/** The width of the DialogBox */
			width: {
				type: String,
				default: '800px'
			},
			/** The label of the cancel button*/
			cancelBtnText: {
				type: String,
				default: locales.cancelBtn
			},
			/** The label of the confirm button */
			confirmBtnText: {
				type: String,
				default: locales.confirmBtn
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false,
		// v-model
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class DialogBox extends MixinsDeclaration {
		closeIcon = mdiClose;

		/** Internal value */
		get dialog(): boolean {
			return this.value;
		}

		set dialog(value: boolean) {
			this.$emit('change', value);
		}

		/**
		 * Close the dialog
		 *
		 * @returns {void}
		 */
		close(): void {
			this.$emit('change', false);
		}
	}
</script>
