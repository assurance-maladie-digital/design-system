<template>
	<div>
		<div v-for="contributor in contributors" v-bind:key="contributor">
			<a 	class="subtitle-2 font-weight-bold text-decoration-none text--black" 
				:href="'https://github.com/' + contributor.link">{{contributor.name}}
			</a>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocHomeContributors extends Vue {
		contributors = [
			{
				name: 'Coulon Baptiste',
				link: 'BaptisteCool'
			},
			{
				name: 'Yvon MICHEL',
				link: 'mmi16389'
			},
			{
				name: 'Kevin Petitnicolas-Yoeusley',
				link: 'PYKEngine'
			},
			{
				name: 'DamiloGaston',
				link: 'DamiloGaston'
			},
			{
				name: 'Linaida',
				link: 'Linaida'
			},
			{
				name: 'Sebastien Caron',
				link: 'tilucifer'
			},
			{
				name: 'a-scolan',
				link: 'a-scolan'
			},
			{
				name: 'mathilde-haubert',
				link: 'mathilde-haubert'
			}
		]
	}
</script>