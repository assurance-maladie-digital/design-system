<template>
	<MaintenancePage/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import MaintenancePage from '../components/MaintenancePage'

	@Component({
		components: {
			MaintenancePage
		}
	})
	export default class Maintenance extends Vue {}
</script>
