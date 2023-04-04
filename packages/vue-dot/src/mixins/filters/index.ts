import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { mdiWindowClose, mdiChevronDown, mdiFilterVariant } from '@mdi/js';
import { FilterItem } from './types';

const Props = Vue.extend({
	props: {
		chipsLimit: {
			type: Number,
			default: 4
		},
		applyButton: {
			type: Boolean,
			default: false
		},
		hideReset: {
			type: Boolean,
			default: false
		},
		limitedFilters: {
			type: Array as PropType<string[]>,
			default: () => []
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class FilterMixin extends MixinsDeclaration {

	downIcon = mdiChevronDown;
	deleteIcon = mdiWindowClose;
	filterIcon = mdiFilterVariant;

	onChange(event: unknown, filter: FilterItem): void {
		if (!event || typeof event === undefined) {
			return;
		}

		const newChip = {
			text: filter.formatting == undefined ? event : filter.formatting(event),
			value: event
		};

		let chips: { text: unknown; value: unknown }[] = [];

		const chipExist = filter.chips.some(chip => chip.value === newChip.value);

		if (chipExist) {
			return;
		} else if (filter.splited) {
			if (typeof event === 'object' && Object.values(event as object).length) {
				chips = Object.values(event as object).map((value: unknown) => ({
					text: filter.formatting == undefined ? value : filter.formatting(value),
					value
				}));
			} else {
				chips = [];
			}
		} else if (filter.limited) {
			chips = [
				newChip
			];
		} else {
			chips = [
				...filter.chips,
				newChip
			];
		}

		this.$set(filter, 'chips', chips);

		if (filter.clearAfterValidate) {
			this.$set(filter, 'value', filter.defaultValue ?? null);
		}

		this.$emit('onchange-filters');
	}

	get isMobile(): boolean {
		return this.$vuetify.breakpoint.smAndDown;
	}

	getChipValue(event: unknown): unknown {
		if (typeof event === 'string') {
			return event;
		} else if (typeof event === 'object') {
			const value = Object.values(event as object)[0];

			return value;
		}
	}

	removeAccents(str: string): string | undefined {
		return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	}

	closeSidebar(): void {
		this.$emit('close-sidebar');
	}

	removeChip(event: object): void {
		this.$emit('remove-chip', event);
	}

	resetFilter(): void {
		this.$emit('reset-filter');
	}

	applyFunction(): void {
		this.$emit('apply-function');
	}
}
