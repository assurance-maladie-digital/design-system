<template>
	<NotFoundPage/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import NotFoundPage from '../components/NotFoundPage'

	@Component({
		components: {
			NotFoundPage
		}
	})
	export default class NotFound extends Vue {}
</script>
