<template>
	<VDialog
		:value="dialog"
		:width="width"
		@input="$emit('update:dialog', $event)"
	>
		<VCard class="py-6 px-6">
			<VCardTitle class="pa-0 mb-5">
				<slot name="title">
					<h2 class="title font-weight-bold">
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
				<slot name="footer">
					<VBtn
						class="ml-6 px-5"
						@click="$emit('cancel')"
					>
						{{ locales.cancelBtn }}
					</VBtn>

					<VBtn
						color="primary"
						class="ml-6 px-5"
						@click="$emit('validate')"
					>
						{{ locales.validateBtn }}
					</VBtn>
				</slot>
			</VCardActions>
		</VCard>
	</VDialog>
</template>
<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';
	import { locales } from './locales';
	import { mdiClose, mdiPhone } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/**
			 *  Show dialog or not
			 *  Default value false, dialog not showing
			 */
			dialog: {
				type: Boolean,
				default: () => false
			},
			/**
			 * setting the title of modal dynamically
			 */
			title: {
				type: String,
				default: () => 'Dialog Box'
			},
			/**
			 * Define the width of the dialogBox
			 */
			width: {
				type: String,
				default: () => '900'
			}
		}
	});

	@Component
	export default class DialogBox extends Props {
		closeIcon = mdiClose; // default icon
		locales = locales;

		/**
		 *  close the dialog
		 */
		close() {
			this.$emit('update:dialog', false);
		}
	}
</script>
