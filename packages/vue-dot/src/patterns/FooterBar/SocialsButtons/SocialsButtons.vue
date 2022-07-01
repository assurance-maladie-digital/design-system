<template>
	<div name="socials">
		<v-col
			cols="12"
			:class="isMobile ? '' : 'd-flex justify-end'"
			style="padding: 0"
			no-gutters
		>
			<span
				class="follow-us-text mr-3"
			>
				Suivez-nous
			</span>
		</v-col>
		<v-col
			cols="12"
			:class="isMobile ? '' : 'd-flex justify-end'"
			style="padding: 0; margin-top: 2px"
		>
			<VBtn
				v-for="social in customSocialsList"
				:key="social.index"
				text
				icon
				color="grey darken-2"
				@click="openLink(social.link)"
			>
				<VIcon>
					{{ social.icon }}
				</VIcon>
			</VBtn>
		</v-col>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Socials } from './types';
	import { mdiTwitter, mdiLinkedin } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			customSocialsList: {
				type: Array as PropType<Socials[]>,
				default: () => [
					{ icon: mdiLinkedin, href: 'https://www.linkedin.com/company/assurance-maladie/' },
					{ icon: mdiTwitter, href: 'https://twitter.com/Assur_Maladie' }
				]
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FooterBar extends MixinsDeclaration {

		openLink(link: string): void {
			window.open(link, '_blank');
		}
		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}
	}
</script>