<template>
	<VList expand>
		<template v-for="(item, index) in items">
			<VListItem
				v-show="!item.items"
				:key="item.title"
				:to="item.to || null"
				:href="item.href || null"
				:target="item.href ? '_blank' : null"
				:rel="item.href ? 'noopener noreferrer' : null"
				ripple
				exact
			>
				<VListItemContent>
					<VListItemTitle>
						{{ item.title }}
					</VListItemTitle>
				</VListItemContent>
			</VListItem>

			<VListGroup
				v-show="item.items"
				:key="`group-${index}`"
				:group="item.group"
				no-action
				active-class="primary--text"
			>
				<VListItem
					:to="item.to"
					slot="activator"
					ripple
					exact
				>
					<VListItemContent>
						<VListItemTitle>
							{{ item.title }}
						</VListItemTitle>
					</VListItemContent>
				</VListItem>

				<VListItem
					v-for="item in item.items"
					:key="`sub-${item.title}`"
					:to="item.to"
					ripple
					exact
				>
					<VListItemContent>
						<VListItemTitle>
							{{ item.title }}
						</VListItemTitle>
					</VListItemContent>
				</VListItem>
			</VListGroup>
		</template>
	</VList>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			items: {
				type: Array,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocSitemap extends MixinsDeclaration {}
</script>
