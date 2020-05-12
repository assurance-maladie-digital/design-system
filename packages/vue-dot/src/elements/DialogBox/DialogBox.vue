<template>
	<VDialog
		:value="dialog"
		width="743"
		@input="$emit('update:dialog',$event)"
		@keydown.esc="close"
	>
		<VCard class="py-6 px-6">
			<VCardTitle class="pa-0 mb-5">
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
							@click="close"
						>
							Fermer
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
	const Props = Vue.extend({
		props: {
			/** The v-model item */
			item: {
				type: Object as PropType<DialogBoxType>,
				required: false
			},
			/**
			 * Define props buttons actions by passing
			 * An array of object ButtonAction,
			 * If it not passing to Parent then template
			 * initialization is prioritized
			 */
			buttonActions: {
				type: Array as PropType<Array<ButtonAction>>,
				required: false
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
			 * setting the title of modal dynamicly
			 */
			title: {
				type: String,
				default: () => 'Dialog Box'
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
		 *  close the dialog
		 */
		close() {
			this.$emit('update:dialog', false);
		}
	}
</script>
