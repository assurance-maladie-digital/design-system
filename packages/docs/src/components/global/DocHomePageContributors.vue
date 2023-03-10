<template>
	<ul class="doc-home-page-contributors pl-0">
		<li
			v-for="contributor in contributors"
			:key="contributor.id"
		>
			<a
				:href="contributor.html_url"
				class="text-body-1 font-weight-bold"
			>
				{{ contributor.login }}
			</a>
		</li>
	</ul>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { TEAM_MEMBER_IDS, OLD_TEAM_MEMBER_IDS } from '../../constants';

	import { Fetch } from '../../decorators';
	import { getContributors } from '../../services/github/api';
	import { Contributor } from '../../services/github/types';

	@Component
	export default class DocHomePageContributors extends Vue {
		contributors: Contributor[] = [];

		@Fetch
		async fetch(): Promise<void> {
			const contributors = await getContributors();

			contributors.forEach((el) => {
				const isBot = el.login.includes('[bot]');
				const isMember = TEAM_MEMBER_IDS.includes(el.id.toString());
				const isOldMember = OLD_TEAM_MEMBER_IDS.includes(el.id.toString());

				if (isBot || isMember || isOldMember) {
					return;
				}

				this.contributors.push(el);
			});
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		list-style: none;
	}
</style>
