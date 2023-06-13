<template>
	<div
		v-if="chips.length"
		class="vd-chips-list mx-n1"
	>
		<VChip
			v-for="(chip, index) in chips"
			:key="index"
			:close-icon="deleteIcon"
			:close-label="locales.chipCloseBtnLabel"
			color="cyan-darken-40"
			text-color="white"
			close
			small
			class="mx-1"
			@click:close="emitRemoveEvent"
		>
			{{ chip }}
		</VChip>

		<VChip
			v-if="showOverflowChip"
			color="cyan-lighten-60"
			text-color="cyan-darken-40"
			small
			outlined
			class="mt-2"
		>
			{{ `+${chips.length - overflowLimit}` }}
		</VChip>

		<VBtn
			color="primary"
			small
			text
			class="align-self-center px-2 ml-2"
			@click="emitResetEvent"
		>
			{{ locales.reset }}
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { locales } from './locales';

	import { mdiChevronUp, mdiWindowClose } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			chips: {
				type: Array as PropType<string[]>,
				default: () => []
			},
			overflowLimit: {
				type: Number,
				default: 4
			}
		}
	});

	@Component
	export default class ChipsList extends Props {
		locales = locales;

		deleteIcon = mdiWindowClose;
		upIcon = mdiChevronUp;

		get showOverflowChip(): boolean {
			return this.chips.length > this.overflowLimit;
		}

		emitResetEvent(): void {
			this.$emit('reset');
		}

		emitRemoveEvent(): void {
			this.$emit('remove', 'TODO:');
		}
	}
</script>
