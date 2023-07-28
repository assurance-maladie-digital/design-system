<template>
	<ErrorPage
		:page-title="locales.pageTitle"
		:message="locales.message"
		no-btn
	>
		<template #illustration>
			<img
				:src="require('../../assets/images/maintenance.svg')"
				alt=""
				width="170px"
				height="170px"
			>
		</template>
	</ErrorPage>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { locales } from './locales';

	@Component
	export default class MaintenancePage extends Vue {
		locales = locales;
	}
</script>
