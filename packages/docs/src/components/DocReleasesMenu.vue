<template>
	<VMenu
		attach
		left
		bottom
		offset-y
		max-height="500px"
		open-delay="60"
		close-delay="100"
		content-class="rounded"
	>
		<template #activator="{ on, attrs }">
			<VBtn
				v-bind="attrs"
				v-on="on"
				:small="mobileVersion"
				text
				class="px-0 px-sm-2 mr-4 mr-sm-2"
			>
				v{{ version }}

				<VIcon
					v-if="!mobileVersion"
					small
					class="ml-1"
				>
					{{ arrowIcon }}
				</VIcon>
			</VBtn>
		</template>

		<VSheet>
			<VList
				dense
				nav
			>
				<template v-for="(item, index) in items">
					<VSubheader
						v-if="item.type === ItemTypeEnum.TITLE"
						:key="index"
						class="text--primary font-weight-bold"
					>
						{{ item.label }}
					</VSubheader>

					<VDivider
						v-else-if="item.type === ItemTypeEnum.DIVIDER"
						:key="index"
						class="mt-2 mb-2"
					/>

					<VListItem
						v-else-if="item.type === ItemTypeEnum.ITEM"
						:key="index"
						:href="item.href"
						:to="item.to"
						:target="item.to ? '' : '_blank'"
						rel="noopener noreferrer"
					>
						<VListItemTitle>
							{{ item.label }}
						</VListItemTitle>
					</VListItem>
				</template>
			</VList>
		</VSheet>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiChevronDown } from '@mdi/js';

	import { version } from '../../package.json';

	enum ItemTypeEnum {
		TITLE = 'title',
		DIVIDER = 'divider',
		ITEM = 'item'
	}

	@Component
	export default class DocHeader extends Vue {
		version = version;
		ItemTypeEnum = ItemTypeEnum;

		arrowIcon = mdiChevronDown;

		items = [
			{
				type: ItemTypeEnum.TITLE,
				label: 'Documentation'
			},
			{
				type: ItemTypeEnum.ITEM,
				label: 'dev',
				href: 'https://dev--digital-design-system.netlify.app/demarrer/introduction/'
			},
			{
				type: ItemTypeEnum.ITEM,
				label: 'v1.x',
				href: 'https://v1-digital-design-system.netlify.app/'
			},
			{
				type: ItemTypeEnum.DIVIDER
			},
			{
				type: ItemTypeEnum.TITLE,
				label: 'Versions'
			},
			{
				type: ItemTypeEnum.ITEM,
				label: 'Notes de version',
				to: '/demarrer/notes-de-version'
			},
			{
				type: ItemTypeEnum.ITEM,
				label: 'Versions GitHub',
				href: 'https://github.com/assurance-maladie-digital/design-system/releases'
			}
		];

		get mobileVersion(): boolean {
			return this.$vuetify.breakpoint.xs;
		}
	}
</script>

<style lang="scss" scoped>
	.v-subheader,
	.v-list-item {
		height: auto !important;
		min-height: 32px !important;
	}
</style>
