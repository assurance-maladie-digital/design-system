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

	// TODO: sort imports
	import { AxiosResponse } from 'axios';

	import contentDisposition from 'content-disposition';

	import { downloadFile } from '../../functions/downloadFile';

	import { mdiDownload, mdiFile } from '@mdi/js';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable, Options } from '../../mixins/customizable';

	import deepMerge from 'deepmerge';
	import { mapActions } from 'vuex';

	import { NotificationObj } from '../../modules/notification/types';

	const Props = Vue.extend({
		props: {
			filePromise: {
				type: Promise as PropType<Promise<AxiosResponse<string>>>,
				required: true
			},
			text: { // TODO?
				type: String,
				default: undefined
			},
			notification: { // TODO
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
	 * TODO: DownloadBtn is a component that download a file from
	 * a content disposition header string
	 */
	@Component({
		inheritAttrs: false,
		methods: mapActions('notification', ['addNotification'])
	})
	export default class DownloadBtn extends MixinsDeclaration {
		addNotification!: (obj: NotificationObj) => void;

		locales = locales;

		downloadIcon = mdiDownload;
		fileIcon = mdiFile;

		loading = false; // TODO

		/**
		 * Compute the options for the VBtn
		 * (Merge options and binded attributes)
		 *
		 * @returns {Options} Computed options
		 */
		get btnOptions(): Options {
			// Merge btn options (custom or default) with
			// directly binded attributes (theses attributes
			// will override 'options.btn')
			return deepMerge<Options>(this.options.btn, this.$attrs);
		}

		download(): void { // TODO
			this.loading = true; // TODO

			this.filePromise
				.then((response) => {
					const contentDispositionHeader = response.headers['content-disposition'] as string;

					const filename = contentDisposition.parse(contentDispositionHeader).parameters.filename;

					downloadFile(response.data, filename, 'application/pdf'); // TODO type!

					if (this.notification) {
						const message = typeof this.notification === 'boolean' ? locales.downloadSuccess : this.notification as string;

						const notification: NotificationObj = {
							type: 'success',
							message
						};

						this.addNotification(notification);
					}
				})
				// TODO: catch
				.finally(() => this.loading = false);
		}
	}
</script>
