<template>
	<FooterWrapper>
		<FooterBtn inert>
			<% if (i18n) { %>{{ $t('components.layout.appFooter.versionLabel') }}<% } else { %>Version<% } %> {{ version }}
		</FooterBtn>

		<FooterBtn inert>
			<% if (i18n) { %>{{ $t('components.layout.appFooter.date') }}<% } else { %><%= footerDate %><% } %>
		</FooterBtn>
	</FooterWrapper>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FooterBtn from '@cnamts/vue-dot/src/patterns/FooterWrapper/FooterBtn';

	/** The application footer */
	@Component({
		components: {
			FooterBtn
		}
	})
	export default class AppFooter extends Vue {
		version = process.env.VUE_APP_VERSION;
	}
</script>
