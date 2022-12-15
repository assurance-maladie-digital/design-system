<template>
	<div class="vd-rating-picker">
		<!--first step-->
		<div class="first-step">
			<div class="d-flex justify-center">
				<H6
					class="mt-4"
				>
					Cette page à t'elle ete utile ?
				</H6>
			</div>
			<div class="ma-6 d-flex justify-space-between">
				<div
					class="icon-button"
				>
					<VIcon x-large>
						{{ sadIcon }}
					</VIcon>
					<div class="d-flex justify-center text-subtitle-2">
						Pas du tout
					</div>
				</div>
				<div
					class="icon-button"
				>
					<VIcon x-large>
						{{ neurtralIcon }}
					</VIcon>
					<div class="d-flex justify-center text-subtitle-2">
						Moyen
					</div>
				</div>
				<div
					class="icon-button"
				>
					<VIcon x-large>
						{{ happyIcon }}
					</VIcon>
					<div class="d-flex justify-center text-subtitle-2">
						Parfait !
					</div>
				</div>
			</div>
			<div class="d-flex justify-end">
				<VBtn
					class="mr-2 mt-5 close-button"
					color="primary"
					text
				>
					Plus tard
				</VBtn>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	//icons
	import { mdiEmoticonSadOutline, mdiEmoticonNeutralOutline, mdiEmoticonHappyOutline } from '@mdi/js';

	@Component
	export default class FooterWrapper extends Vue {

		//icons
		sadIcon = mdiEmoticonSadOutline;
		neurtralIcon = mdiEmoticonNeutralOutline;
		happyIcon = mdiEmoticonHappyOutline;

	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

.first-step {
	border: 1px solid grey;
	max-width: 450px !important;
	padding: 16px;
	border-radius: 8px;

	h6 {
		font-size: 20px
	}
	.close-button {
		text-transform: none;
	}
}
.icon-button {
	height: 88px;
	width: 88px;
	border-radius: 8px;
}
.icon-button:hover {
	cursor: pointer;
	background-color: $vd-orange-lighten-90;
	//border: 1px solid $vd-orange-darken-20;
}
</style>
