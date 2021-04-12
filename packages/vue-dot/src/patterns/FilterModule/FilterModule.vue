<template>
	<div
		class="vd-filter-module"
	>
		<VBtn
			color="white"
			class="primary--text"
			@click="openFilterList"
		>
			Filters
		</VBtn>
		<!--<div
			v-for="(item, i) in arrangeFilter"
			:key="i"
		>
			{{ item.header.value }}
			<div
				v-for="(value, i2) in item.list"
				:key="i2"
			>
				{{ value }}
			</div>
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

		openFilterList(): void {
			this.arrangeFilter.forEach(data => {
				console.log(data.header.text);
				console.log(data.list);
			});
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
