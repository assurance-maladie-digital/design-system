<script lang="ts">
import { defineComponent } from "vue";

import { mdiMagnify, mdiPlus } from "@mdi/js";

import { config } from "./config";
import { locales } from "./locales";

import { customizable } from "@/mixins/customizable";

export default defineComponent({
	mixins: [customizable(config)],
	props: {
		nbTotal: {
			type: Number,
			required: true,
		},
		nbFiltered: {
			type: Number,
			default: undefined,
		},
		search: {
			type: String,
			default: undefined,
		},
		searchLabel: {
			type: String,
			default: locales.search,
		},
		rowText: {
			type: String,
			default: locales.defaultRowText,
		},
		showAddBtn: {
			type: Boolean,
			default: false,
		},
		addBtnLabel: {
			type: String,
			default: locales.addBtnLabel,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["update:search", "click"],
	data() {
		return {
			locales,
			searchIcon: mdiMagnify,
			addIcon: mdiPlus,
		};
	},
	computed: {
		showRowsNumber(): boolean {
			return Boolean(this.nbTotal);
		},

		computedNbRows(): string {
			if (this.nbFiltered !== undefined && this.nbFiltered > 0) {
				return `${this.nbFiltered}/${this.nbTotal}`;
			} else {
				return `${this.nbTotal}/${this.nbTotal}`;
			}
		},

		computedRowsText(): string {
			return locales.rowText(this.rowText, this.nbTotal > 1);
		},

		textFieldClasses(): string {
			let fieldClass = this.isXs ? "vd-form-input-s" : "vd-form-input";

			if (this.showAddBtn) {
				fieldClass += " mr-6";
			}

			return `${fieldClass} flex-grow-0`;
		},

		isXs(): boolean {
			return this.$vuetify.display.name === "xs";
		},
	},
});
</script>

<template>
	<VToolbar v-bind="options.toolbar" class="vd-table-toolbar">
		<p v-if="showRowsNumber" class="mb-0 font-weight-bold mr-4">
			{{ computedNbRows }} {{ computedRowsText }}
		</p>

		<VSpacer />

		<slot name="search-left" />

		<VTextField
			v-bind="options.textField"
			color="primary"
			:model-value="search"
			:disabled="loading"
			:append-inner-icon="searchIcon"
			:label="searchLabel"
			:class="textFieldClasses"
			@update:modelValue="$emit('update:search', $event)"
		/>
		<VBtn
			v-if="showAddBtn"
			v-bind="options.addBtn"
			:disabled="loading"
			@click="$emit('click')"
		>
			<VIcon v-bind="options.addIcon">
				{{ addIcon }}
			</VIcon>

			<span v-show="!isXs" v-bind="options.addIconLabel">
				{{ addBtnLabel }}
			</span>
		</VBtn>

		<slot name="search-right" />
	</VToolbar>
</template>

<style lang="scss" scoped>
.vd-table-toolbar {
	z-index: 1; // Display content above the table on mobile
	contain: none; // Allow fixed elements to be displayed properly

	:deep(.v-toolbar__content) {
		width: 100%;
		flex-wrap: wrap;
	}
}
</style>
