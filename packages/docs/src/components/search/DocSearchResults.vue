<template>
	<div>
		<VListItem
			v-if="item.href"
			:href="item.href"
			class="pb-1 pt-2 mb-0"
		>
			<VListItemTitle >
				<div
					class="d-inline-block font-weight-bold"
					v-html="item.content"
				/>

				<VListItemSubtitle class="d-inline-flex ml-1">
					&rsaquo;&nbsp;Home
				</VListItemSubtitle>
			</VListItemTitle>
		</VListItem>

		<VListItem
			v-if="item.items.length > 0"
			class="mb-0 pt-2 d-block"
		>
			<VListItemContent class="pa-0">
				<VListItemTitle
					class="d-inline-block font-weight-bold"
					v-html="item.title"
				/>

				<VListItem
					v-for="(subItem, index) in item.items"
					:key="`${item.title}-${index}`"
					:href="subItem.href"
				>
					<VListItemContent class="py-1">
						<VListItemTitle
							v-if="subItem.breadcrumb"
							v-html="subItem.breadcrumb"
							class=""
						/>

						<VListItem
							v-if="subItem.content"
							class="text-caption text-wrap text--primary font-weight-regular pl-2 d-block"
							v-html="subItem.content"
						/>
					</VListItemContent>
				</VListItem>
			</VListItemContent>
		</VListItem>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import {
		SearchResultFormatted
	} from '../../services/search/types';

	const Props = Vue.extend({
		props: {
			item: {
				type: Object as PropType<SearchResultFormatted>,
				required: true,
			},
		},
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocSearchResults extends MixinsDeclaration {
		get titleComputed(): string {
			console.log(this.item.href ? this.item.content : this.item.title)
			return this.item.href ? this.item.content : this.item.title;
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep mark {
		background: rgb(33, 150, 243, 30%);
	}

	.v-list-item {
		min-height: 0px !important;
	}
</style>
