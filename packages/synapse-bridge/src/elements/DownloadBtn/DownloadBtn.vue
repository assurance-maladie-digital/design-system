<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import dayjs from "dayjs";
import deepMerge from "deepmerge";
import { mapActions } from "vuex";

import { AxiosResponse } from "axios";
import { parse } from "content-disposition-header";

import { mdiDownload } from "@mdi/js";

import { downloadFile } from "@/functions/downloadFile";

import { customizable, Options } from "@/mixins/customizable";

import { StateEnum } from "@/constants/enums/StateEnum";
import { IndexedObject } from "@/types";
import { ContentHeadersEnum } from "./ContentHeadersEnum";
import { FileInfo } from "./types";

import { config } from "./config";
import { locales } from "./locales";

export default defineComponent({
	inheritAttrs: false,
	mixins: [customizable(config)],
	emits: ["error"],
	props: {
		filePromise: {
			type: Function as PropType<() => Promise<AxiosResponse<Blob>>>,
			required: true,
		},
		fallbackFilename: {
			type: String,
			default: undefined,
		},
		notification: {
			type: [Boolean, String],
			default: locales.downloadSuccess,
		},
	},
	data() {
		return {
			locales,
			StateEnum,
			downloadIcon: mdiDownload,
			state: StateEnum.IDLE,
		};
	},
	computed: {
		btnOptions(): Options {
			return deepMerge<Options>(this.options.btn, this.$attrs);
		},
	},
	methods: {
		...mapActions('notification', ['addNotification']),
		getTimestampFilename(): string {
			return dayjs().format("YYYY-MM-DD - HH[h]mm[m]ss[s]");
		},
		getFileInfo(headers: IndexedObject): FileInfo {
			const contentType = headers[ContentHeadersEnum.TYPE];
			const contentDispositionHeader = headers[
				ContentHeadersEnum.DISPOSITION
			] as string;
			let filename: string | null = null;
			try {
				filename = parse(contentDispositionHeader).parameters.filename;
			} catch {
				filename = this.fallbackFilename || this.getTimestampFilename();
			}
			return {
				name: filename as string,
				type: contentType,
			};
		},
		notifyUser(): void {
			const message =
				typeof this.notification === "boolean"
					? locales.downloadSuccess
					: (this.notification as string);
			this.addNotification({
				type: "success",
				message,
			});
		},
		async download(): Promise<void> {
			this.state = StateEnum.PENDING;

			try {
				const { data, headers } = await this.filePromise();
				const { name, type } = this.getFileInfo(
					headers as IndexedObject
				);
				downloadFile(data, name, type);
				this.state = StateEnum.RESOLVED;
			} catch (error) {
				this.$emit("error", error);
				this.state = StateEnum.REJECTED;
				return;
			}
			if (this.notification) {
				this.notifyUser();
			}
		},
	},
});
</script>

<template>
	<VBtn
		v-bind="btnOptions"
		:loading="state === StateEnum.PENDING"
		class="vd-download-btn"
		data-testid="download-btn"
		@click="download"
	>
		<slot name="icon">
			<VIcon v-bind="options.icon">
				{{ downloadIcon }}
			</VIcon>
		</slot>

		<slot />
	</VBtn>
</template>

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
