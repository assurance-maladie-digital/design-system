<template>
	<div>
		<VRow
			no-gutters
			class="mb-3"
		>
			<div class="font-weight-bold">
				{{ item.title }}
			</div>

			<VRow
				no-gutters
				align="center"
			>
				<span :class="`ml-0 ml-sm-8 mt-2 mt-sm-0 px-3 rounded-pill text-caption white--text ${item.labelColor}`">{{ item.label }}</span>
			</VRow>
		</VRow>

		<div>
			{{ item.description }}
		</div>

		<div
			v-if="item.issue && issueNumber"
			class="mt-1"
		>
			<a
				:href="item.issue"
				target="_blank"
			>
				{{ issueLabel }}
			</a>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { RoadMapItem } from '../../types/roadMap';

	const Props = Vue.extend({
		props: {
			item: {
				type: Object as PropType<RoadMapItem>,
				required: true
			}
		}
	});

	@Component
	export default class DocRoadMapItem extends Props {
		get issueNumber(): string | undefined {
			const issueParts = this.item.issue?.split('/');

			if (issueParts?.length === 1) {
				return undefined;
			}

			return issueParts?.pop();
		}

		get issueLabel(): string {
			return `#${this.issueNumber as string}`;
		}
	}
</script>
