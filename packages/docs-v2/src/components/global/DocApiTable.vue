<template>
	<VSheet
		class="overflow-hidden"
		outlined
		rounded
	>
		<VSimpleTable
			class="doc-api-table"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<thead>
				<tr>
					<th
						v-for="header in headers"
						:key="header"
						:class="header"
					>
						<div
							class="text-capitalize"
							v-text="header"
						/>
					</th>
				</tr>
			</thead>

			<tbody>
				<template v-for="item in items">
					<tr
						:key="item.name"
						:class="['regular-row', hasExtraRow(item) && 'has-extra-row']"
					>
						<td
							v-for="(header, i) in headers"
							:key="i"
						>
							<template v-if="header === 'name'">
								<span
									:id="item[header].replace('$', '')"
									class="name-item text-mono primary--text"
								>
									<!-- <span class="primary--text">#</span> -->
									<!-- <app-link
										:href="`#${item[header].replace('$', '')}`"
										class="font-weight-bold"
										v-text="item[header]"
									/> -->
									{{ item[header] }}
								</span>
							</template>

							<template v-else-if="header === 'type' || header === 'signature'">
								<div
									class="text-mono"
									v-html="getType(item[header])"
								/>
							</template>

							<template v-else-if="header === 'default'">
								<div
									class="text-mono"
									v-html="getDefaultValue(item)"
								/>
							</template>

							<template v-else-if="header === 'description'">
								<!-- <DocMarkup
									v-if="item[header]"
									:code="item[header]"
								/> -->
								{{ item[header] }}
							</template>

							<template v-else>
								{{ item[header] }}
							</template>
						</td>
					</tr>

					<template v-if="hasExtraRow(item)">
						<tr
							:key="`${item.name}_extra`"
							class="extra-row"
						>
							<td />

							<td :colspan="headers.length - 1">
								<DocMarkup
									:code="getCode(item)"
									:language="getLanguage(item)"
									class="mr-2 ml-4"
								/>
							</td>
						</tr>
					</template>
				</template>
			</tbody>
		</VSimpleTable>
	</VSheet>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { ApiHeaders, HeaderList, ApiProp } from '../../types';

	import { API_TABLE_HEADERS } from '../../constants';

	const Props = Vue.extend({
		props: {
			name: {
				type: String,
				default: undefined
			},
			field: {
				type: String as PropType<HeaderList>,
				default: undefined
			},
			items: {
				type: Array as PropType<ApiHeaders>,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocApiTable extends MixinsDeclaration {
		get headers(): string[] {
			return API_TABLE_HEADERS[this.field];
		}

		getType(value: string): string {
			const type = Array.isArray(value) ? value.join(' | ') : value;

			return type; // return Prism.highlight(String(type), Prism.languages.typescript);
		}

		getDefaultValue(item: ApiProp): string {
			const { default: defaultValue } = item;

			const str = defaultValue == null || typeof defaultValue === 'string'
				? String(defaultValue)
				: JSON.stringify(defaultValue, null, 2);

			if (str.startsWith('gh:')) {
				return `<a target="_blank" href="https://github.com/vuetifyjs/vuetify/search?q=${str.slice(3)}">${str.slice(3)}</a>`;
			}

			return str; // return Prism.highlight(str, this.field === 'sass' ? Prism.languages.scss : Prism.languages.typescript);
		}

		getLanguage(item: any): 'html' | 'typescript' {
			if (item.snippet) {
				return 'html';
			}

			return 'typescript';
		}

		getCode(item: any): string {
			if (item.snippet || item.value) {
				return this.genHtml(item.snippet || item.value);
			}

			return this.genTypescript(item.example || item.props);
		}

		genTypescript(obj: any): string {
			if (typeof obj === 'string') {
				return obj;
			}

			const str = JSON.stringify(obj, null, 2);

			return str.replace(/: "(.*)"/g, ': $1').replace(/"(.*)":/g, '$1:');
		}

		genHtml(obj: any): string {
			if (typeof obj === 'string') {
				return obj.trim();
			}

			return this.genTypescript(obj);
		}

		hasExtraRow(item: any) {
			return item.example || item.snippet || item.props || item.value;
		}
	}
</script>

<style lang="scss" scoped>
	.doc-api-table {
		th {
			&.name {
				width: 20%;
			}

			&.type {
				width: 15%;
			}

			&.signature {
				width: 25%;
			}
		}

		.regular-row td {
			padding: 8px 16px !important;
		}

		.regular-row.has-extra-row td {
			border-bottom: none !important;
		}

		.extra-row:hover {
			background: initial !important
		}

		.extra-row td {
			padding: 8px 0 !important
		}
	}

	.name-item {
		white-space: nowrap;

		&:not(:hover):not(:focus) span {
			opacity: 0;
		}
	}
</style>
