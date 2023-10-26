<script lang="ts">
	import { defineComponent } from 'vue'
	import type { PropType } from 'vue'

	import { headers } from './headers'

	import { CookiesList } from './types'

	export default defineComponent({
		props: {
			items: {
				type: Array as PropType<CookiesList[]>,
				required: true,
			},
		},
		data() {
			return {
				headers,
			}
		},
	})
</script>

<template>
	<VTable class="vd-cookie-table">
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
				<td>{{ cookie.name }}</td>
				<td>{{ cookie.description }}</td>
				<td>{{ cookie.conservation }}</td>
			</tr>
		</tbody>
	</VTable>
</template>

<style lang="scss" scoped>
	.vd-cookie-table :deep(table) {
		table-layout: fixed;
	}
</style>
