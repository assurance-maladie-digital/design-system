<template>
	<div class="vd-cookies-information">
		<h2 class="text-subtitle-1 font-weight-bold mb-2">
			{{ locales[type].title }}
		</h2>

		<p>
			{{ locales[type].description }}
		</p>

		<details @toggle="toggleDetails">
			<summary class="mb-1">
				{{ detailsLabel }}

				<VIcon class="mr-2">
					{{ arrowIcon }}
				</VIcon>
			</summary>

			<CookiesTable
				:items="tableItems"
				class="mb-2"
			/>
		</details>

		<VRadioGroup
			v-if="showRadios"
			:value="parsedValue"
			:rules="rules"
			row
			hide-details="auto"
			class="mt-0"
			@change="emitChangeEvent"
		>
			<VSpacer />

			<VRadio
				:label="locales.reject"
				:value="RadioValuesEnum.REJECT"
			/>

			<VRadio
				:label="locales.accept"
				:value="RadioValuesEnum.ACCEPT"
				class="mr-0"
			/>
		</VRadioGroup>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';

	import { TypeEnum, TYPE_ENUM_VALUES } from './TypeEnum';
	import { RadioValuesEnum } from './RadioValuesEnum';

	import CookiesTable from '../CookiesTable';
	import { CookiesList } from '../CookiesTable/types';

	import { propValidator } from '../../../helpers/propValidator';

	import { required } from '../../../rules/required';

	import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			type: {
				type: String as PropType<TypeEnum>,
				required: true,
				validator: (value: string) => propValidator('type', TYPE_ENUM_VALUES, value)
			},
			tableItems: {
				type: Array as PropType<CookiesList[]>,
				required: true
			},
			value: {
				type: Boolean as PropType<boolean | null>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			CookiesTable
		},
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class CookiesInformation extends MixinsDeclaration {
		RadioValuesEnum = RadioValuesEnum;
		locales = locales;

		rules = [
			required
		];

		open = false;

		get parsedValue(): string | null {
			if (this.value === null) {
				return null;
			}

			return this.value ? RadioValuesEnum.ACCEPT : RadioValuesEnum.REJECT;
		}

		get showRadios(): boolean {
			return this.type !== TypeEnum.ESSENTIALS;
		}

		get detailsLabel(): string {
			return this.open ? locales.hideInformation : locales.showInformation;
		}

		get arrowIcon(): string {
			return this.open ? mdiChevronUp : mdiChevronDown;
		}

		toggleDetails(event: Event): void {
			const { open } = event.target as HTMLDetailsElement;
			this.open = open;
		}

		emitChangeEvent(value: string): void {
			const parsedValue = Boolean(value === RadioValuesEnum.ACCEPT);
			this.$emit('change', parsedValue);
		}
	}
</script>

<style lang="scss" scoped>
	details > summary {
		cursor: pointer;
		list-style: none;
		user-select: none;

		&::marker,
		&::-webkit-details-marker {
			display: none;
		}
	}

	.v-input--radio-group ::v-deep .v-messages {
		text-align: right;
	}
</style>
