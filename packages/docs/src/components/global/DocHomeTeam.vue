<template>
	<div class="mb-5">
		<VRow>
			<VCol v-for="member in team" v-bind:key="member.name" cols="4">
				<img class="ds-img-team" :src="require('../../assets/img/team/' + member.img_url)">
				<div class="subtitle-2 text-uppercase font-weight-bold">{{member.name}}</div>
				<div class="caption">{{member.role}}</div>
			</VCol>
		</VRow>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocHomeTeam extends Vue {
		team = [
			{
				name: 'Julien Baylac',
				role: 'Développeur Front',
				img_url: 'julien_b.png'
			},
			{
				name: 'Dr Valentin Becquet',
				role: 'UX/UI Designer',
				img_url: 'valentin_b.png'
			},
			{
				name: 'Dylan Broussard',
				role: 'Tech Lead, Développeur Front',
				img_url: 'dylan_b.png'
			},
			{
				name: 'François Coué',
				role: 'UX/UI Designer',
				img_url: 'francois_c.png'
			},
			{
				name: 'Aubin Mottier',
				role: 'Développeur Front',
				img_url: 'aubin_m.png'
			}
		]
	}
</script>

<style lang="scss" scoped>
.ds-img-team {
	height: 160px;
	width: 160px;
}
</style>