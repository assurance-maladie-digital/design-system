<template>
	<div>
		<VRow
			no-gutters
			align="center"
			class="mb-3"
		>
			<h3 class="font-weight-bold">
				{{ title }}
			</h3>

			<VChip
				:class="labelColor"
				class="text-caption ml-4 ml-sm-8 mt-2 mt-sm-0 px-3"
			>
				{{ labelFromMapping }}
			</VChip>
		</VRow>

		<p class="mb-2">
			{{ description || '…' }}
		</p>

		<a
			v-if="issue && issueLabel"
			:href="issue"
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
				default: null
			},
			issue: {
				type: String,
				default: null
			}
		}
	});

	@Component
	export default class DocRoadmapItem extends Props {
		get issueNumber(): string | undefined {
			const issueParts = this.issue?.split('/');

			if (issueParts?.length === 1) {
				return;
			}

			return issueParts?.pop();
		}

		get issueLabel(): string | undefined {
			if (!this.issueNumber) {
				return;
			}

			return `#${this.issueNumber}`;
		}

		get labelColor(): string {
			return labelMapping[this.label]?.color;
		}

		get labelFromMapping(): string {
			return labelMapping[this.label]?.label;
		}
	}
</script>
