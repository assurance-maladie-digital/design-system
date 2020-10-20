<template>
	<div class="theme-container">
		<VApp>
			<VMain>
				<ErrorPage
					code="404"
					page-title="Page non trouvée"
					message="Il semblerait qu'il y ait eu une erreur !"
					btn-route="/"
				/>
			</VMain>
		</VApp>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	/** 404 page */
	@Component
	export default class NotFound extends Vue {}
</script>
