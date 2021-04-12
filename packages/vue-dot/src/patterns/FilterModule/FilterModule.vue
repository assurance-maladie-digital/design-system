<template>
	<div
		class="vd-filter-module"
	>
		<FilterSelector
			:list="arrangeFilter"
			@open-dialog="openModal($event)"
		/>
		<!--<div
			v-for="(item, i) in arrangeFilter"
			:key="i"
		>
			<VSelect
				v-model="value"
				:items="item.list"
				:label="item.header.value"
				multiple
			>
				<template v-slot:selection="{ item, index }">
					<v-chip v-if="index === 0">
						<span>{{ item }}</span>
					</v-chip>
					<span
						v-if="index === 1"
						class="grey--text caption"
					>
						(+{{ value.length - 1 }} others)
					</span>
				</template>
			</VSelect>
		</div>-->
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			values: {
				type: Array,
				default: undefined
			},
			list: {
				type: Array,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(
		Props,
		customizable(config)
	);

	@Component<FilterModule>({
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class FilterModule extends MixinsDeclaration {
		// Locales
		locales = locales;

		value = [];

		openFilterList(): void {
			this.arrangeFilter.forEach(data => {
				console.log(data.header.text);
				console.log(data.list);
			});
		}

		openModal(index: number): void {
			console.log(this.arrangeFilter[index].list);
		}

		get arrangeFilter(): Array<string> {
			const filters: Array<any> = [];
			this.list.forEach((data, i) => {
				let valueList: Array<any> = [];
				this.values.forEach((datum, di) => {
					Object.keys(datum).forEach((header, ti) => {
						if(header === data.value) {
							valueList.push(Object.values(this.values[di])[ti]);
						}
					});
				});
				filters.push({
					header: data,
					list: valueList
				});
			});
			return filters;
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-filter-module {
			width: 150px;
			display: flex;
		}
	}
</style>
