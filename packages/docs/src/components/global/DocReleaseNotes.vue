<template>
	<div class="doc-release-notes w-100">
		<VAutocomplete
			v-model="search"
			:items="releases"
			label="Sélectionnez la version"
			hide-details
			filled
			item-text="name"
			return-object
			class="mb-6"
		>
			<template #prepend-inner>
				<VSheet
					min-width="40px"
					color="transparent"
					class="ml-1 mr-2"
				>
					<VProgressCircular
						v-if="state === StateEnum.PENDING"
						:size="20"
						:width="1"
						indeterminate
					/>

					<VIcon v-else>
						{{ searchIcon }}
					</VIcon>
				</VSheet>
			</template>

			<template #item="{ item }">
				<VListItemAction>
					<VIcon>
						{{ releaseIcon }}
					</VIcon>
				</VListItemAction>

				<VListItemContent>
					<VListItemTitle
						v-text="item.name"
						class="font-weight-bold"
					/>

					<VListItemSubtitle>
						Publiée le {{ formatReleaseDate(item.date) }}
					</VListItemSubtitle>
				</VListItemContent>
			</template>
		</VAutocomplete>

		<VSkeletonLoader
			v-if="state === StateEnum.PENDING"
			type="image"
			height="180px"
		/>

		<VCard
			v-else
			min-height="180px"
			outlined
		>
			<div
				v-if="Boolean(search)"
				class="d-flex pa-4"
			>
				<h2 class="text-h5 font-weight-bold">
					{{ search.name }}
				</h2>

				<VSpacer />

				<div class="d-flex align-center">
					<DocTooltipBtn
						label="Créer un rapport de bug"
						href="https://github.com/assurance-maladie-digital/design-system/issues/new?template=bug_report.md"
						target="_blank"
						rel="noopener noreferrer"
					>
						<template #icon>
							<VIcon>
								{{ alertIcon }}
							</VIcon>
						</template>
					</DocTooltipBtn>

					<DocTooltipBtn
						:href="search.url"
						label="Voir la version sur GitHub"
						target="_blank"
						rel="noopener noreferrer"
					>
						<template #icon>
							<VIcon>
								{{ openIcon }}
							</VIcon>
						</template>
					</DocTooltipBtn>
				</div>
			</div>

			<VDivider />

			<div class="doc-releases pa-4">
				<DocMarkdown v-if="Boolean(search)">
					{{ search.body }}
				</DocMarkdown>
			</div>
		</VCard>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import dayjs from 'dayjs';

	import {
		mdiTextBoxSearchOutline,
		mdiTagOutline,
		mdiAlertCircleOutline,
		mdiOpenInNew
	} from '@mdi/js';

	import DocMarkdown from '../code/DocMarkdown.vue';
	import DocTooltipBtn from '../page/DocTooltipBtn.vue';

	import { formatDate } from '@cnamts/vue-dot/src/functions/formatDate';
	import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	import { getAllReleases } from '../../services/github/api';
	import { ReleaseDescription } from '../../services/github/types';

	import { Fetch } from '../../decorators';

	@Component({
		components: {
			DocMarkdown,
			DocTooltipBtn
		}
	})
	export default class DocReleaseNotes extends Vue {
		StateEnum = StateEnum;

		searchIcon = mdiTextBoxSearchOutline;
		releaseIcon = mdiTagOutline;
		alertIcon = mdiAlertCircleOutline;
		openIcon = mdiOpenInNew;

		state = StateEnum.IDLE;

		search: ReleaseDescription | null = null;
		releases: ReleaseDescription[] = [];

		@Fetch
		async fetch(): Promise<void> {
			this.state = StateEnum.PENDING;

			const releases = await getAllReleases();

			this.state = StateEnum.RESOLVED;
			this.releases = releases;
			this.search = releases[0];
		}

		formatReleaseDate(date: string): string {
			return formatDate(dayjs(date));
		}
	}
</script>

<style lang="scss" scoped>
	@import '~/assets/styles/typography/headings.scss';

	.doc-releases ::v-deep .v-markdown {
		@include headings;

		> p,
		> ul > li,
		> ul > li p {
			margin-bottom: 16px !important;
		}
	}
</style>
