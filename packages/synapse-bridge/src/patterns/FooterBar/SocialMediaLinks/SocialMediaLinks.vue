<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import { locales } from "../locales";
import type { SocialMediaLink } from "./types";

export default defineComponent({
	props: {
		links: {
			type: Array as PropType<SocialMediaLink[]>,
			default: null,
		},
	},
	data() {
		return {
			locales,
		};
	},
});
</script>

<template>
	<div class="vd-social-media-links">
		<span class="text-subtitle-2 primary--text">
			{{ locales.followUs }}
		</span>

		<div class="d-flex justify-start justify-sm-end max-width-none mx-n2">
			<VBtn
				v-for="social, index in links"
				:key="index"
				:href="social.href"
				target="_blank"
				rel="noopener noreferrer"
				icon
				class="mx-1"
				elevation='0'
				variant="text"
			>
				<VIcon size="30px">
					{{ social.icon }}
				</VIcon>
			</VBtn>
		</div>
	</div>
</template>
