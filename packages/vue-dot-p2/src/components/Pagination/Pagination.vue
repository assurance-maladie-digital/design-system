<template>
	<div class="text-center pt-2 my-2">
		<VBtn
			:disabled="firstPageIsDisable"
			icon
			tile
			outlined
			class="mb-4 px-0 first-and-last-pagination"
			@click="goFirstPage"
		>
			<VIcon>
				{{ firstPageIcon }}
			</VIcon>
		</VBtn>

		<VPagination
			v-model="computedValue"
			:length="pageCount"
			total-visible="10"
			class="pagination-size"
			active-b-f-color="accent"
		/>

		<VBtn
			:disabled="lastPageIsDisable"
			icon
			tile
			outlined
			class="mb-4 px-0 first-and-last-pagination"
			@click="goLastPage"
		>
			<VIcon>
				{{ lastPageIcon }}
			</VIcon>
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiChevronDoubleLeft, mdiChevronDoubleRight } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			page: {
				type: Number,
				required: true
			},
			pageCount: {
				type: Number,
				required: true
			}
		}
	});

	@Component({
		model: {
			prop: 'page',
			event: 'change'
		}
	})
	export default class Pagination extends Props {
		firstPageIcon = mdiChevronDoubleLeft;
		lastPageIcon = mdiChevronDoubleRight;

		get firstPageIsDisable(): boolean {
			return this.page === 1;
		}

		get lastPageIsDisable(): boolean {
			return this.page === this.pageCount;
		}

		get computedValue(): number {
			return this.page;
		}

		set computedValue(value) {
			this.$emit('change', value);
		}

		goFirstPage(): void {
			this.computedValue = 1;
		}

		goLastPage(): void {
			this.computedValue = this.pageCount;
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .v-pagination__navigation {
		margin: 0 !important;
		border: 1px solid rgb(237, 237, 237) !important;
		border-radius: 0 !important;
		box-shadow: none !important;
		height: 34px !important;
	}

	::v-deep .v-pagination__navigation .theme--light.v-icon {
		color: #0087cf !important;
	}

	::v-deep .v-pagination__item:not(.v-pagination__item--active) {
		color: #0087cf !important;
	}

	::v-deep .v-pagination__item {
		margin: 0 !important;
		border: 1px solid rgb(237, 237, 237) !important;
		border-radius: 0 !important;
		box-shadow: none !important;

		&.v-pagination__item--active {
			background-color: #0087cf !important;
			border-color: #0087cf !important;
		}
	}

	.pagination-size {
		max-width: fit-content;
	}

	.first-and-last-pagination {
		color: #0087cf !important;
		border: 1px solid rgb(237, 237, 237);
		height: 34px;

		&.theme--light.v-btn.v-btn--disabled .v-icon {
			color: #aed7ed !important;
			border-color: lightgray !important;
		}
	}
</style>
