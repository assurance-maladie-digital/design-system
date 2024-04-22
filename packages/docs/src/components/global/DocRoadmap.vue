<template>
	<div class="doc-roadmap w-100">
		<VSheet
			outlined
			rounded
			class="mb-8"
		>
			<VListItem class="px-4">
				<VListItemAvatar class="d-none d-sm-inline-flex">
					<VIcon
						color="primary"
						x-large
					>
						{{ tagIcon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent>
					<VListItemTitle class="mb-1">
						Version 2.x
					</VListItemTitle>

					<VListItemSubtitle>
						La version 2 du Design System est en maintenance jusqu’à août 2024.
					</VListItemSubtitle>
				</VListItemContent>
			</VListItem>
		</VSheet>

		<VSheet
			outlined
			rounded
			class="mb-8"
		>
			<VListItem class="px-4">
				<VListItemAvatar class="d-none d-sm-inline-flex">
					<VIcon
						color="primary"
						x-large
					>
						{{ tagIcon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent>
					<VListItemTitle class="mb-1">
						Version Bridge
					</VListItemTitle>

					<VListItemSubtitle>
						La version Bridge du Design System est en cours de développement et permettra de migrer sur Vue 3 sans changements sur les composants.
					</VListItemSubtitle>
				</VListItemContent>
			</VListItem>
		</VSheet>

		<div class="d-flex justify-center">
			<img src="@/assets/images/bridge.png" alt="Roadmap Bridge" class="w-75 mb-8" />
		</div>

		<div class="d-flex justify-center mb-8">
			<v-progress-linear
				:value="progress"
				color="primary"
				height="25"
			>
				<template v-slot:default="{ value }">
					<span class="white--text font-weight-bold">{{ Math.ceil(value) }}%</span>
				</template>
			</v-progress-linear>
		</div>

		<VSheet
			outlined
			rounded
		>
			<VListItem
				href="https://github.com/orgs/assurance-maladie-digital/projects/4/views/2"
				target="_blank"
				rel="noopener noreferrer"
				class="px-4"
			>
				<VListItemAvatar class="d-none d-sm-inline-flex">
					<VIcon
						color="primary"
						x-large
					>
						{{ tagHiddenIcon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent>
					<VListItemTitle>
						Version 3.0
					</VListItemTitle>

					<VListItemSubtitle>
						La version 3 du Design System est en cours de conception et son développement commencera T3 2024.
					</VListItemSubtitle>
				</VListItemContent>

				<VIcon class="ml-4">
					{{ newTabIcon }}
				</VIcon>
			</VListItem>
		</VSheet>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiOpenInNew, mdiTagOutline, mdiTagHidden } from '@mdi/js';

	@Component
	export default class DocRoadmap extends Vue {
		newTabIcon = mdiOpenInNew;
		tagIcon = mdiTagOutline;
		tagHiddenIcon = mdiTagHidden;
		progress = 68;
	}
</script>

<style lang="scss" scoped>
	.v-list-item__subtitle {
		white-space: normal;
	}
</style>
