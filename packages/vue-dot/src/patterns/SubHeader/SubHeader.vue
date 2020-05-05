<template>
	<div class="vd-sub-header secondary white--text py-6 px-8">
		<slot name="back-btn">
			<v-fade-transition
				v-if="!hideBackBtn"
				mode="out-in"
			>
				<VSkeletonLoader
					v-if="loading"
					height="28"
					type="button"
					width="100"
					dark
				/>

				<VBtn
					v-else
					v-bind="options.backBtn"
					@click="$emit('back')"
				>
					<slot name="back-btn-icon">
						<VIcon class="mr-2">
							{{ backArrowIcon }}
						</VIcon>
					</slot>

					{{ backBtnText }}
				</VBtn>
			</v-fade-transition>
		</slot>

		<VLayout
			v-bind="options.contentLayout"
			class="vd-sub-header-content"
		>
			<VLayout
				class="vd-sub-header-informations mt-1"
				column
			>
				<slot name="title">
					<v-fade-transition
						mode="out-in"
					>
						<HeaderLoading
							v-if="loading"
							width="300"
							height="2rem"
							dark
						/>

						<h2
							v-else
							class="headline font-weight-bold"
						>
							{{ titleText }}
						</h2>
					</v-fade-transition>
				</slot>

				<slot name="sub-title">
					<v-fade-transition
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
							class="title font-weight-bold mt-1 mb-0"
							:style="{
								color: fadeWhite
							}"
						>
							{{ subTitleText }}
						</p>
					</v-fade-transition>
				</slot>

				<slot name="additional-informations" />
			</VLayout>

			<slot name="right-content">
				<VLayout
					v-if="dataLists"
					v-bind="options.dataListsLayout"
					class="vd-sub-header-data-list mt-n3 mx-n2"
				>
					<DataList
						v-for="(dataList, index) in dataLists"
						:key="'vd-sub-header-data-list' + index"
						:loading="loading"
						:list-title="dataList.title"
						:list="dataList.items"
						:list-loading="dataList.itemsLoading"
						:label-color="fadeWhite"
						dark
						title-class="subtitle-1 font-weight-bold mb-2 mt-3"
						width="auto"
						column
					/>
				</VLayout>
			</slot>
		</VLayout>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';
	import { IDataList } from './types';

	import { customizable } from '../../mixins/customizable';

	import DataList from '../../elements/DataList';

	import { mdiKeyboardBackspace } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/** Hide the back button */
			hideBackBtn: {
				type: Boolean,
				default: false
			},
			/** Customize the text inside back button */
			backBtnText: {
				type: String,
				default: locales.backBtnText
			},
			/** Title of the SubHeader */
			titleText: {
				type: String,
				required: true
			},
			/** Sub-title of the SubHeader */
			subTitleText: {
				type: String,
				default: undefined
			},
			/** List of DataList components in column mode */
			dataLists: {
				type: Array as PropType<IDataList[]>,
				default: undefined
			},
			/** Loading mode */
			loading: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * SubHeader is a component that displays
	 * informations below the main header
	 */
	@Component({
		components: {
			DataList
		}
	})
	export default class SubHeader extends MixinsDeclaration {
		backArrowIcon = mdiKeyboardBackspace;

		/** Semi-transparent white */
		get fadeWhite(): string {
			return 'rgba(255, 255, 255, .7)';
		}
	}
</script>

<style lang="scss" scoped>
	.vd-sub-header {
		width: 100%;

		::v-deep {
			.v-skeleton-loader__heading {
				width: 100%;
				height: 100%;
				border-radius: 20px;
			}
		}
	}

	.vd-sub-header-informations {
		flex: none;
		width: 310px;
		margin-right: 8px; // Avoid "contact" with right part
	}

	.vd-sub-header-data-list {
		// Don't take all available space
		flex: none;

		::v-deep .vd-data-list {
			max-width: 200px;
			margin-left: 8px;

			// Apply margin right to avoid empty
			// space on smaller screens
			&:not(:last-child) {
				margin-right: 80px;
			}

			.vd-key {
				display: inline-block;
				font-size: .75rem !important;
			}
		}
	}

	@media only screen and (max-width: 425px) {
		.vd-sub-header-informations {
			// Let section take all width
			margin-right: 0;
		}

		// Remove margin right on DataList on small screens
		.vd-sub-header-data-list {
			::v-deep .vd-data-list {
				margin: 0 8px;

				&:not(:last-child) {
					margin-right: 8px;
				}
			}
		}
	}
</style>
