<template>
	<!--
		Wrap everything in a label, so when you click it,
		it will trigger the <input>
	-->
	<label
		v-ripple="!noRipple"
		class="vd-file-upload d-block pa-4"
		:class="[
			{
				'dragover': dragover,
				'dark-mode': $vuetify.theme.dark
			},
			colors.label
		]"
		@dragover.prevent="dragover = true"
		@dragleave="dragover = false"
		@drop.prevent="dropHandler"
	>
		<!-- The actual <input>, masked with CSS -->
		<input
			ref="vdInputEl"
			type="file"
			:disabled="disabled"
			:multiple="multiple"
			:accept="computedAccept"
			class="vd-file-upload-input"
			@change="inputValueChanged"
		>

		<!--
			The placeholder is what will be shown as the FileUpload.
			Every part is in a slot so it can be translated by the developer
		-->
		<slot name="placeholder">
			<span class="vd-file-upload-placeholder">
				<slot name="icon">
					<VIcon
						v-bind="options.uploadIcon"
					>
						{{ uploadIcon }}
					</VIcon>
				</slot>

				<span
					class="mt-1 font-weight-medium"
					:class="colors.multiple"
				>
					<slot
						name="action-text"
						:multiple="multiple"
					>
						{{ multiple ? 'Placez vos fichiers ici' : 'Placez votre fichier ici' }}
					</slot>
				</span>

				<span
					class="mb-2"
					:class="colors.info"
				>
					<slot name="or">
						{{ locales.or }}
					</slot>
				</span>

				<!--
					mouseover & mouseleave are used to apply
					a specific Vuetify class in hover state
				-->
				<span
					class="vd-file-upload-btn primary white--text text-uppercase py-2 px-4 elevation-2"
					:class="{ 'primary lighten-1': hover }"
					@mouseover="hover = true"
					@mouseleave="hover = false"
				>
					<slot name="button-text">
						{{ locales.chooseFile }}
					</slot>
				</span>

				<span
					:class="colors.info"
					class="mt-4 body-2 font-weight-regular"
				>
					<slot
						name="info-text"
						:maxSize="maxSizeReadable"
						:extensions="extensions"
					>
						{{ locales.infoText(maxSizeReadable, extensions) }}
					</slot>
				</span>
			</span>
		</slot>
	</label>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';
	import { config } from './config';

	import { EventsMapping } from './mixins/eventsMapping';

	import { customizable } from '../../mixins/customizable';

	import { mdiCloudUpload } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/** Disable v-ripple on the component */
			noRipple: {
				type: Boolean,
				default: false
			},
			/** Disable the component */
			disabled: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), EventsMapping);

	/**
	 * FileUpload is a component that enhance the default HTML
	 * file input element
	 */
	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class FileUpload extends MixinsDeclaration {
		// Locales
		locales = locales;

		// Icons
		uploadIcon = mdiCloudUpload;

		/** The list of accepted files */
		files!: File[];
		/** For specific styles on hover */
		hover!: boolean;
		/** For specific styles on hover with a file (dragover) */
		dragover!: boolean;
		/** Used to not trigger "success" events when there is an error */
		error!:boolean;
		/**
		 * Get the different colors
		 * depending on theme (light or dark)
		 */
		get colors() {
			const dark = this.$vuetify.theme.dark;

			return {
				label: dark ? 'white--text' : 'primary--text',
				multiple: dark ? 'white--text' : 'black--text',
				info: 'grey--text ' + (dark ? 'text--lighten-1' : 'text--darken-1')
			};
		}
	}
</script>

<style lang="scss" scoped>
	.vd-file-upload {
		width: 100%;
		max-width: 550px;
		cursor: pointer;
		position: relative;
		border: 1px dashed;
		transition: background .25s;

		&:hover,
		a:focus,
		&.dragover {
			background: #f5f5f5;
		}

		&.dark-mode {
			&:hover,
			a:focus,
			&.dragover {
				background: #303030;
			}
		}
	}

	.vd-file-upload-placeholder {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.vd-file-upload-input {
		position: absolute;
		width: 1px;
		height: 1px;
		white-space: nowrap;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
	}

	.vd-file-upload-btn {
		border-radius: 4px;
		transition: background .25s;
	}
</style>
