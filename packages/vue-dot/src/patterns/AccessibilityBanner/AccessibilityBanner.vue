<template>
	<VSheet
		v-if="active"
		v-bind="options.sheet"
		:aria-label="locales.label"
		role="region"
	>
		<div class="d-flex align-center flex-wrap">
			<VBtn
				v-bind="options.customizeBtn"
				:width="btnWidth"
				:to="accessibilityRoute"
				@click="accept"
				@focusout="onFocusOut"
			>
				{{ locales.label }}
			</VBtn>
		</div>
	</VSheet>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			accessibilityRoute: {
				type: [Object, String] as PropType<RawLocation>,
				default: () => ({ name: '#main' })
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class CookieBanner extends MixinsDeclaration {
		locales = locales;
		active = false;

		mounted() {
			this.checkTabKey();
		}

		get btnWidth(): string {
			return this.$vuetify.breakpoint.smAndDown ? '100%' : 'auto';
		}

		accept(): void {
			this.active = false;
			this.$emit('accept');
			document.removeEventListener('keydown', this.checkTabKey);
		}

		checkTabKey(): void {
			document.addEventListener('keydown', (e) => {
				if (e.key === 'Tab') {
					this.active = true;
				} else {
					return;
				}
			});
		}

		onFocusOut(): void {
			this.active = false;
			document.removeEventListener('keydown', this.checkTabKey);
		}
	}
</script>
