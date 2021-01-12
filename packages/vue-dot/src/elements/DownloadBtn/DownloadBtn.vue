<template>
	<VBtn
		v-bind="btnOptions"
		@click.native="download"
	>
		<VIcon
			v-if="showFileIcon"
			v-bind="options.fileIcon"
		>
			{{ fileIcon }}
		</VIcon>

		<span
			v-if="text"
			v-bind="options.text"
		>
			{{ text }}
		</span>

		<VIcon v-bind="options.downloadIcon">
			{{ downloadIcon }}
		</VIcon>
	</VBtn>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { AxiosResponse } from 'axios';

	import contentDisposition from 'content-disposition';

	import { downloadFile } from '../../functions/downloadFile';

	import { mdiCheck, mdiDownload, mdiFile } from '@mdi/js';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable, Options } from '../../mixins/customizable';

	import deepMerge from 'deepmerge';
	import { mapActions } from 'vuex';
	import { NotificationObj } from '../../modules/notification';

	const Props = Vue.extend({
		props: {
			text: {
				type: String,
				default: null
			},
			filePromise: {
				type: Promise as PropType<Promise<AxiosResponse<string>>>,
				required: true
			},
			notification: {
				type: [Boolean, String],
				default: locales.downloadSuccess
			},
			showFileIcon: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * DownloadBtn is a component that download a file from a
	 * content disposition header string
	 */
	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'notify'
		])
	})
	export default class DownloadBtn extends MixinsDeclaration {
		notify!: (obj: NotificationObj) => void;

		downloadIcon = mdiDownload;
		successIcon = mdiCheck;
		fileIcon = mdiFile;

		loading = false;

		locales = locales;

		/**
		 * Compute the options for the VTextField
		 * (Merge options and binded attributes)
		 *
		 * @returns {Options} Computed options
		 */
		get btnOptions(): Options {
			// Merge textField options (custom or default) with
			// directly binded attributes (theses attributes
			// will override 'options.textField')
			return deepMerge<Options>(this.options.btn, this.$attrs);
		}

		download(): void {
			this.loading = true;

			this.filePromise
			.then((response) => {
				const contentDispositionHeader = response.headers['content-disposition'] as string;

				const filename = contentDisposition.parse(contentDispositionHeader).parameters.filename;

				downloadFile(response.data, filename, 'application/pdf');

				if (this.notification) {
					const message = typeof this.notification === 'boolean' ? locales.downloadSuccess : this.notification as string;

					const notification: NotificationObj = {
						type: 'success',
						icon: this.successIcon,
						message
					};

					this.notify(notification);
				}
			})
			.finally(() => this.loading = false);
		}
	}
</script>
