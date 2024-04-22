<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { DataOptions, SortOption, GroupOption } from "./types";
import { LocalStorageUtility } from "@/helpers/localStorageUtility";

export default defineComponent({
	inheritAttrs: false,
	emits: ['update:options'],
	props: {
		options: {
			type: Object as PropType<Partial<DataOptions>>,
			required: true,
		},
		serverItemsLength: {
			type: Number,
		},
		suffix: {
			type: String,
			default: undefined,
		},
		itemsPerPage: {
			type: Number
		},
	},
	data() {
		return {
			localStorageUtility: this.newLocalStorageInstance() as LocalStorageUtility,
			localOptions: {},
			slotNames: Object.keys(this.$slots)  as "default"[]
		};
	},
	watch: {
		options: {
			deep: true,
			handler() {
				if(this.serverItemsLength !== 0) {
					this.localStorageUtility.setItem(this.storageKey, {
						...this.optionsFacade,
						itemsLength: this.serverItemsLength ?? 0,
					});

					this.localOptions = this.optionsFacade;
				}
			},
		},
	},
	computed: {
		storageKey(): string {
			const prefix = 'pagination';

			return this.suffix ? `${prefix}-${this.suffix}` : prefix
		},
		headers(): undefined | { title?: string, value: string }[] {
			if (!Array.isArray(this.$attrs['headers'])) {
				return undefined;
			}
			return this.$attrs['headers'].map((header) => ({
				...header,
				title: header.title ?? header.text,
			}))
		},
		optionsFacade() {
			const sortBy =
				!this.options.sortBy ?
					[] :
					Array.isArray(this.options.sortBy) ?
						this.options.sortBy
							.filter((key: string) => key)
							.map((key: string, index: number) => (
								{ key, order: this.options?.sortDesc?.[index] ? 'desc' : 'asc' as 'desc' | 'asc'}
							)) :
						[{
							key: this.options.sortBy,
							order: this.options.sortDesc ? 'desc' : 'asc' as 'desc' | 'asc',
						}];
			const groupBy =
				!this.options.groupBy ?
					[] :
					Array.isArray(this.options.groupBy) ?
						this.options.groupBy
							.filter((key: string) => key)
							.map((key: string, index: number) => (
								{key, order: this.options?.groupDesc?.[index] ? 'desc' : 'asc'  as 'desc' | 'asc'}
							)) :
						[{
							key: this.options.groupBy,
							order: this.options.groupDesc ? 'desc' : 'asc' as 'desc' | 'asc',
						}];

			return {
				page: this.options.page || this.$attrs['page'],
				itemsPerPage: this.options.itemsPerPage || this.itemsPerPage,
				sortBy,
				groupBy,
				multiSort: this.options.multiSort,
				mustSort: this.options.mustSort,
			};
		},
		propsFacade() : any {
			const {
				"onUpdate:options": _,
				...attrs
			}: Record<string, any> = this.$attrs;

			return {
				...attrs,
				itemsLength: this.serverItemsLength ?? 0,
				headers: this.headers,
				...this.localOptions,
			};
		},
	},
	methods: {
		newLocalStorageInstance(): LocalStorageUtility {
			return new LocalStorageUtility();
		},
		updateOptions(options: SortOption[] | GroupOption[]): void {
			this.$emit('update:options', this.createUpdatedOptions(options));
		},
		createUpdatedOptions(options: any): DataOptions {
			return {
				...options,
				multiSort: this.optionsFacade.multiSort,
				mustSort: this.optionsFacade.mustSort,
				sortBy: this.createSortBy(options),
				sortDesc: this.createSortDesc(options),
				groupBy: this.createGroupBy(options),
				groupDesc: this.createGroupDesc(options),
			};
		},
		createSortBy(options: any): string[] {
			return options.sortBy
				.filter((sort: any) => sort.key)
				.map((sort: any) => sort.key);
		},
		createSortDesc(options: any): boolean[] {
			return options.sortBy
				.filter((sort: any) => sort.key)
				.map((sort: any) => sort.order === 'desc');
		},
		createGroupBy(options: any): string[] {
			return options.groupBy
				.filter((group: any) => group.key)
				.map((group: any) => group?.key);
		},
		createGroupDesc(options: any): boolean[] {
			return options.groupBy
				.filter((group: any) => group.key)
				.map((group: any) => group?.order === 'desc');
		}
	},
	created() {
		this.localOptions =
			this.localStorageUtility.getItem(this.storageKey) ?? this.optionsFacade;
	},
});
</script>

<template>
	<div>
		<VDataTable
			v-if="!serverItemsLength"
			color="warning"
			v-bind="propsFacade"
			@update:options="updateOptions"
		>
			<template
				v-for="(slotName) in slotNames"
				v-slot:[slotName]="slotProps"
			>
				<slot :name="slotName" v-bind="slotProps ?? {}" />
			</template>
		</VDataTable>
		<VDataTableServer
			v-else
			v-bind="propsFacade"
			@update:options="updateOptions"
		>
			<template
				v-for="(slotName) in slotNames"
				v-slot:[slotName]="slotProps"
			>
				<slot :name="slotName" v-bind="slotProps ?? {}" />
			</template>
		</VDataTableServer>
	</div>
</template>
