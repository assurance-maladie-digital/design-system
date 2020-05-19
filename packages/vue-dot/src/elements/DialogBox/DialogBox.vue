<template>
	<VDialog
		v-model="dialog"
		v-bind="$attrs"
		:width="width"
	>
		<VCard class="py-6 px-6">
			<VCardTitle class="pa-0 mb-5">
				<slot name="title">
					<h2
						v-if="title"
						class="title font-weight-bold"
					>
						{{ title }}
					</h2>
				</slot>

				<VSpacer />

				<VBtn
					icon
					@click="close"
				>
					<VIcon>
						{{ closeIcon }}
					</VIcon>
				</VBtn>
			</VCardTitle>

			<VCardText>
				<slot />
			</VCardText>

			<VCardActions class="pa-0">
				<VSpacer />

				<slot name="actions">
					<VBtn
						color="primary"
						text
						@click="$emit('cancel')"
					>
						{{ locales.cancel }}
					</VBtn>

					<VBtn
						color="primary"
						class="ml-6"
						@click="$emit('confirm')"
					>
						{{ locales.confirm }}
					</VBtn>
				</slot>
			</VCardActions>
		</VCard>
	</VDialog>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { locales } from './locales';
	import { mdiClose } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/**
			 *  Show dialog or not
			 *  Default value false, dialog not showing
			 */
			value: {
				type: Boolean,
				default: false
			},
			/**
			 * setting the title of modal dynamically
			 */
			title: {
				type: String,
				default: undefined
			},
			/**
			 * Define the width of the dialogBox
			 */
			width: {
				type: String,
				default: '900'
			}
		}
	});

	@Component({
		inheritAttrs: false,
		// v-model
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class DialogBox extends Props {
		closeIcon = mdiClose;
		locales = locales;

		/** get and set computed properties: value, for the dialog */
		get dialog() {
			return this.value;
		}

		set dialog(dialog: boolean) {
			this.$emit('change', dialog);
		}

		/**
		 *  close the dialog
		 */
		close() {
			this.$emit('change', false);
		}
	}
</script>
