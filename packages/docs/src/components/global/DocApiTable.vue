<template>
	<VSheet
		outlined
		rounded
		class="overflow-hidden"
	>
		<VSimpleTable
			v-bind="$attrs"
			v-on="$listeners"
			class="doc-api-table"
		>
			<thead>
				<tr>
					<th
						v-for="header in headers"
						:key="header"
						:class="header"
						v-text="getHeaderName(header)"
					/>
				</tr>
			</thead>

			<tbody>
				<template v-for="item in items">
					<tr
						:key="item.name"
						:class="getTableRowClasses(item)"
					>
						<td
							v-for="(header, index) in headers"
							:key="index"
						>
							<template v-if="header === ApiHeadersEnum.NAME">
								<span class="name-item text-mono d-inline-flex font-weight-bold primary--text">
									{{ item[header] }}

									<sup
										v-if="item.required"
										title="Prop obligatoire"
										aria-label="Prop obligatoire"
										class="required"
										v-text="'*'"
									/>
								</span>
							</template>

							<template v-else-if="header === ApiHeadersEnum.TYPE || header === ApiHeadersEnum.SIGNATURE">
								<div
									class="text-mono"
									v-html="getType(item[header])"
								/>
							</template>

							<template v-else-if="header === ApiHeadersEnum.DEFAULT">
								<div
									class="text-mono"
									v-html="getDefaultValue(item)"
								/>
							</template>

							<template v-else-if="header === ApiHeadersEnum.DESCRIPTION">
								<DocMarkdown
									v-if="item[header]"
									class="description"
								>{{ item[header] }}</DocMarkdown>
							</template>

							<template v-else>
								{{ item[header] }}
							</template>
						</td>
					</tr>

					<template v-if="hasExtraRow(item)">
						<tr
							:key="`${item.name}-extra`"
							class="extra-row"
						>
							<td v-if="field !== ApiHeadersEnum.RETURN_VALUE" />

							<td :colspan="headers.length - 1">
								<DocMarkup
									:code="getCode(item)"
									:language="getLanguage(item)"
									no-margin
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

	import { IndexedObject } from '@cnamts/vue-dot/src/types';
	import { ApiHeaders, HeaderList, ApiProp } from '../../types';

	import { API_TABLE_HEADERS, API_TABLE_HEADER_MAPPING } from '../../constants/apiTableHeaders';
	import { ApiHeadersEnum } from '../../constants/ApiHeadersEnum';

	import DocMarkdown from '../code/DocMarkdown.vue';

	import Prism from 'prismjs';

	import 'prismjs/components/prism-typescript.js';

	type PropObj = IndexedObject<IndexedObject | string> | string;

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

	@Component({
		components: {
			DocMarkdown
		}
	})
	export default class DocApiTable extends MixinsDeclaration {
		ApiHeadersEnum = ApiHeadersEnum;

		get headers(): string[] {
			return API_TABLE_HEADERS[this.field];
		}

		getHeaderName(header: string): string {
			return API_TABLE_HEADER_MAPPING[header];
		}

		getTableRowClasses(item: ApiProp): string[] {
			const classes = ['regular-row'];

			if (this.hasExtraRow(item)) {
				classes.push('has-extra-row');
			}

			return classes;
		}

		getType(value: string): string {
			const type = Array.isArray(value) ? value.join(' | ') : value;

			return Prism.highlight(String(type), Prism.languages.typescript);
		}

		getDefaultValue(item: ApiProp): string {
			const { default: defaultValue } = item;

			if (defaultValue === undefined) {
				return '—';
			}

			const str = !defaultValue || typeof defaultValue === 'string'
				? String(defaultValue)
				: JSON.stringify(defaultValue, null, '\t');

			return Prism.highlight(str, Prism.languages.typescript);
		}

		getLanguage(item: ApiProp): 'html' | 'ts' {
			if (item.snippet) {
				return 'html';
			}

			return 'ts';
		}

		getCode(item: ApiProp): string | null {
			if (item.snippet || item.value) {
				return this.genHtml(item.snippet || item.value as string);
			}

			if (item.example) {
				return this.genTypescript(item.example);
			}

			if (item.props) {
				return this.genTypescript(item.props);
			}

			return null;
		}

		genTypescript(obj: PropObj): string {
			if (typeof obj === 'string') {
				return obj;
			}

			const str = JSON.stringify(obj, null, '\t');

			// Remove quotes around values and keys
			return str.replace(/: "(.*)"/g, ': $1').replace(/"(.*)":/g, '$1:');
		}

		genHtml(obj: IndexedObject | string): string {
			if (typeof obj === 'string') {
				return obj.trim();
			}

			return this.genTypescript(obj);
		}

		hasExtraRow(item: ApiProp): boolean {
			return Boolean(item.example || item.snippet || item.props || item.value);
		}
	}
</script>

<style lang="scss" scoped>
	.doc-api-table {
		th {
			white-space: nowrap;

			&.name,
			&.default {
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

		.regular-row:hover,
		.extra-row:hover {
			background: initial !important;
		}

		.extra-row td {
			padding: 16px;
			padding-top: 8px;
		}

		.text-mono {
			font-family: monospace;
		}

		:deep(.description) {
			min-width: 248px;
		}
	}

	.name-item {
		white-space: nowrap;

		span {
			margin-right: 4px;
			transition: opacity .15s;
		}

		&:not(:hover):not(:focus) span {
			opacity: 0;
		}

		.required {
			top: .35rem;
			left: 2px;
		}
	}
</style>
