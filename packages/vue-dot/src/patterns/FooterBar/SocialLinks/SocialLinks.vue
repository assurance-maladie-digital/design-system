<template>
	<div name="vd-social-links">
		<VCol
			cols="12 pa-0"
			:class="{
				'd-flex justify-end': isMobile
			}"
			no-gutters
		>
			<span
				class="mr-3 subtitle-2 primary--text"
			>
				{{ locales.followUs }}
			</span>
		</VCol>
		<VCol
			cols="12"
			:class="isMobile ? '' : 'd-flex justify-end'"
			style="padding: 0; margin-top: 2px"
		>
			<VBtn
				v-for="social in links"
				:key="social.index"
				text
				icon
				color="grey darken-2"
				:href="social.href"
				target="_blank"
			>
				<VIcon>
					{{ social.icon }}
				</VIcon>
			</VBtn>
		</VCol>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import { locales } from '../locales';
	import Component, { mixins } from 'vue-class-component';

	import { SocialLink } from './types';

	const Props = Vue.extend({
		props: {
			links: {
				type: Array as PropType<SocialLink[]>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class SocialLinks extends MixinsDeclaration {

		locales = locales;

		openLink(link: string): void {
			window.open(link, '_blank');
		}
		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}
	}
</script>
