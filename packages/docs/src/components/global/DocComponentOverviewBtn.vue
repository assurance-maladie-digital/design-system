<template>
	<VBtn
		:style="{
			bottom: '36px',
			right: '36px'
		}"
		fixed
		to="/composants/vue-ensemble"
		nuxt
		color="primary"
		height="42px"
	>
		<VIcon class="mr-2">
			{{ dashboardIcon }}
		</VIcon>

		Composants
	</VBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiViewDashboard } from '@mdi/js';

	@Component
	export default class DocComponentOverviewBtn extends Vue {
		dashboardIcon = mdiViewDashboard;
	}
</script>
