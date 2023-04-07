<template>
	<VSimpleTable class="vd-cookie-table">
		<thead>
			<tr>
				<th
					v-for="(item, index) in headers"
					:key="index"
					:style="{ width: item.width }"
					class="text-left"
				>
					{{ item.label }}
				</th>
			</tr>
		</thead>

		<tbody>
			<tr
				v-for="(cookie, index) in items"
				:key="index"
			>
				<td>
					{{ cookie.name }}
				</td>
				<td>
					{{ cookie.description }}
				</td>
				<td>
					{{ cookie.conservation }}
				</td>
			</tr>
		</tbody>
	</VSimpleTable>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { headers } from './headers';

	import { CookiesList } from './types';

	const Props = Vue.extend({
		props: {
			items: {
				type: Array as PropType<CookiesList[]>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class CookiesPage extends MixinsDeclaration {
		headers = headers;
	}
</script>

<style lang="scss" scoped>
	.vd-cookie-table :deep(table) {
		table-layout: fixed;
	}
</style>
