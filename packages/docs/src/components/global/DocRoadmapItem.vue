<template>
	<div>
		<VRow
			no-gutters
			align="center"
			class="ma-n1"
		>
			<h3 class="font-weight-bold flex-grow-0 ma-1 mr-2">
				{{ title }}
			</h3>

			<VChip
				v-if="itemLabel"
				:class="labelColor"
				class="text-caption white--text px-3 flex-grow-0 ma-1"
			>
				{{ itemLabel }}
			</VChip>
		</VRow>

		<p
			v-if="description"
			class="mt-2 mb-2"
		>
			{{ description }}
		</p>

		<a
			v-if="issue && issueLabel"
			:href="issueHref"
			target="_blank"
			rel="noopener noreferrer"
		>
			{{ issueLabel }}
		</a>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { labelMapping } from '../../data/roadmap/labelMapping';

	const Props = Vue.extend({
		props: {
			title: {
				type: String,
				required: true
			},
			label: {
				type: String,
				required: true
			},
			description: {
				type: String,
				default: undefined
			},
			issue: {
				type: String,
				default: undefined
			}
		}
	});

	@Component
	export default class DocRoadmapItem extends Props {
		get issueHref(): string {
			return `https://github.com/assurance-maladie-digital/design-system/issues/${this.issue}`;
		}

		get issueLabel(): string | undefined {
			if (!this.issue) {
				return;
			}

			return `#${this.issue}`;
		}

		get labelColor(): string {
			return labelMapping[this.label]?.color;
		}

		get itemLabel(): string | undefined {
			return labelMapping[this.label]?.label;
		}
	}
</script>
