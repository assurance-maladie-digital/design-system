<template>
	<VList v-bind="options.list" :style="widthStyles" class="vd-file-list">
		<template v-for="(file, index) in files" :key="index">
			<VListItem v-bind="options.listItem">
				<template v-slot:prepend>
					<VIcon
						v-bind="options.listItemAvatarIcon"
						:color="getIconInfo(file.state).color"
					>
						{{ getIconInfo(file.state).icon }}
					</VIcon>
				</template>

				<VListItemTitle
					v-if="file.title"
					v-bind="options.listItemTitle"
					:class="[
						options.listItemTitle.class,
						getItemColor(file.state),
					]"
				>
					{{ file.title }}
				</VListItemTitle>

				<VListItemSubtitle
					v-if="file.optional"
					v-bind="options.listItemSubtitle"
				>
					{{ optionalFileText }}
				</VListItemSubtitle>

				<VListItemSubtitle
					v-if="file.name"
					v-bind="options.listItemSubtitle"
				>
					{{ file.name }}
				</VListItemSubtitle>

				<template v-slot:append>
					<VListItemAction v-bind="options.listItemAction">
						<VBtn
							v-if="file.state === FileStateEnum.INITIAL"
							v-bind="options.uploadBtn"
							:aria-label="locales.uploadFile"
							@click="$emit('upload', file.id)"
						>
							<VIcon v-bind="options.icon" :color="iconColor">
								{{ uploadIcon }}
							</VIcon>
						</VBtn>

						<VBtn
							v-if="file.state === FileStateEnum.ERROR"
							v-bind="options.retryBtn"
							:aria-label="locales.uploadFile"
							@click="$emit('retry', index)"
						>
							<VIcon v-bind="options.icon" :color="iconColor">
								{{ refreshIcon }}
							</VIcon>
						</VBtn>

						<VBtn
							v-if="
								showViewBtn &&
								file.state === FileStateEnum.SUCCESS
							"
							v-bind="options.viewFileBtn"
							:aria-label="locales.viewFile"
							@click="$emit('view-file', file)"
						>
							<VIcon v-bind="options.icon" :color="iconColor">
								{{ eyeIcon }}
							</VIcon>
						</VBtn>

						<VBtn
							v-if="file.state !== FileStateEnum.INITIAL"
							v-bind="options.deleteFileBtn"
							@click="$emit('delete-file', index)"
						>
							<VIcon v-bind="options.icon" :color="iconColor">
								{{ deleteIcon }}
							</VIcon>
						</VBtn>
					</VListItemAction>
				</template>
			</VListItem>

			<VDivider
				v-if="showDivider(index)"
				:key="'divider-' + index"
				v-bind="options.divider"
			/>
		</template>
	</VList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { FileItem, IconInfo } from "./types";

import { FileStateEnum } from "./FileStateEnum";

import { customizable } from "../../mixins/customizable";
import { Widthable } from "../../mixins/widthable";

import { useTheme } from "vuetify";

import {
	mdiRefresh,
	mdiEye,
	mdiDelete,
	mdiAlertCircle,
	mdiCheckCircle,
	mdiUpload,
	mdiFile,
} from "@mdi/js";

const Props = {
	files: {
		type: Array as PropType<FileItem[]>,
		required: true,
	},
	showViewBtn: {
		type: Boolean,
		default: false,
	},
	hideLastDivider: {
		type: Boolean,
		default: false,
	},
	optionalFileText: {
		type: String,
		default: locales.optional,
	},
};

export default defineComponent({
	mixins: [Props, customizable(config), Widthable],
	props: {
		...Props,
	},
	data() {
		return {
			locales,
			FileStateEnum,

			refreshIcon: mdiRefresh,
			eyeIcon: mdiEye,
			deleteIcon: mdiDelete,
			uploadIcon: mdiUpload,
		};
	},
	computed: {
		iconColor() {
			const theme = useTheme();

			return theme.current.value.dark ? "grey-lighten-40" : "grey";
		},
	},
	methods: {
		getIconInfo(state: FileStateEnum): IconInfo {
			switch (state) {
				case FileStateEnum.ERROR: {
					return {
						icon: mdiAlertCircle,
						color: "error",
					};
				}

				case FileStateEnum.SUCCESS: {
					return {
						icon: mdiCheckCircle,
						color: "success",
					};
				}

				default: {
					return {
						icon: mdiFile,
						color: "grey",
					};
				}
			}
		},

		getItemColor(state: string): string | undefined {
			if (state === FileStateEnum.SUCCESS) {
				return;
			}

			return "grey--text";
		},

		showDivider(index: number): boolean {
			if (this.hideLastDivider) {
				return index + 1 !== this.files.length;
			}

			return true;
		},
	},
});
</script>

<style lang="scss" scoped>
.v-list-item__prepend > .v-icon,
.v-list-item__append > .v-icon {
	opacity: 1 !important;
}
</style>
