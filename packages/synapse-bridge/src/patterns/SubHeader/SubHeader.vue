<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { customizable } from "@/mixins/customizable";
import { Widthable } from "@/mixins/widthable";

import DataListGroup from "@/patterns/DataListGroup";
import {
	DataListActionEvent,
	DataListGroupItems,
} from "@/patterns/DataListGroup/types";

import { mdiKeyboardBackspace } from "@mdi/js";
import HeaderLoading from '@/elements/HeaderLoading';
import { VSkeletonLoader } from 'vuetify/components/VSkeletonLoader';

export default defineComponent({
	components: {
		DataListGroup,
		HeaderLoading,
		VSkeletonLoader
	},
	mixins: [customizable(config), Widthable],
	props: {
		hideBackBtn: {
			type: Boolean,
			default: false,
		},
		backBtnText: {
			type: String,
			default: locales.backBtnText,
		},
		titleText: {
			type: String,
			default: undefined,
		},
		subTitleText: {
			type: String,
			default: undefined,
		},
		dataListGroupItems: {
			type: Array as PropType<DataListGroupItems | undefined>,
			default: undefined,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		renderHtmlValue: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["click:list-item", "back"],
	data() {
		return {
			backArrowIcon: mdiKeyboardBackspace,
			locales,
		};
	},
	computed: {
		fadeWhite(): string {
			return 'rgba(255, 255, 255, .7)';
		}
	},
	methods: {
		emitItemAction(eventValue: DataListActionEvent): void {
			this.$emit('click:list-item', eventValue);
		}
	}
});
</script>

<template>
	<VSheet
		v-bind="options.sheet"
		:style="widthStyles"
		class="vd-sub-header white--text py-6 px-8"
	>
		<slot name="back-btn">
			<VFadeTransition v-if="!hideBackBtn" mode="out-in">
				<VSkeletonLoader
					v-if="loading"
					max-height="28"
					type="button"
					color="secondary"
					class="vd-subheader-loading mb-4"
				/>
				<VBtn
					v-else
					v-bind="options.backBtn"
					class="vd-sub-header-back-btn mb-1"
					@click="$emit('back')"
				>
					<slot name="back-btn-icon">
						<VIcon class="mr-2">
							{{ backArrowIcon }}
						</VIcon>
					</slot>

					{{ backBtnText }}
				</VBtn>
			</VFadeTransition>
		</slot>

		<div class="vd-sub-header-content d-flex justify-space-between">
			<div
				class="vd-sub-header-informations d-flex flex-column flex-shrink-0 mr-10"
			>
				<slot name="title">
					<VFadeTransition mode="out-in">
						<HeaderLoading
							v-if="loading"
							width="300"
							height="2rem"
							color="secondary"
						/>

						<h2
							v-else-if="titleText"
							class="text-h5 font-weight-bold"
						>
							{{ titleText }}
						</h2>
					</VFadeTransition>
				</slot>

				<slot name="sub-title">
					<VFadeTransition v-if="subTitleText" mode="out-in">
						<HeaderLoading
							v-if="loading"
							class="mt-1"
							width="250"
							height="2rem"
							color="secondary"
						/>

						<p
							v-else
							class="text-h6 font-weight-bold mt-1 mb-0"
							:style="{ color: fadeWhite }"
						>
							{{ subTitleText }}
						</p>
					</VFadeTransition>
				</slot>

				<slot name="additional-informations" />
			</div>

			<slot name="right-content">
				<DataListGroup
					v-if="dataListGroupItems"
					:items="dataListGroupItems"
					:loading="loading"
					:render-html-value="renderHtmlValue"
					item-width="auto"
					class="flex-nowrap flex-shrink-0"
					@click:list-item="emitItemAction"
				/>
			</slot>
		</div>
	</VSheet>
</template>

<style lang="scss" scoped>
@use '@cnamts/design-tokens/dist/tokens';

.vd-sub-header {
	overflow-x: auto;
}

.vd-sub-header-back-btn {
	margin: 0 -6px;
}

.vd-data-list-group,
.vd-sub-header-informations {
	// Don't take all available space
	max-width: none;
}

.vd-data-list-group :deep(.vd-data-list) {
	max-width: 200px;

	// Apply margin right to avoid empty
	// space on smaller screens
	&:not(:last-child) {
		margin-right: 80px !important;
	}

	.vd-key {
		display: inline-block;
		font-size: 0.75rem !important;
	}

	.vd-data-list-item-label {
		color: rgba(255, 255, 255, 0.7) !important;
	}

	.vd-data-list-item-action-btn {
		color: #fff !important;
	}
}

.vd-subheader-loading :deep() {
	background: transparent;
	.v-skeleton-loader__button {
		margin: 0;
		min-height: 28px;
		height: auto;
		background: rgba(white, var(--v-border-opacity));
	}
}
</style>
