<template>
	<div class="vd-sub-header secondary white--text py-3 px-6">
		<slot name="back-btn">
			<VBtn
				v-if="!hideBackBtn"
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
		</slot>

		<VLayout
			v-bind="options.contentLayout"
			class="vd-sub-header-content"
		>
			<div class="vd-sub-header-informations">
				<slot name="title">
					<h2 class="headline font-weight-bold">
						{{ titleText }}
					</h2>
				</slot>

				<slot name="sub-title">
					<p
						v-if="subTitleText"
						class="title font-weight-bold mt-1 mb-0"
						:style="{
							color: fadeWhite
						}"
					>
						{{ subTitleText }}
					</p>
				</slot>

				<slot name="additional-informations" />
			</div>

			<slot name="right-content">
				<VLayout
					v-if="dataLists"
					v-bind="options.dataListsLayout"
					class="vd-sub-header-data-list"
				>
					<DataList
						v-for="(dataList, index) in dataLists"
						:key="'vd-sub-header-data-list' + index"
						:list-title="dataList.title"
						:list="dataList.items"
						:label-color="fadeWhite"
						title-class="subtitle-1 font-weight-bold mb-2"
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
	}

	.vd-sub-header-data-list {
		// Don't take all available space
		flex: none !important;

		::v-deep .vd-data-list {
			max-width: 200px;

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
</style>
