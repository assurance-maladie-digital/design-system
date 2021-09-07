<template>
	<VSimpleTable class="doc-rule-option-table w-100">
		<thead>
			<tr>
				<th
					v-for="(header, index) in headers"
					:key="index"
					v-text="header.text"
				/>
			</tr>
		</thead>

		<tbody>
			<tr
				v-for="(item, index) in items"
				:key="index"
			>
				<td
					v-for="(header, headerIndex) in headers"
					:key="headerIndex"
				>
					<DocMarkdown v-if="item[header.value]">
						{{ item[header.value] }}
					</DocMarkdown>
				</td>
			</tr>
		</tbody>
	</VSimpleTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocMarkdown from '../code/DocMarkdown.vue';

	import { RuleOption } from '../../types';

	const getOptions = (name: string) => {
		return import(
			/* webpackChunkName: "rules-data" */
			/* webpackMode: "eager" */
			`../../data/rules/${name}.ts`
		);
	};

	const Props = Vue.extend({
		props: {
			name: {
				type: String,
				required: true
			}
		}
	})

	@Component({
		components: {
			DocMarkdown
		}
	})
	export default class DocRuleOptionTable extends Props {
		headers = [
			{
				text: 'Propriété',
				value: 'property'
			},
			{
				text: 'Description',
				value: 'description'
			},
			{
				text: 'Default',
				value: 'default'
			}
		];

		items: RuleOption[] = [];

		async created() {
			this.items = (await getOptions(this.name)).ruleOptions;
		}
	}
</script>
