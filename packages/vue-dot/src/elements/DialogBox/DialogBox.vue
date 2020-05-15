<template>
	<VDialog
		ref="vDialog"
		:value="dialog"
		:width="width"
		@input="$emit('update:dialog',$event)"
		@keydown.esc="close"
	>
		<VCard
			class="py-6 px-6"
		>
			<VCardTitle
				class="pa-0 mb-5"
			>
				<h2 class="title font-weight-bold">
					{{ title }}
				</h2>

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
				<!-- Bloc of content  //-->
				<VContainer>
					<slot
						name="content"
						:itemProps="item"
					/>
				</VContainer>
				<!-- End of bloc //-->
			</VCardText>
			<!-- Block of button actions //-->
			<VCardActions class="pa-0">
				<VSpacer />
				<!-- button actions //-->
				<slot
					name="footer"
				>
					<VBtn
						color="normal"
						class="ml-6 px-5"
						@click="$emit('cancel')"
					>
						ANNULER
					</VBtn>

					<VBtn
						color="primary"
						class="ml-6 px-5"
						@click="$emit('validate')"
					>
						VALIDER
					</VBtn>
				</slot>
			</VCardActions>
			<!-- End of bloc button actions//-->
		</VCard>
	</VDialog>
</template>
<script lang="ts">
	import Component from 'vue-class-component';
	import Vue, { PropType } from 'vue';
	import { mdiClose, mdiPhone } from '@mdi/js';
	import { DialogBoxType } from './types';
	import { sizeConfig } from './config';

	const Props = Vue.extend({
		props: {
			/** The v-model item */
			item: {
				type: Object as PropType<DialogBoxType | {}>,
				required: false,
				default: () => {
				}
			},
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
			 * Define the size|width of the dialogBox
			 */
			size: {
				type: String,
				default: () => 'medium'
			}
		}
	});
	@Component<DialogBox>({
		model: {
			prop: 'item',
			event: 'change'
		}
	})
	export default class DialogBox extends Props {
		closeIcon = mdiClose; // default icon
		phoneIcon = mdiPhone; // default icon for iphone
		/**
		 *  return the size
		 *  of the dialog
		 */
		get width() {
			return this.sizeOfDialog(this.size);
		}

		/**
		 * function to evaluate the size of
		 * the dialog. size could be:
		 * x-small | small | medium | large | x-large
		 * or pixel format
		 */
		sizeOfDialog(entry: string) {
			let parseStr = sizeConfig.filter((el) => el.name === entry);
			if (parseStr.length > 0) {
				entry = parseStr[0].value.toString();
			}
			return entry;
		}

		/**
		 *  close the dialog
		 */
		close() {
			this.$emit('update:dialog', false);
		}
	}
</script>
