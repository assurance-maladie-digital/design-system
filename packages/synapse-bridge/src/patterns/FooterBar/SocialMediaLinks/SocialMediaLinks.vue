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
		<span class="vd-social-media-links-label text-subtitle-2 text--primary">
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
				<VIcon size="30px" class="vd-social-media-links-icon">
					{{ social.icon }}
				</VIcon>
			</VBtn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use "@cnamts/design-tokens/dist/tokens";

	.vd-social-media-links-label.text--primary {
		color: tokens.$vd-primary;
	}

	.vd-social-media-links-icon {
		color: tokens.$vd-grey-base;
	}

</style>
