<template>
	<VDialog
		ref="vDialog"
		v-draggable="isDraggable"
		:value="dialog"
		:width="width"
		@input="$emit('update:dialog',$event)"
		@keydown.esc="close"
	>
		<VCard
			class="py-6 px-6"
			:class="{'isDraggable_vdialog': isDraggable}"
		>
			<VCardTitle
				class="pa-0 mb-5"
				:class="{'popup-header': isDraggable}"
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
				<!-- If array of ButtonActons object set from Parent //-->
				<template v-if="buttonActions">
					<ListButtonAction
						:button-actions="buttonActions"
					/>
				</template>
				<!-- If template //-->
				<template v-else>
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
				</template>
			</VCardActions>
			<!-- End of bloc button actions//-->
		</VCard>
	</VDialog>
</template>
<script lang="ts">
	import Component from 'vue-class-component';
	import Vue, { PropType } from 'vue';
	import { mdiClose, mdiPhone } from '@mdi/js';
	import { ButtonAction } from '../ListButtonAction/types';
	import { DialogBoxType } from './types';
	import { dragDialog, sizeOfDialog } from './config';

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
			 * Define props buttons actions by passing
			 * An array of object ButtonAction,
			 * If it not passing to Parent then template
			 * initialization is prioritized
			 * set value to [] => simple dialog with no button action
			 */
			buttonActions: {
				type: Array as PropType<Array<ButtonAction> | undefined>,
				required: false,
				default: () => undefined
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
			 * Dialog could be draggable,
			 * set to false by default
			 */
			isDraggable: {
				type: Boolean,
				default: false
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
		},
		directives: {
			draggable: {
				bind: (el, binding) => {
					if (binding.value) {
						dragDialog(el);
					}
				}
			}
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
			return sizeOfDialog(this.size);
		}
		/**
		 *  close the dialog
		 */
		close() {
			this.$emit('update:dialog', false);
		}
	}
</script>
<style lang="scss">
	.v-dialog.v-dialog--active .popup-header {
		cursor: grab;
	}

	.v-dialog.v-dialog--active .popup-header:active {
		cursor: grabbing;
	}

	.isDraggable_vdialog{
		width: inherit;
	}
</style>
