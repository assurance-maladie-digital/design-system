<template>
	<VFadeTransition>
		<NuxtLink
			:to="target"
			class="text-none ma-3"
		>
			<VBtn
				v-show="showBtn"
				v-scroll="onScroll"
				color="primary"
				height="42px"
				:min-width="minWidth"
				:style="btnStyle"
			>
				<VIcon v-if="icon" class="mr-2">
					{{ btnIcon }}
				</VIcon>
				{{ title }}
			</VBtn>
		</NuxtLink>
	</VFadeTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiViewDashboard } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			title: {
				type: String,
				default: 'Action'
			},
			icon : {
				type: Boolean,
				default: false
			},
			target: {
				type: String,
				default: ''
			},
			threshold: {
				type: Number,
				default: 120
			},
			nudgeRight: {
				type: [String, Number],
				default: '40px'
			},
			nudgeBottom: {
				type: [String, Number],
				default: '40px'
			},
			showBtn: {
				type: Boolean,
				default: false
			},
			hidden: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocStickyButton extends MixinsDeclaration {
		btnIcon = mdiViewDashboard;

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}

		get btnStyle(): object {
			const right = this.nudgeRight || '0';
			const bottom = this.nudgeBottom || '0';
			return {
				bottom,
				right
			};
		}

		get minWidth(): string | null {
			return this.isMobile ? '36px' : null;
		}

		onScroll(): void {
			if (!this.hidden) return;
			this.showBtn = window.scrollY > this.threshold;
		}

		mounted(): void {
			if (!this.hidden) {
				this.showBtn = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
.v-btn {
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 1;
}
</style>
