<template>
	<div class="doc-homepage-team">
		<VRow class="mb-8">
			<VCol
				v-for="(member, index) in teamMembers"
				:key="index"
				cols="auto"
				sm="4"
				md="4"
				class="d-flex flex-column"
			>
				<a
					:href="member.url"
					class="text-decoration-none"
				>
					<img
						:src="require('../../assets/images/team/' + member.img)"
						class="doc-img-team mb-4"
					>

					<p
						:aria-describedby="index.toString()"
						class="text-subtitle-1 text-uppercase font-weight-bold mb-1"
					>
						{{ member.name }}
					</p>

					<p
						:id="index.toString()"
						class="text-subtitle-2 mb-0"
					>
						{{ member.role }}
					</p>
				</a>
			</VCol>
		</VRow>

		<h3 class="text-h6 font-weight-bold mb-6">
			Anciens membres de l’équipe principale
		</h3>

		<ul class="pl-0">
			<li
				v-for="(contributor, index) in oldTeamMembers"
				:key="index"
			>
				<a
					:href="contributor.url"
					class="text-body-1 font-weight-bold"
				>
					{{ contributor.name }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { TEAM_MEMBERS, OLD_TEAM_MEMBERS } from '../../constants';

	@Component
	export default class DocHomePageTeam extends Vue {
		teamMembers = TEAM_MEMBERS;
		oldTeamMembers = OLD_TEAM_MEMBERS;
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
