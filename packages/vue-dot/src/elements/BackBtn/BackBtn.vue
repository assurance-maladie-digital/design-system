<template>
	<VBtn
		:class="btnPadding"
		v-bind="options.btn"
		@click="$emit('click')"
	>
		<VIcon
			v-if="!hideBackIcon"
			v-bind="options.icon"
		>
			{{ backIcon }}
		</VIcon>
		{{ label }}
	</VBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiArrowLeft } from '@mdi/js';

	import { customizable } from '../../mixins/customizable';

	import { config } from './config';
	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				default: locales.label
			},
			hideBackIcon: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class BackBtn extends MixinsDeclaration {
		locales = locales;
		backIcon = mdiArrowLeft;

		get btnPadding(): string {
			return this.hideBackIcon ? 'pa-1 pa-sm-2' : 'pa-1 pa-sm-3';
		}
	}
</script>
