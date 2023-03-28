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
export class filters extends MixinsDeclaration {

	downIcon = mdiChevronDown;
	deleteIcon = mdiWindowClose;
	filterIcon = mdiFilterVariant;

	onChange(event: unknown, filter: FilterItem): void {
		if (!event) {
			return;
		}

		const newChip = {
			text: filter.formatting ? filter.formatting(event) : event,
			value: event
		};

		let chips: unknown[] = [];

		const chipExist = filter.chips.some(chip => chip.value === newChip.value);

		if (chipExist) {
			return;
		} else if (filter.splited) {
			if (Object.values(event as object).length) {
				chips = Object.values(event as object).map((value: unknown) => ({
					text: filter.formatting ? filter.formatting(value) : value,
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
