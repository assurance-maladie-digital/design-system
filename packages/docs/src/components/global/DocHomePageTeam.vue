<template>
	<div class="doc-homepage-team">
		<VRow class="mb-8">
			<VCol
				v-for="(member, index) in team"
				:key="index"
				cols="auto"
				sm="4"
				md="4"
				class="d-flex flex-column"
			>
				<img
					:src="require('../../assets/img/team/' + member.img)"
					class="doc-img-team mb-4"
				>

				<p
					:aria-describedby="index"
					class="text-subtitle-1 text-uppercase font-weight-bold mb-1"
				>
					{{ member.name }}
				</p>

				<p
					:id="index"
					class="text-subtitle-2 mb-0"
				>
					{{ member.role }}
				</p>
			</VCol>
		</VRow>

		<h3 class="text-h6 font-weight-bold mb-6">
			Anciens membres de l’équipe principale
		</h3>

		<ul class="pl-0">
			<li
				v-for="contributor in oldTeamMembers"
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
				img: 'valentin_b.jpg'
			},
			{
				name: 'Melissa Rolas',
				role: 'UX/UI Designer',
				img: 'person.svg'
			},
			{
				name: 'Edouard Le Gall',
				role: 'UX/UI Designer',
				img: 'person.svg'
			},
			{
				name: 'Dylan Broussard',
				role: 'Tech Lead Front',
				img: 'dylan_b.jpg'
			},
			{
				name: 'Christophe Gaon',
				role: 'Tech Lead',
				img: 'person.svg'
			},
			{
				name: 'David Fyon',
				role: 'Développeur Front',
				img: 'person.svg'
			},
			{
				name: 'Julien Baylac',
				role: 'Développeur Front',
				img: 'julien_b.jpg'
			}
		];

		oldTeamMembers: Contributor[] = [
			{
				id: '64596909',
				login: 'francoiscoue',
				html_url: 'https://github.com/francoiscoue'
			}
		];

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
	.doc-img-team {
		height: 160px;
		width: 160px;
	}

	ul {
		list-style: none;
	}
</style>
