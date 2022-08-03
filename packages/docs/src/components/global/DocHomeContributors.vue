<template>
	<div>
		<div 
			v-for="contributor in oldTeamMembresList" 
			:key="contributor.id"
		>
			<a 	class="subtitle-2 font-weight-bold text-decoration-none text--primary" 
				:href="contributor.html_url">
				{{contributor.login }}
			</a>
		</div>

		<h1 class="my-8">Contributeurs</h1>
		<div 
			v-for="contributor in contributorsList" 
			:key="contributor.id"
		>
			<a 	class="subtitle-2 font-weight-bold text-decoration-none text--primary" 
				:href="contributor.html_url">
				{{contributor.login }}
			</a>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	
	import { Fetch } from '../../decorators';
	import { getContributors } from '../../services/github/api';
	import { Contributor } from '../../services/github/types';

	@Component
	export default class DocContributors extends Vue {

		contributors: Contributor[] = [];
		teamIds = [
			'10298932', 
			'56488255', 
			'43619846'
		];
		oldTeamMembers = [
			'6760432', 
			'44802047', 
			'46431396'
		];

		@Fetch
		async fetch(): Promise<void> {
			const contributors = await getContributors();
			
			this.contributors = contributors
		}

		get oldTeamMembresList(): Contributor[] {
			let members: Contributor[] = []
			this.contributors.forEach((el) => {
					if(
						!el.login.includes('[bot]') 
						&& this.oldTeamMembers.includes(el.id.toString())
					) {
						members.push(el)
					}
				}
			)
			return members
		}

		get contributorsList(): Contributor[] {
			let contributors: Contributor[] = []
			this.contributors.forEach((el) => {
					if(
						!el.login.includes('[bot]') 
						&& !this.teamIds.includes(el.id.toString()) 
						&& !this.oldTeamMembers.includes(el.id.toString())
					) {
						contributors.push(el)
					}
				}
			)
			return contributors
		}
	}
</script>
