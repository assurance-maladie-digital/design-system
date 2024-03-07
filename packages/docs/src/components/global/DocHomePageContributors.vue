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

	import { TEAM_MEMBERS, OLD_TEAM_MEMBERS } from '../../constants';

	import { Fetch } from '../../decorators';
	import { getContributors } from '../../services/github/api';
	import { Contributor } from '../../services/github/types';

	@Component
	export default class DocHomePageContributors extends Vue {
		contributors: Contributor[] = [];

		@Fetch
		async fetch(): Promise<void> {
			const teamMembers = TEAM_MEMBERS.map((el) => el.gitHubId);
			const oldTeamMembers = OLD_TEAM_MEMBERS.map((el) => el.gitHubId);

			const contributors = await getContributors();

			contributors.forEach((el) => {
				const isBot = el.login.includes('[bot]');
				const isMember = teamMembers.includes(el.id);
				const isOldMember = oldTeamMembers.includes(el.id);

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
