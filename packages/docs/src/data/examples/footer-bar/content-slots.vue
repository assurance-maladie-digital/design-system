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
			<a
				href="https://ameli.fr/assure/aide"
				class="text--primary my-3 mx-4"
			>
				Aide
			</a>
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
	}
</script>
