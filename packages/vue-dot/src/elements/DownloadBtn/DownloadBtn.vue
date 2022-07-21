<template>
	<VBtn
		v-bind="btnOptions"
		:loading="state === StateEnum.PENDING"
		class="vd-download-btn"
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

	import dayjs from 'dayjs';
	import deepMerge from 'deepmerge';
	import { mapActions } from 'vuex';

	import { AxiosResponse } from 'axios';
	import { parse } from 'content-disposition-header';

	import { mdiDownload } from '@mdi/js';

	import { downloadFile } from '../../functions/downloadFile';

	import { customizable, Options } from '../../mixins/customizable';
	import { NotificationObj } from '../../modules/notification/types';

	import { StateEnum } from '../../constants/enums/StateEnum';
	import { IndexedObject } from '../../types';
	import { ContentHeadersEnum } from './ContentHeadersEnum';
	import { FileInfo } from './types';

	import { config } from './config';
	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			filePromise: {
				type: Function as PropType<() => Promise<AxiosResponse<Blob>>>,
				required: true
			},
			fallbackFilename: {
				type: String,
				default: undefined
			},
			notification: {
				type: [Boolean, String],
				default: locales.downloadSuccess
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false,
		methods: mapActions('notification', ['addNotification'])
	})
	export default class DownloadBtn extends MixinsDeclaration {
		addNotification!: (obj: NotificationObj) => void;

		locales = locales;
		StateEnum = StateEnum;

		downloadIcon = mdiDownload;

		state = StateEnum.IDLE;

		get btnOptions(): Options {
			return deepMerge<Options>(this.options.btn, this.$attrs);
		}

		getTimestampFilename(): string {
			return dayjs().format('YYYY-MM-DD - HH[h]mm[m]ss[s]');
		}

		getFileInfo(headers: IndexedObject): FileInfo {
			const contentType = headers[ContentHeadersEnum.TYPE];
			const contentDispositionHeader = headers[ContentHeadersEnum.DISPOSITION] as string;
			let filename: string | null = null;

			try {
				filename = parse(contentDispositionHeader).parameters.filename;
			} catch {
				filename = this.fallbackFilename || this.getTimestampFilename();
			}

			return {
				name: filename as string,
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
			this.state = StateEnum.PENDING;

			try {
				const { data, headers } = await this.filePromise();
				const { name, type } = this.getFileInfo(headers);

				downloadFile(data, name, type);

				this.state = StateEnum.RESOLVED;

				if (this.notification) {
					this.notifyUser();
				}
			} catch (error) {
				this.$emit('error', error);
				this.state = StateEnum.REJECTED;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vd-download-btn :deep() {
		.v-btn__content {
			flex-wrap: wrap;
		}

		.v-icon {
			flex: none;
		}
	}
</style>
