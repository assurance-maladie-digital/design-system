<template>
	<VBtn
		v-bind="btnOptions"
		:loading="state === STATE_ENUM.pending"
		@click.native="download"
	>
		<slot name="icon">
			<VIcon v-bind="options.icon">
				{{ downloadIcon }}
			</VIcon>
		</slot>

		<slot />
	</VBtn>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import deepMerge from 'deepmerge';
	import { mapActions } from 'vuex';

	import { AxiosResponse } from 'axios';
	import contentDisposition from 'content-disposition';

	import { mdiDownload } from '@mdi/js';

	import { downloadFile } from '../../functions/downloadFile';

	import { customizable, Options } from '../../mixins/customizable';
	import { NotificationObj } from '../../modules/notification/types';

	import { STATE_ENUM } from '../../constants/enums/StateEnum';
	import { IndexedObject } from '../../types';
	import { FileInfo } from './types';

	import { config } from './config';
	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			filePromise: {
				type: Function as PropType<() => Promise<AxiosResponse<Blob>>>,
				required: true
			},
			notification: {
				type: [Boolean, String],
				default: locales.downloadSuccess
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * DownloadBtn is a component that allows to
	 * download a file from a network request
	 */
	@Component({
		inheritAttrs: false,
		methods: mapActions('notification', ['addNotification'])
	})
	export default class DownloadBtn extends MixinsDeclaration {
		addNotification!: (obj: NotificationObj) => void;

		locales = locales;
		STATE_ENUM = STATE_ENUM;

		downloadIcon = mdiDownload;

		state = STATE_ENUM.idle;

		/**
		 * Compute the options for the VBtn
		 * (Merge options and binded attributes)
		 *
		 * @returns {Options} Computed options
		 */
		get btnOptions(): Options {
			// Merge btn options (custom or default) with directly binded
			// attributes (theses attributes will override 'options.btn')
			return deepMerge<Options>(this.options.btn, this.$attrs);
		}

		getFileInfo(headers: IndexedObject): FileInfo {
			const contentType = headers['Content-Type'];
			const contentDispositionHeader = headers['Content-Disposition'] as string;
			const filename = contentDisposition.parse(contentDispositionHeader).parameters.filename;

			return {
				name: filename,
				type: contentType
			};
		}

		notifyUser(): void {
			const message = typeof this.notification === 'boolean' ? locales.downloadSuccess : this.notification as string;

			this.addNotification({
				type: 'success',
				message
			});
		}

		async download(): Promise<void> {
			this.state = STATE_ENUM.pending;

			try {
				const { data, headers } = await this.filePromise();
				const { name, type } = this.getFileInfo(headers);

				downloadFile(data, name, type);

				this.state = STATE_ENUM.resolved;

				if (this.notification) {
					this.notifyUser();
				}
			} catch (error) {
				this.$emit('error', error);
				this.state = STATE_ENUM.rejected;
			}
		}
	}
</script>
