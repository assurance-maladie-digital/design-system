<template>
	<div class="vd-emotion-picker">
		<div class="d-flex justify-center">
			<H6
				class="mb-4"
			>
				Cette page à t'elle ete utile ?
			</H6>
		</div>
		<div class="d-flex justify-space-between">
			<div
				class="sad"
				@click="selectEmotion('sad')"
			>
				<div
					:class="{ active: isActive('sad') }"
					class="icon-button"
				>
					<div class="d-flex justify-center">
						<VIcon
							x-large
							class="mt-2"
							color="orange-darken-20"
						>
							{{ sadIcon }}
						</VIcon>
					</div>
					<div class="mt-1 d-flex justify-center">
						<span>
							Pas du tout
						</span>
					</div>
				</div>
			</div>
			<div
				class="neutral"
				@click="selectEmotion('neutral')"
			>
				<div
					:class="{ active: isActive('neutral') }"
					class="icon-button"
				>
					<div class="d-flex justify-center">
						<VIcon
							x-large
							class="mt-2"
							color="yellow-darken-20"
						>
							{{ neurtralIcon }}
						</VIcon>
					</div>
					<div class="mt-1 d-flex justify-center">
						<span>
							Moyen
						</span>
					</div>
				</div>
			</div>
			<div
				class="happy"
				@click="selectEmotion('happy')"
			>
				<div
					:class="{ active: isActive('happy') }"
					class="icon-button"
				>
					<div class="d-flex justify-center">
						<VIcon
							x-large
							class="mt-2"
							color="turquoise-darken-20"
						>
							{{ happyIcon }}
						</VIcon>
					</div>
					<div class="mt-1 d-flex justify-center">
						<span>
							Parfait !
						</span>
					</div>
				</div>
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

		selectedEmotion = '';

		selectEmotion(emotion: string): void {
			this.selectedEmotion = emotion;
			this.$emit('update-emotion', emotion);
		}

		isActive(emotion: string): boolean {
			return this.selectedEmotion === emotion ? true : false;
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

h6 {
	font-size: 20px
}
.icon-button {
	height: 88px;
	width: 88px;
	border-radius: 8px;
}
.icon-button:hover {
	cursor: pointer;
}
.sad {
	.icon-button:hover {
		background-color: $vd-orange-lighten-90;
	}
	.active {
		border: 1px solid $vd-orange-darken-20;
		background-color: $vd-orange-lighten-90;
	}
}
.neutral {
	.icon-button:hover {
		background-color: $vd-yellow-lighten-90;
	}
	.active {
		border: 1px solid $vd-yellow-darken-20;
		background-color: $vd-yellow-lighten-90;
	}
}
.happy {
	.icon-button:hover {
		background-color: $vd-turquoise-lighten-90;
	}
	.active {
		border: 1px solid $vd-turquoise-darken-20;
		background-color: $vd-turquoise-lighten-90;
	}
}
</style>
