<template>
	<FooterBar v-bind="docProps">
		<template #prepend>
			<a
				href="/"
				class="text--primary my-3 mx-4"
			>
				Accueil
			</a>
		</template>

		<template #append>
			<p class="text--secondary my-3 mx-4">
				{{ currentYear }}
			</p>
		</template>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FooterBarContentSlots extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			cookiesRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};

		currentYear = new Date().getFullYear();
	}
</script>
