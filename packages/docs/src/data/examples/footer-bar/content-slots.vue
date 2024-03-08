<template>
	<FooterBar v-bind="docProps">
		<template #prepend>
			<li class="my-3 mx-4">
				<a href="/" class="text--primary">
					Accueil
				</a>
			</li>
		</template>

		<template #append>
			<li class="text--secondary my-3 mx-4">
				{{ currentYear }}
			</li>
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
