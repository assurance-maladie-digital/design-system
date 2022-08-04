<template>
	<div class="doc-homepage-team">
		<VRow class="mb-5">
			<VCol
				v-for="(member, index) in team"
				:key="index"
				cols="12"
				sm="6"
				md="4"
				class="d-flex flex-column"
			>
				<img
					:src="require('../../assets/img/team/' + member.img)"
					class="doc-img-team mb-4"
				>

				<p
					:aria-describedby="index"
					class="text--subtitle-2 text-uppercase font-weight-bold mb-1"
				>
					{{ member.name }}
				</p>

				<p
					:id="index"
					class="text--caption mb-0"
				>
					{{ member.role }}
				</p>
			</VCol>
		</VRow>

		<h3 class="text--h4 mb-6">
			Anciens membres de l'équipe principale
		</h3>

		<ul class="pl-0">
			<li
				v-for="contributor in oldTeamMembers"
				:key="contributor.id"
			>
				<a
					:href="contributor.html_url"
					class="text--subtitle-2 font-weight-bold"
				>
					{{ contributor.login }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { OLD_TEAM_MEMBER_IDS } from '../../constants';

	import { Fetch } from '../../decorators';
	import { getContributors } from '../../services/github/api';
	import { Contributor } from '../../services/github/types';

	@Component
	export default class DocHomePageTeam extends Vue {
		team = [
			{
				name: 'Dr Valentin Becquet',
				role: 'UX/UI Designer',
				img: 'valentin_b.png'
			},
			{
				name: 'Dylan Broussard',
				role: 'Tech Lead, Développeur Front',
				img: 'dylan_b.png'
			},
			{
				name: 'François Coué',
				role: 'UX/UI Designer',
				img: 'francois_c.png'
			},
			{
				name: 'Aubin Mottier',
				role: 'Développeur Front',
				img: 'aubin_m.png'
			}
		];

		oldTeamMembers: Contributor[] = [];

		@Fetch
		async fetch(): Promise<void> {
			const contributors = await getContributors();

			contributors.forEach((el) => {
				const isBot = el.login.includes('[bot]');
				const isNotOldMember = !OLD_TEAM_MEMBER_IDS.includes(el.id.toString());

				if (isBot || isNotOldMember) {
					return;
				}

				this.oldTeamMembers.push(el);
			});
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		list-style: none;
	}

	.doc-img-team {
		height: 160px;
		width: 160px;
	}
</style>
