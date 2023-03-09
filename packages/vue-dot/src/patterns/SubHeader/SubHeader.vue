<template>
	<div class="vd-sub-header">
		<VSheet
			v-bind="options.background"
			class="white--text py-6 px-8"
		>
			<slot name="back-btn">
				<VFadeTransition
					v-if="!hideBackBtn"
					mode="out-in"
				>
					<VSkeletonLoader
						v-if="loading"
						height="28"
						type="button"
						width="100"
						class="mb-1"
						dark
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
				<div class="vd-sub-header-informations d-flex flex-column flex-shrink-0 mr-10">
					<slot name="title">
						<VFadeTransition mode="out-in">
							<HeaderLoading
								v-if="loading"
								width="300"
								height="2rem"
								dark
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
						<VFadeTransition
							v-if="subTitleText"
							mode="out-in"
						>
							<HeaderLoading
								v-if="loading"
								class="mt-1"
								width="250"
								height="2rem"
								dark
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
					<VThemeProvider dark>
						<DataListGroup
							v-if="dataListGroupItems"
							:items="dataListGroupItems"
							:loading="loading"
							:render-html-value="renderHtmlValue"
							item-width="auto"
							class="flex-nowrap flex-shrink-0"
							@click:list-item="emitItemAction"
						/>
					</VThemeProvider>
				</slot>
			</div>
		</VSheet>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';
	import { Widthable } from '../../mixins/widthable';

	import DataListGroup from '../../patterns/DataListGroup';
	import { DataListActionEvent, DataListGroupItems } from '../DataListGroup/types';

	import { mdiKeyboardBackspace } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			hideBackBtn: {
				type: Boolean,
				default: false
			},
			backBtnText: {
				type: String,
				default: locales.backBtnText
			},
			titleText: {
				type: String,
				default: undefined
			},
			subTitleText: {
				type: String,
				default: undefined
			},
			dataListGroupItems: {
				type: Array as PropType<DataListGroupItems | undefined>,
				default: undefined
			},
			loading: {
				type: Boolean,
				default: false
			},
			renderHtmlValue: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), Widthable);

	@Component({
		components: {
			DataListGroup
		}
	})
	export default class SubHeader extends MixinsDeclaration {
		backArrowIcon = mdiKeyboardBackspace;

		get fadeWhite(): string {
			return 'rgba(255, 255, 255, .7)';
		}

		emitItemAction(eventValue: DataListActionEvent): void {
			this.$emit('click:list-item', eventValue);
		}
	}
</script>

<style lang="scss" scoped>
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
			font-size: .75rem !important;
		}

		.vd-data-list-item-label {
			color: rgba(255, 255, 255, .7) !important;
		}

		.vd-data-list-item-action-btn {
			color: #fff !important;
		}
	}
</style>
